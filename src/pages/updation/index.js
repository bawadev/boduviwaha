
import { jsx, Container } from 'theme-ui';
import UpdateMultiStepForm from '../../components/forms/updation/registration-form';


const RegistrationForm = () =>{
    return (
        <Container sx={styles.container}>
          <UpdateMultiStepForm />
        </Container>
      );
};
const styles = {
    container: {
      py: 4,
    },
  };
export default RegistrationForm;  //exporting the component so it can be used elsewhere in the app


