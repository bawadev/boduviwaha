/** @jsxImportSource theme-ui */
import { jsx, Box, Container, Heading, Text, Button, Input, Select } from 'theme-ui';
import { rgba } from 'polished';
import siteImages from '../resource/images';
import { useRouter } from 'next/router';

export default function Banner() {
  const handlePhoneChange = (e) => {
    const phoneInput = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    e.target.value = phoneInput; // Update the input value
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const phoneInput = e.target.phone.value;
    const phoneRegex = /^[0-9]{10}$/;

    if (phoneInput.includes('-')) {
      alert('Please enter a valid 10-digit phone number without a negative sign');
      return; // Prevent form submission
    }

    if (!phoneRegex.test(phoneInput)) {
      alert('Please enter a valid 10-digit phone number');
      return; // Prevent form submission
    }

    console.log('submitting...');
    // Redirect to the registration page with the phone number
    router.push(`/registration?phone=${phoneInput}`);
  };


  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h2" sx={styles.heroTitle}>
              දෙවියෙක් හා දිව්‍යාංගනාවක් සම වන විවාහය..
            </Heading>
            <Text as="p" sx={styles.desc}>
              &nbsp;&nbsp;&nbsp;&nbsp;ශ්‍රී ලංකාවේ ප්‍රථම බොදු ධාර්මික මංගල සේවය. දැහැමි දිවි පෙවෙතක් සඳහා
              ලාංකික තරුණ තරුණියන් සඳහා කාරුණික අත්වලක් වීමට අප සූදානම්. ඔබේ සංසාරගත ප්‍රේමය
              හිමිකර ගැනීමට අදම ලියාපදිංචි වන්න.
            </Text>
            <Box as="form" onSubmit={handleSubmit} sx={styles.form}>
              <Box sx={styles.inputGroup}>
                <Select sx={styles.select} defaultValue="+94">
                  <option value="" disabled>
                    රටෙහි කේතය
                  </option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+94">+94 (SL)</option>
                  {/* Add more country codes as needed */}
                </Select>
                <Input
                  onChange={handlePhoneChange}
                  sx={styles.input}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="&nbsp;&nbsp;&nbsp;&nbsp;ඔබේ දුරකථන අංකය"
                />
              </Box>
              <Button type="submit" sx={styles.button} variant="primary">
                ලියාපදිංචි වන්න
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${siteImages.bannerBg.src}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '50vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.6),
    boxShadow: ['0px 10px 16px rgba(52, 61, 72, 0.12)', null, null, null, 'none'],
    maxWidth: [null, null, null, 600, 500, null, 650],
    padding: ['20px', '30px', null, null, null, '30px 50px 60px', '50px 60px 90px'],
    borderRadius: 20,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', null, 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)': {
      maxWidth: 515,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, 28, 28, 40, , 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.4, null, null, null, null, null, 1.2],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)': {
      fontSize: 40,
    },
  },
  desc: {
    fontSize: [16, 17, 16, 20],
    lineHeight: [1.5, 1.5, 1.5, 1.6, 2, 1, 1.5],
    maxWidth: 440,
    marginTop: [15, 15, 15, null, null, null, 30],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px)': {
      mt: 15,
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 20,
  },
  select: {
    borderRadius: '20px 0 0 20px',
    borderRight: 'none',
    height: '50px',
    fontSize: '12px',
    padding: '0 15px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    outline: 'none',
    
    ':focus': {
      borderColor: 'yellow',
    },
  },
  input: {
    borderRadius: '0 20px 20px 0',
    height: '50px',
    fontSize: '16px',
    padding: '0 15px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderLeft: 'none',
    flex: '1',
    '::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    'input[type=number]': {
      MozAppearance: 'textfield',
    },
  },
  button: {
    fontSize: 20,
    fontWeight: 700,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, 16, 16, 20],
    ':focus': {
      outline: '0 none',
    },
  },
};
