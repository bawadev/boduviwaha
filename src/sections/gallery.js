import { jsx, Box, Container, Image, Button } from 'theme-ui';
import { RiArrowRightSLine } from 'react-icons/ri';
import SectionHeading from '../components/section-heading';
import siteImages from '../resource/images'; // Assuming siteImages is correctly imported from your resource folder

const data = [
  {
    id: 1,
    image: siteImages.gallery1.src, // Using siteImages for gallery image 1
    title: 'Front working space',
  },
  {
    id: 2,
    image: siteImages.gallery2.src, // Using siteImages for gallery image 2
    title: 'Meeting corner',
  },
  {
    id: 3,
    image: siteImages.gallery3.src, // Using siteImages for gallery image 3
    title: 'Guest meeting room',
  },
  {
    id: 4,
    image: siteImages.gallery4.src, // Using siteImages for gallery image 4
    title: 'Guest rest room',
  },
  {
    id: 6,
    image: siteImages.gallery6.src, // Using siteImages for gallery image 6
    title: 'Kitchen room',
  },
  {
    id: 5,
    image: siteImages.gallery5.src, // Using siteImages for gallery image 5
    title: 'Single working space',
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Gallery = () => {
  return (
    <Box id="gallery" as="section" sx={styles.section}>
      <Container sx={styles.container}>
        <SectionHeading
          sx={styles.heading}
          slogan="Working space"
          title="Let’s meet our interior room decoration"
        />
        <Box sx={styles.galleryWrapper}>
          {/* Render gallery images */}
          {data.map((item) => (
            <Box key={item.id} sx={styles.imageWrapper}>
              <Image loading="lazy" src={item.image} alt={item.title} />
            </Box>
          ))}
        </Box>
        <Button variant="muted" sx={styles.button}>
          Explore More <RiArrowRightSLine size="20px" />
        </Button>
      </Container>
    </Box>
  );
};

export default Gallery;

const styles = {
  section: {
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  galleryWrapper: {
    mx: '-15px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    width: ['calc(50% - 15px)', 'calc(50% - 15px)', 'calc(33.3333% - 15px)', 'calc(20% - 15px)'],
    mb: ['30px', '30px', '30px', '30px', '30px', '0'],
    '& img': {
      width: '100%',
      borderRadius: '8px',
      boxShadow: '0px 4px 25px rgba(38, 78, 118, 0.1)',
      transition: 'transform 0.4s ease-in-out 0s',
    },
    '&:hover img': {
      transform: 'scale(1.05)',
    },
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    mt: ['30px', '30px', '30px', '40px'],
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
};
