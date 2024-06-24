
import { jsx, Box, Button, Heading } from 'theme-ui';

export default function Complete({ onReset }) {
  return (
    <Box sx={styles.complete}>
      <Heading as="h2">Form Completed!</Heading>
      <Button onClick={onReset} sx={styles.button}>Reset</Button>
    </Box>
  );
}

const styles = {
  complete: {
    textAlign: 'center',
    p: 4,
    border: '1px solid #ddd',
    borderRadius: 4,
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  button: {
    mt: 3,
  },
};
