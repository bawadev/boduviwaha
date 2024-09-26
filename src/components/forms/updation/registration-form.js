import { jsx, Box, Heading, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import PersonalInfo from "./steps/first";
import SpiritualInfo from "./steps/second";
import AdditionalInfo from "./steps/third";
import SubmissionSuccess from "./steps/last";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails, updateUserDetailsAddress, updateUserDetailsBUser } from "../../../store/slice/userDetailSlice";
import {
  createBuddhistUser,
  createAddress,
  createBuddhistPractice,
  createSocialInfo,
  createHealthInfo,
  updateBuddhistUser,
  updateAddress,
} from "../../../services/apiService"
import { getUserDetails } from "../../../services/userService";

const steps = [
  { component: PersonalInfo, title: "සාමාන්‍ය තොරතුරු" },
  { component: SpiritualInfo, title: "ආධ්‍යාත්මික තොරතුරු" },
  { component: AdditionalInfo, title: "විවාහය පිලිබඳ තොරතුරු" },
  { component: SubmissionSuccess, title: "ස්තුතියි" },
];

export default function UpdateMultiStepForm() {
  const [userData, setUserData] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const router = useRouter();
  

  useEffect(() => {
    const phone = router.query.phone;
    if (phone) {
      setFormData((prevFormData) => ({ ...prevFormData, phone }));
    }
  }, [router.query.phone]);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.userDetails.token);
  const userDetail = useSelector((state) => state.userDetails.userDetails);
  const authDetail = useSelector((state) => state.userDetails.authDetails);

  const handleNextStep = async (data) => {
    try {
      switch (currentStep) {
        case 0:
          console.log(authDetail.id)
          if (userDetail.userId>-1) {
            const address = await updateAddress(data, userDetail.userId, token);
            const userResponse = await updateBuddhistUser(userDetail.userId, data, token, authDetail.id);
            setUserData(userResponse);
            dispatch(updateUserDetailsAddress({userDetail: address}))
            dispatch(updateUserDetailsBUser({ userDetails: userResponse }));
          }else{
            const userResponse = await createBuddhistUser(data, token, authDetail.id);
            console.log(userResponse)
            setUserData(userResponse);
            dispatch(updateUserDetails({ userDetails: userResponse }));
  
            await createAddress(data, userResponse.userId, token);
          }
          break;

        case 1:
          await createBuddhistPractice(data, userDetail.userId, token);
          break;

        case 2:
          await createSocialInfo(data, userDetail.userId, token);
          const healthResponse = await createHealthInfo(data, userDetail.userId, token);
          setUserData(healthResponse);

          const userDetailResponse = await getUserDetails(authDetail.id, token);
          dispatch(updateUserDetails({ userDetails: userDetailResponse }));
          break;

        default:
          break;
      }

      setFormData({ ...formData, ...data });
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleReset = () => {
    setFormData({});
    setCurrentStep(0);
  };

  const StepComponent = steps[currentStep].component;

  return (
    <Box id="topBox" sx={styles.container}>
      <Box sx={{ height: "100px" }}></Box>
      <Flex sx={styles.steps}>
        {steps.map((step, index) => (
          <Box
            key={index}
            sx={{
              ...styles.step,
              ...(index === currentStep && styles.activeStep),
            }}
          >
            <Heading as="h3" sx={styles.stepTitle}>
              {"පියවර"} {index + 1}
            </Heading>
            <Heading as="h4" sx={styles.stepSubtitle}>
              {step.title}
            </Heading>
          </Box>
        ))}
      </Flex>
      <Box sx={styles.formContainer}>
        <StepComponent
          data={formData}
          onSubmit={handleNextStep}
          onReset={handleReset}
          onBack={handlePreviousStep}
        />
      </Box>
    </Box>
  );
}

const styles = {
  container: {
    maxWidth: 800,
    mx: "auto",
    py: 4,
  },
  steps: {
    display: "flex",
    justifyContent: "space-between",
    mb: 4,
  },
  step: {
    flex: 1,
    textAlign: "center",
    py: 2,
    borderBottom: "2px solid #ddd",
  },
  activeStep: {
    borderBottomColor: "primary",
  },
  stepTitle: {
    fontSize: 2,
    mb: 1,
  },
  stepSubtitle: {
    fontSize: 1,
  },
  formContainer: {
    border: "1px solid #ddd",
    borderRadius: 10,
    p: 4,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
};
