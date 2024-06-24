
import { jsx, Box, Heading, Flex } from "theme-ui";
import { useState } from "react";
import PersonalInfo from "./steps/first";
import Address from "./steps/second";
import Complete from "./steps/third";

const steps = [
  { component: PersonalInfo, title: "Personal Information" },
  { component: Address, title: "Address" },
  { component: Complete, title: "Complete" },
];

export default function RegisterMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNextStep = (data) => {
    setFormData({ ...formData, ...data });
    setCurrentStep(currentStep + 1);
  };

  const handleReset = () => {
    setFormData({});
    setCurrentStep(0);
  };

  const StepComponent = steps[currentStep].component;

  return (
    <Box sx={styles.container}>
      <Box sx={{ height: "100px" }}>
      </Box>
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
              Step {index + 1}
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
    borderRadius: 4,
    p: 4,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
};
