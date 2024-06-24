
import { jsx, Box, Container, Button } from 'theme-ui';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import SectionHeading from '../components/section-heading';
import BlogPost from '../components/cards/blog-card';


import siteImages from '../resource/images';

const data = [
  {
    id: 1,
    thumb: siteImages.thumb[0].src,
    commentCount: 22,
    link: '#!',
    title: `How to work with prototype design with adobe xd featuring tools`,
  },
  {
    id: 2,
    thumb: siteImages.thumb[1].src,
    commentCount: 15,
    link: '#!',
    title: `Create multiple artboard by using figma prototyping development`,
  },
  {
    id: 3,
    thumb: siteImages.thumb[2].src,
    commentCount: 18,
    link: '#!',
    title: `Convert your web layout theming easily with sketch zeplin extension`,
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === 'prev' ? (
        <BsArrowLeft size="32px" />
      ) : (
        <BsArrowRight size="32px" />
      )}
    </Button>
  );
}

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  responsive: [
    {
      breakpoint: 100000,
      settings: 'unslick',
    },
    {
      breakpoint: 768,
      settings: {
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: 'unslick',
    },
  ],
};

const Blog = () => {
  return (
    <Box id="blog" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Blog Post"
          title="Popular blog post we update everyday"
        />
        <Slider sx={styles.blogWrapper} {...settings}>
          {data?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Blog;

const styles = {
  section: {
    pt: [30, 30, 6],
    pb: [50, 50, 50, 100, 8, 9],
  },
  heading: {
    mb: [30, 30, 30, 50, 60],
  },
  blogWrapper: {
    gap: 30,
    display: ['grid', 'grid', 'grid', 'block', 'grid'],
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      'repeat(1, 1fr)',
      'repeat(2, 1fr)',
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    m: [0, 0, 0, '0 -15px', 0],
  },
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: '-60px',
    ':focus': {
      outline: '0 none',
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s',
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)',
      },
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)',
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)',
    },
  },
};
