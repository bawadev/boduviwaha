import { jsx, Box, Container, Heading, Text, Link } from 'theme-ui';
import { useState } from 'react';

const FAQ = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Heading sx={styles.title}>Browse help topics</Heading>
        <FAQItem
          question="Fix a problem"
          subItems={[
            { question: "Troubleshoot problems playing videos", id: "playing-videos" },
            { question: "Troubleshoot account issues", id: "account-issues" },
            { question: "Fix upload problems", id: "upload-problems" },
            { question: "Fix YouTube Premium membership issues", id: "premium-issues" },
            { question: "Get help with the YouTube Partner Programme", id: "partner-programme" },
          ]}
          id="fix-a-problem"
        />
        <FAQItem
          question="Watch videos"
          subItems={[
            { question: "How to watch videos", id: "watch-videos" },
          ]}
          id="watch-videos"
        />
        <FAQItem
          question="Manage your account and settings"
          subItems={[
            { question: "Account settings guide", id: "account-settings" },
          ]}
          id="account-settings"
        />
        <FAQItem
          question="Supervised experience on YouTube"
          subItems={[
            { question: "Supervised accounts info", id: "supervised-experience" },
          ]}
          id="supervised-experience"
        />
        <FAQItem
          question="YouTube Premium and Music Premium"
          subItems={[
            { question: "Premium and Music Premium guide", id: "premium-guide" },
          ]}
          id="premium-guide"
        />
      </Container>
    </Box>
  );
};

const FAQItem = ({ question, subItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box sx={styles.faqItem}>
      <button onClick={() => setIsOpen(!isOpen)} style={styles.question}>
        {question}
        <span style={isOpen ? styles.arrowOpen : styles.arrowClosed}>▼</span>
      </button>
      {isOpen && (
        <Box sx={styles.subItems}>
          {subItems.map((item) => (
            <Link href={`#${item.id}`} key={item.id} sx={styles.link}>
              <Text>{item.question}</Text>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FAQ;

const styles = {
  section: {
    py: 5,
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '20px',
    borderBottom: '1px solid #ccc',
  },
  faqItem: {
    borderBottom: '1px solid #ccc',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'normal',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '15px 20px',
    textAlign: 'left',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background-color 0.3s ease',
  },
  arrowOpen: {
    marginLeft: '10px',
    transform: 'rotate(180deg)',
    transition: 'transform 0.3s ease',
  },
  arrowClosed: {
    marginLeft: '10px',
    transform: 'rotate(0deg)',
    transition: 'transform 0.3s ease',
  },
  subItems: {
    backgroundColor: '#f1f3f4',
    padding: '10px 20px',
  },
  link: {
    display: 'block',
    fontSize: '16px',
    color: '#1a73e8',
    textDecoration: 'none',
    padding: '8px 0',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};
