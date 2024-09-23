import { useRouter } from "next/router";
import {
    jsx,
    Box,
    Button,
    Heading,
    Text,
  } from "theme-ui";
  
  export default function SubmissionSuccess({ onBack }) {
    const router = useRouter();
    return (
      <Box sx={styles.container}>
        <Box sx={styles.card}>
          <Heading as="h2" sx={styles.heading}>
            ස්තූතියි!
          </Heading>
          <Text sx={styles.message}>
            ඔබගේ දත්ත යොමු කර ඇත. අපගේ කණ්ඩායම විමර්ශනය කරමින් සිටී. ඔබට එහි සම්බන්ධිත තොරතුරු ඉක්මනින්ම ලබා දෙනු ලැබේ.
          </Text>
          <Button onClick={()=>router.push('/profile')} sx={styles.button}>
            ඔබේ ගිණුමට යොමු වන්න
          </Button>
        </Box>
      </Box>
    );
  }
  
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f4f4f4',
      padding: 20,
    },
    card: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      border: '1px solid #ddd',
      borderRadius: 8,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    heading: {
      fontSize: [3, 4],
      mb: 3,
    },
    message: {
      mb: 3,
      fontSize: 2,
      color: '#555',
      textAlign: 'center',
    },
    button: {
      px: 4,
      py: 2,
      fontSize: 2,
      borderRadius: 20,
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: 'darkblue',
      },
    },
  };
  