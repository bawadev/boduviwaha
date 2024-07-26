import {
  jsx,
  Box,
  Container,
  Button,
  Input,
  Textarea,
  Label,
  Heading,
  Text,
  Flex,
} from "theme-ui";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import SectionHeading from "../components/section-heading";
const ContactFeedback = () => {
  return (
    <Box id="contact-feedback" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="අපට ඔබේ අදහස් යොමු කරන්න"
          title=""
        />
        <Text sx={styles.supportInfo}>
          <br />
          ඔබේ වටිනා අදහස් අප ඉතා ඉහලින් අගය කරන්නෙමු. මෙම සේවාව වඩාත් ඵලදායී ලෙස
          ලබා දීමට දියුණු කිරීමට ඔබේ අදහස් වලට අනුව අප කටයුතු කරමු. එසේම විමසීම
          සඳහා විද්‍යුත් තැපෑල හෝ වෙනත් ඕනෑම සමාජ මාද්‍යක් හරහා ඔබේ තොරතුරු යොමු
          කරන්න. විශාල පරිශීලක සංක්‍යාවක් අතරින් ඔබට අවශ්‍ය තොරතුරු අප ලබා
          දෙන්නෙමු. සමාජ සත්කාරක සේවාවක් ලෙස සලකා මෙය සමාජ මාද්‍ය ඔස්සේ ප්‍රචාරය
          කිරීම සඳහා අප ඔබේ සහයෝගය බලාපොරොත්තු වෙමු.
        </Text>
        <br />
        <br />
        <Flex sx={styles.content}>
          <Box as="form" sx={styles.form}>
            <Heading as="h2" sx={styles.formHeading}>
              ඔබේ අදහස් යොමු කරන්න
            </Heading>
            <Flex sx={styles.emailInput}>
              <Input
                type="email"
                placeholder="ඔබේ ලිපිනය, උදා:- example@gmail.com"
                sx={styles.input}
              />
            </Flex>
            <Textarea rows="4" placeholder="ඔබේ අදහස්" sx={styles.textarea} />
            <Button type="submit" sx={styles.submitButton}>
              අදහස් යොමු කරන්න
            </Button>
          </Box>
          <Box sx={styles.contactDetails}>
            <Heading as="h2" sx={styles.detailsHeading}>
              අපව සම්බන්ද කරගන්න
            </Heading>
            <Text sx={styles.address}>විද්‍යත් ලිපිනය</Text>
            <Text sx={styles.supportInfo}>
              <br />
              feedback@boduviwaha.lk
            </Text>
            <br />
            <br />
            <Text sx={styles.address}>දුරකථන අංකය</Text>
            <Text sx={styles.supportInfo}>
              <br />
              0775006708
            </Text>
            <br />
            <br />
            <Text sx={styles.address}>සමාජ මාධ්‍ය</Text>
            <Flex sx={styles.socialLinks}>
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                <FaFacebook />
                <Text>Facebook</Text>
              </a>
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                <FaInstagram />
                <Text>Instagram</Text>
              </a>
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                <FaTwitter />
                <Text>Twitter</Text>
              </a>
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                <FaYoutube />
                <Text>Youtube</Text>
              </a>
              {/* Add the second row of social links here */}
              <a href="#" style={{ display: "flex", alignItems: "center" }}>
                {/* Your second social icon */}
                <Text>{/* Your second social platform name */}</Text>
              </a>
              {/* Add more social links as needed */}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default ContactFeedback;

const styles = {
  heading: {
    color: "#0F0F0F",
    mb: 20,
    p: {
      color: "#f5c000",
    },
  },
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
  },
  content: {
    display: "flex",
    flexDirection: ["column", "column", "row"],
    gap: [30, 30, 50],
  },
  form: {
    flex: 1,
    backgroundColor: "white",
    padding: 4,
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  formHeading: {
    fontSize: 3,
    mb: 4,
  },
  emailInput: {
    display: "flex",
    mb: 3,
  },
  flagBox: {
    width: "60px",
    border: "1px solid",
    borderColor: "border",
    borderRadius: "4px 0 0 4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "background",
  },
  input: {
    flex: 1,
    borderColor: "border",
    borderRadius: "0 4px 4px 0",
    p: 2,
  },
  textarea: {
    borderColor: "border",
    borderRadius: "4px",
    fontSize:16,
    p: 2,
    mb: 3,
  },
  submitButton: {
    width: "100%",
    bg: "#D4AF37",
    color: "white",
    ":hover": {
      bg: "#C5A028",
    },
  },
  contactDetails: {
    flex: 1,
    p: 4,
  },
  detailsHeading: {
    color: "#f5c000",
    fontWeight: 600,
    fontSize: 3,
    mb: 3,
  },
  address: {
    color: "#f5c000",
    mb: 3,
  },
  supportInfo: {
    mb: 3,
  },
  socialHeading: {
    fontSize: 2,
    mb: 2,
  },
  socialIcons: {
    mb: 3,
  },
  socialLinks: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr", "repeat(2, 1fr)"],
    gap: 2,
    "& > a": {
      display: "flex",
      alignItems: "center",
      mr: 5,
      color: "text",
      textDecoration: "none",
    },
  },
};

