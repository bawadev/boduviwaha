import { useState } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { jsx, Grid, Box, Container, Flex, Button } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import PriceCard from '../components/cards/price-card';
import { rgba } from 'polished';
import { keyframes } from '@emotion/react';
import siteImages from '../resource/images';

const monthlyPricing = [
  {
    id: 1,
    icon: siteImages.userIcon.src,
    title: 'නොමිලයේ',
    amount: 0.00,
    isRecommended: false,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'සීමා නොමැති පරිශීලක සෙවීම නොමිලයේ.',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'අනෙකුත් පරිශීලකයන් වෙත ඇරයුම් යොමු කිරීම නොමිලයේ.',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'පිළිගත් යෝජනා වල පරිශීලකයන් පිලිබඳ තොරතුරු ලබාගැනීම නොමිලයේ.',
      },
      {
        id: 4,
        isAvailable: true,
        title: 'පරිශීලකයන් අවහිර කිරීම හා පැමිණිලි කිරීම නොමිලයේ.',
      },
    ],
  },
  {
    id: 2,
    icon: siteImages.userIcon2.src,
    title: 'රිදී පැකේජය',
    amount: 100.00,
    isRecommended: true,
    features: [
      {
        id: 1,
        isAvailable: true,
        title: 'නොමිලයේ ලබා දෙන සියලු සේවාවන් ලැබේ.',
      },
      {
        id: 2,
        isAvailable: true,
        title: 'අමතර ඇරයුමක් යැවීම රුපියල් සියයක් (+ tax ) මගින් සිදු කල හැකිය.',
      },
      {
        id: 3,
        isAvailable: true,
        title: 'තෝරාගත් මාසික සේවාවන් සඳහා ඉල්ලුම් කල හැකි වීම.',
      },
      {
        id: 4,
        isAvailable: true,
        title: 'යවන ඇරයුම් ප්‍රමාණය මත ලැබෙන බෝනස් ඇරයුම් සඳහා සුදුසු වීම.',
      },
    ],
  },
];

const annualPricing = [
  {
    id: 1,
    icon: siteImages.userIcon.src,
    title: 'Starter Pack',
    amount: 49.99 * 12 - 10,
    isRecommended: false,
    features: [
      // features array
    ],
  },
  {
    id: 2,
    icon: siteImages.userIcon2.src,
    title: 'Family Pack',
    amount: 89.99 * 12 - 10,
    isRecommended: true,
    features: [
      // features array
    ],
  },
];

const Pricing = () => {
  const [plan, setPlan] = useState({
    active: 'monthly',
    data: monthlyPricing,
  });

  const handlePlan = (plan) => {
    if (plan === 'monthly') {
      setPlan({
        ...plan,
        active: 'monthly',
        data: monthlyPricing,
      });
    }
    if (plan === 'yearly') {
      setPlan({
        ...plan,
        active: 'yearly',
        data: annualPricing,
      });
    }
  };

  return (
    <Box id="pricing" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="අපගේ සේවාවන්"
          title="බොදු විවාහ සේවාව නොමිලයේ ලබා දෙන සේවාවකි."
        />
        <Flex sx={styles.priceSwitcher}>
          <Button
            variant="text"
            className={plan?.active === 'monthly' ? 'active' : ''}
            onClick={() => handlePlan('monthly')}
          >
            ඇරයුම් මත පදනම
          </Button>
          <Button
            variant="text"
            className={plan?.active === 'yearly' ? 'active' : ''}
            onClick={() => handlePlan('yearly')}
          >
            මාසික පදනම
          </Button>
        </Flex>
        <Grid sx={styles.grid}>
          {plan?.data?.map((price, index) => (
            <PriceCard price={price} key={`${plan.active}-${index}`} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  section: {
    backgroundColor: '#F9FAFB',
    pt: [60],
    pb: [100, 100, 100, 80],
  },
  heading: {
    color: '#0F0F0F',
    mb: 20,
    p: {
      color: '#f5c000',
    },
  },
  priceSwitcher: {
    borderRadius: '5px',
    border: `1px solid ${rgba('#0F0F0F', 0.2)}`,
    margin: ['0 auto 30px', '0 auto 30px', '0 auto 30px', '0 auto 60px'],
    maxWidth: [255, 255, 255, 300],
    p: 2,
    button: {
      minHeight: ['40px', '40px', '40px', '48px'],
      px: ['18px', '18px', '18px', '25px'],
      fontSize: [14, 14, 14, 16],
      fontWeight: 500,
      color: '#0F0F0F',
      '&.active': {
        backgroundColor: '#0F0F0F',
        color: '#FFFFFF',
      },
      ':focus': {
        outline: '0 none',
      },
    },
  },
  grid: {
    gap: ['60px 30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 340px)',
      'repeat(2, 430px)',
      'repeat(2, 440px)',
      'repeat(2, 480px)',
    ],
    justifyContent: 'center',
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
