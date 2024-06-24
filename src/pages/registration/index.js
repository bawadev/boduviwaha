
import RegisterMultiStepForm from '../../components/forms/registration/registration-form';
import { jsx, Container } from 'theme-ui';


const RegistrationForm = () =>{
    return (
        <Container sx={styles.container}>
          <RegisterMultiStepForm />
        </Container>
      );
};
const styles = {
    container: {
      py: 4,
    },
  };
export default RegistrationForm;  //exporting the component so it can be used elsewhere in the app


