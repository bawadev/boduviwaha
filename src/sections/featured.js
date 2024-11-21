import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { jsx, Box, Container, Heading, Text } from 'theme-ui';
import SectionHeading from '../components/section-heading';
import Progressbar from '../components/progressbar';
import Feature from '../components/cards/feature';
import Image from '../components/image';
import siteImages from '../resource/images'; // Assuming siteImages is correctly imported from your resource folder

import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper/core';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  feature: [
    {
      id: 1,
      icon: siteImages.expand.src, 
      title: 'විශ්වාසය',
      description: 'අපගේ පරිශීලකයන් මනා තහවුරු කිරීමකින් පසුව පමණක් ඇතුලත් කරගන්නා බැවින් බියවීමකින් තොරව පහසුවෙන් යෝජනා සොයාගන්න.',
    },
    {
      id: 2,
      icon: siteImages.users.src, 
      title: 'ගුණාත්මක බව',
      description: 'නොමිලයේ ලබා දෙන මූලික සේවාවට අමතරව තවත් අතිරේක සේවා රැසක් සමග ඔබේ සියලු මංගල අවශ්‍යතා ඉටු කරගන්න. කාලය ඉතිරි කරගන්න.',
    },
    {
      id: 3,
      icon: siteImages.wifi.src, 
      title: 'මනා ගැලපීම',
      description: 'ධාර්මික විවාහ දිවියක් සඳහා පරිශීලකයන් සමබන්ධ කිරීමේ ලංකාවේ ප්‍රථම හා විශිෂ්ටතම ක්‍රම උපාය ඔබේ විවාහ දිවියේ සාර්ථකත්වයට ශක්තිමත්ම ආරම්භය කරගන්න.',
    }
  ],
  gallery: [
    {
      id: 1,
      image: siteImages.slider1.src, // Using siteImages for gallery image 1
      title: 'එකට පින් කිරීම',
      desc: 'එකිනෙකාගේ කුසලය දියුණු කරගැනීමට උපකාර කරන්න',
    },
    {
      id: 2,
      image: siteImages.slider2.src, // Using siteImages for gallery image 2
      title: 'සමානාත්ම තාවය',
      desc: 'තමන් උපමා කර අන් කෙනා ගැන සැලකිලිමත් වන්න',
    },
    {
      id: 3,
      image: siteImages.slider3.src, // Using siteImages for gallery image 3
      title: 'අනොන්‍ය ගරුත්වය',
      desc: 'දෙදෙනාගේම අදහස් වලට ඉහලින් ගරු කරන්න',
    },
    {
      id: 4,
      image: siteImages.slider4.src, // Using siteImages for gallery image 4
      title: 'මාර්ගය පිරිසිදු කිරීම',
      desc: 'මාර්ගය පිරිසිදු කරගැනීමට එකිනෙකාට උපකාර කරන්න',
    }
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef?.current?.swiper?.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="feature" as="section" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="අපේ සුවිශේෂී බව"
              description="ශ්‍රී ලාංකික තරුණ බෞද්ධ පරපුර වෙනුවෙන්ම කැප වුනු මංගල සේවාවක් වන්නෙමු.
               යහපත් මානසික දැක්මක් සහිතව යුග දිවියකට පැමිණ යහපත් සමාජයක් සඳහා දායක වන නව පරපුරක් බිහි කිරීම අපගේ අරමුණයි.
                නිරවුල් හා නිදහස් මනසක් යහපත් සමජයක මෙන්ම සාර්ථක යුග දිවියක ආරම්භය බව අප තරයේ විශ්වාස කරන්නෙමු.
                 එම නිසා ශ්‍රී ලංකාවේ ප්‍රථම වරට දහමට අනුව සහකරු/සහකාරියන් තෝරාගැනීමේ ක්‍රමයක් අප විසින් සංවර්ධනය කර මෙසේ පරිශීලකයන්ට මුදා හරිමු."
            />
            <Box sx={styles.featureWrapper}>
              {data?.feature?.map((feature) => (
                <Feature key={feature.id} data={feature} />
              ))}
            </Box>
          </Box>
          <Box sx={styles.rightContent}>
            <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            />
            <Swiper
              loop={true}
              effect="fade"
              ref={swiperRef}
              spaceBetween={0}
              slidesPerView={1}
              pagination={true}
            >
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as="figure" sx={styles.image}>
                    <Image loading="lazy" src={item.image} alt="" />
                    <Box as="figcaption">
                      <Box>
                        <Heading as="h4">{item.title}</Heading>
                        <Text as="p">{item.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 60],
    pb: [30, null, null, 50, 60],
    background: 'radial-gradient(farthest-corner at center, #f5f5f5 0%, #f5f5f5 30%, #f5c00096 70%, #f5c000 100%)', // Improved gradient style
  },
  contentWrapper: {
    gap: [null, null, null, null, '30px'],
    display: ['flex', null, null, null, 'grid'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, null],
    gridTemplateColumns: ['unset', null, null, null, 'repeat(2,1fr)'],
  },
  leftContent: {
    m: [0, '30px 0px 0', '30px 50px 0', 0],
  },
  heading: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 40px', null, null, null, '0 0 80px'],
    h2: {
      fontSize: [22, null, null, 30, null, 36, 36],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 800],
    },
    p: {
      fontSize: ['15px', null, null, '22px'],
      lineHeight: 1.5,
      mt: [3, null, null, 4],
    },
  },
  featureWrapper: {
    gap: ['40px 20px', null, null, null, '30px'],
    display: 'grid',
    gridTemplateColumns: [
      'repeat(2,1fr)',
      null,
      null,
      'repeat(3,180px)',
      'repeat(3,1fr)',
    ],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
  },
  rightContent: {
    position: 'relative',
    mt: [6, null, null, null, 0],
    maxWidth: '100%',
    '.swiper-pagination-bullets': {
      bottom: 20,
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ':focus': {
        outline: 0,
      },
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
  },
  progressbar: {
    position: 'absolute',
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: 'relative',
    mr: 4,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: '0 none',
    },
  },
  image: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '> img': {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: 'primary',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 30,
      borderRadius: 5,
      color: '#fff',
      padding: ['20px 20px 20px 80px', '25px 25px 25px 90px'],
      h4: {
        lineHeight: 1,
        fontWeight: 'bold',
        fontSize: [14, 18],
        letterSpacing: 'heading',
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: 'heading',
        color: rgba('#fff', 0.6),
        marginTop: [2],
      },
    },
  },
};
