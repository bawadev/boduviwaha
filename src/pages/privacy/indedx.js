import { jsx, Box, Container, Heading, Text, Link } from 'theme-ui';

const PrivacyPolicy = () => {
  return (
    <Box as="section" sx={styles.section}>
      <Container>
        <Heading as="h1" sx={styles.title}>Privacy Policy</Heading>
        <Text sx={styles.date}>Effective date: January 01, 2019</Text>

        <Text sx={styles.paragraph}>
          Mindada.lk Matrimony Service (pvt) Ltd ("us", "we", or "our") operates the https://mindada.lk/ website and the Mindada (මින්දද) - Marriage proposals in Sri Lanka mobile application (the "Service").
        </Text>

        <Text sx={styles.paragraph}>
          This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
        </Text>

        <Heading as="h2" sx={styles.sectionHeading}>Information Collection And Use</Heading>
        <Text sx={styles.paragraph}>
          We collect several different types of information for various purposes to provide and improve our Service to you.
        </Text>

        <Heading as="h3" sx={styles.subHeading}>Types of Data Collected</Heading>
        <Heading as="h4" sx={styles.subSubHeading}>Personal Data</Heading>
        <Text sx={styles.paragraph}>
          While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
        </Text>
        <ul>
          <li>Phone number</li>
          <li>National identity card details</li>
          <li>Photo</li>
        </ul>

        <Heading as="h4" sx={styles.subSubHeading}>Usage Data</Heading>
        <Text sx={styles.paragraph}>
          We may also collect information that your browser sends whenever you visit our Service or when you access the Service by or through a mobile device ("Usage Data").
        </Text>

        {/* Add more sections here following the same pattern */}

        <Heading as="h2" sx={styles.sectionHeading}>Contact Us</Heading>
        <Text sx={styles.paragraph}>
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <Link href="mailto:support@mindada.lk">support@mindada.lk</Link>
        </Text>
      </Container>
    </Box>
  );
};

export default PrivacyPolicy;

const styles = {
  section: {
    py: 5,
  },
  title: {
    fontSize: 5,
    mb: 3,
  },
  date: {
    fontSize: 1,
    mb: 4,
    color: 'textMuted',
  },
  paragraph: {
    mb: 3,
  },
  sectionHeading: {
    fontSize: 4,
    mt: 4,
    mb: 3,
  },
  subHeading: {
    fontSize: 3,
    mt: 3,
    mb: 2,
  },
  subSubHeading: {
    fontSize: 2,
    mt: 3,
    mb: 2,
  },
};