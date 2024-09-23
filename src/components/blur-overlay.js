/** @jsxImportSource theme-ui */
import { Box, Button, Text } from 'theme-ui';

const Overlay = ({ description, footerDescription,buttonText, onClose }) => {
  return (
    <Box sx={styles.overlay}>
      <Box sx={styles.overlayContent}>
        <Text sx={styles.message}>{description}</Text>
        <br/>
        <Text sx={styles.message}>{footerDescription}</Text>
        <br/>
        <br/>
        <Button sx={styles.closeButton} onClick={onClose}>{buttonText}</Button>
      </Box>
    </Box>
  );
};

export default Overlay;

const styles = {
  overlay: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw', // Smaller width
    height: '70vh', // Smaller height
    backgroundColor: 'rgba(255, 251, 196, 0.60)', // Ash transparent overlay
    backdropFilter: 'blur(2px)', // Blurs the content behind the overlay
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Makes sure the overlay is above everything
    borderRadius: '20px', // Rounded corners for the overlay
    overflow: 'hidden', // Ensures content doesn't overflow the rounded corners
  },
  overlayContent: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '12px', // Rounded corners for the content box
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow to give it a floating effect
    textAlign: 'center',
  },
  message: {
    fontSize: '1.25rem', // Message font size
    mb: 3,
  },
  closeButton: {
    backgroundColor: 'primary',
    color: 'white',
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    cursor: 'pointer',
    borderRadius: '8px',
  },
};
