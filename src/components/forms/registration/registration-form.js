import { jsx, Box, Heading, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { useRouter } from "next/router"; // Import useRouter from Next.js
import PersonalInfo from "./steps/first";
import SpiritualInfo from "./steps/second";
import AdditionalInfo from "./steps/third";
import SubmissionSuccess from "./steps/last";

const steps = [
  { component: PersonalInfo, title: "සාමාන්‍ය තොරතුරු" },
  { component: SpiritualInfo, title: "ආධ්‍යාත්මික තොරතුරු" },
  { component: AdditionalInfo, title: "විවාහය පිලිබඳ තොරතුරු" },
  { component: SubmissionSuccess, title: "ස්තුතියි" },
];

const backendBaseUrl = "https://ec2-16-171-153-216.eu-north-1.compute.amazonaws.com"
// const baseUrl = "http://localhost:8080"

export default function RegisterMultiStepForm() {
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

  const handleNextStep = async (data) => {
    console.log("form Data==============");
    console.log(data);
    try {
      switch (currentStep) {
        case 0:
          await submitPersonalInfo(data);
          break;
        case 1:
          await submitSpiritualInfo(data);
          break;
        case 2:
          await submitAdditionalInfo(data);
          break;
        default:
          break;
      }
      setFormData({ ...formData, ...data });
      setCurrentStep(currentStep + 1);
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const submitPersonalInfo = async (data) => {
    console.log("Submitting personal info...");
    // First API call to create a Buddhist user
    const userResponse = await fetch(`${backendBaseUrl}/api/buddhist-users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: data.firstName,
        lastName: data.lastName,
        dateOfBirth: new Date(data.dateOfBirth).toISOString().split("T")[0],
        gender: data.gender,
      }),
    });

    if (!userResponse.ok) {
      throw new Error("Failed to submit user data");
    }

    const updatedData = await userResponse.json();
    setUserData(updatedData);
    console.log("User data submitted successfully:", updatedData);

    // Second API call to create an address
    const addressResponse = await fetch(`${backendBaseUrl}/api/addresses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: data.address,
        province: data.province,
        district: data.district,
        nearestTown: data.nearestTown,
        user: {
          userId: updatedData.userId,
        },
      }),
    });

    if (!addressResponse.ok) {
      throw new Error("Failed to submit address data");
    }

    const addressData = await addressResponse.json();
    console.log("Address data submitted successfully:", addressData);
  };

  const submitSpiritualInfo = async (data) => {
    console.log("Submitting spiritual info...");
    const practiceResponse = await fetch(`${backendBaseUrl}/api/buddhist-practices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        origin: data.origin,
        timeInvestedOverall: data.timeInvestedOverall,
        deedCategoryDana: data.deedCategoryDana,
        deedCategorySeela: data.deedCategorySeela,
        deedCategoryBhavana: data.deedCategoryBhavana,
        deedCategoryOther: data.deedCategoryOther,
        meditationAnaPanaSathiTime: parseInt(data.meditationAnaPanaSathiTime),
        meditationMayithreeTime: parseInt(data.meditationMayithreeTime),
        bodyAwarenessTime: parseInt(data.bodyAwarenessTime),
        meditationOtherTime: parseInt(data.meditationOtherTime),
        meditationTeacher: data.meditationTeacher,
        seelaPansilTime: parseInt(data.seelaPansilTime),
        seelaAtaSilTime: parseInt(data.seelaAtaSilTime),
        seelaOtherTime: parseInt(data.seelaOtherTime),
        danaAmountAnimals: parseInt(data.danaAmountAnimals),
        danaAmountPeople: parseInt(data.danaAmountPeople),
        danaAmountSangha: parseInt(data.danaAmountSangha),
        sermonListenTime: parseInt(data.sermonListenTime),
        sermonSpeakersDetails: data.sermonSpeakersDetails,
        knowledgeAbhiDhamma: data.knowledgeAbhiDhamma,
        descriptionOfYourSelf: data.descriptionOfYourSelf,
        enterToHardPractice: data.enterToHardPractice,
        user: {
          userId: userData.userId,
        },
      }),
    });

    if (!practiceResponse.ok) {
      throw new Error("Failed to submit Buddhist practice data");
    }

    const practiceData = await practiceResponse.json();
    console.log("Buddhist practice data submitted successfully:", practiceData);
  };

  const submitAdditionalInfo = async (data) => {
    console.log("Submitting additional info...");
    const socialInfoResponse = await fetch(`${backendBaseUrl}/api/social-information`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        marriageStatus: data.marriageStatus,
        occupation: data.occupation,
        highestEducationQualification: data.highestEducationQualification,
        jobOrProfession: data.jobOrProfession,
        monthlyIncome: data.monthlyIncome,
        houseOwnership: data.houseOwnership,
        vehicleOwnership: data.vehicleOwnership,
        createdAt: new Date().toISOString(),
        user: { userId: userData.userId },
      }),
    });

    if (!socialInfoResponse.ok) {
      throw new Error("Failed to submit social info data");
    }

    const socialInfoData = await socialInfoResponse.json();
    console.log("Social info data submitted successfully:", socialInfoData);

    const healthInfoResponse = await fetch(`${backendBaseUrl}/api/health-information`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        height: data.height,
        weight: data.weight,
        physicalAttractiveness: data.physicalAttractiveness,
        skinTone: data.skinTone,
        kidsExpectancy: data.kidsExpectancy,
        smoking: data.smoking,
        drugUsage: data.drugUsage,
        healthCondition: data.healthCondition,
        disability: data.disability,
        mentalHealth: data.mentalHealth,
        geneticRisks: data.geneticRisks,
        yourMessage: data.yourMessage,
        createdAt: new Date().toISOString(),
        user: { userId: userData.userId },
      }),
    });

    if (!healthInfoResponse.ok) {
      throw new Error("Failed to submit health info data");
    }

    const healthInfoData = await healthInfoResponse.json();
    setUserData(healthInfoData);
    console.log("Health info data submitted successfully:", healthInfoData);
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
