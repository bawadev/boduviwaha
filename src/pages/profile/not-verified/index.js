import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import { rgba } from 'polished';
//import siteImages from '../resource/images';

export default function NotVerified() {
  return (
    <Box as="section" id="not-verified" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h2" sx={styles.heroTitle}>
              තහවුරු නොකළ ගිණුමකි
            </Heading>
            <Text as="p" sx={styles.desc}>
              ඔබේ ගිණුම තහවුරු කිරීමේ ක්‍රියාවලියේ පවතී. ඒ සඳහා අප නියෝජිතයන් ඔබව දුරකථන මාර්ගයෙන් සම්බන්ද කිරීමට හැකි බැවින් සැලකිලිමත් වන්න. ඔබේ සුරක්ශාව සඳහා තහවුරු කිරීමේ ක්‍රියාවලිය අප ස්වයංක්‍රීයව නොකරන බැවින් මද කාලයක් ගතවිය හැකිය. තහවුරු කිරීමේ ක්‍රියාවලිය හැකි ඉක්මනින් නිම කිරීමට අප කටයුතු කරමු. ඔබගේ ඉවසීමේ ගුණයට අපගේ ස්තුතිය පුද කර සිටිමු.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    //background: `url(${siteImages.bannerBg.src}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.8),
    boxShadow: '0px 10px 16px rgba(52, 61, 72, 0.12)',
    maxWidth: 600,
    padding: '30px 50px',
    borderRadius: 20,
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: [28, 32, 36],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: 1.2,
    marginBottom: '20px',
  },
  desc: {
    fontSize: [16, 18, 20],
    lineHeight: 1.5,
  },
};
