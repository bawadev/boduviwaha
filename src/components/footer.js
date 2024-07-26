import { jsx, Box, Flex, Text, Container } from 'theme-ui';
import { NormalLink } from './link';
import Logo from './logo';
import { rgba } from 'polished';

const navItems = [
  {
    id: 1,
    link: '/',
    title: 'Home',
  },
  {
    id: 2,
    link: '#!',
    title: 'Advertise',
  },
  {
    id: 3,
    link: '/privacy',
    title: 'Privacy and Policy',
  },
  {
    id: 4,
    link: '#',
    title: 'Marketing',
  },
  {
    id: 5,
    link: '#!',
    title: 'FAQ',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container sx={styles.container}>
        <Flex sx={styles.content}>
          {/* <Flex sx={styles.nav}>
            {navItems?.map((item) => (
              <li key={item.id}>
                <NormalLink path={item.link}>{item.title}</NormalLink>
              </li>
            ))}
          </Flex> */}
          <Flex sx={styles.copyright}>
            <Logo white />
            <br/>
            <Text as="span" sx={styles.developerDescription}>
              බොදු විවාහ සේවාව , ශ්‍රී ලංකාව - සියලුම හිමිකම් ඇවිරිණි
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  footer: {
    backgroundColor: '#6e6d6d',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  content: {
    alignItems: 'center',
    borderTop: `1px solid ${rgba('#fff', 0.15)}`,
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '60px',
    textAlign: 'center',
    '@media only screen and (max-width: 400px)': {
      pb: 50,
    },
  },
  developerDescription: {
    marginLeft: 10,
  },
  copyright: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    span: {
      fontSize: '14px',
      lineHeight: [1.8, null, null, 1.29],
      color: rgba('#FFFFFF', 0.7),
      marginTop: 1,
      display: 'inline-flex',
    },
  },
  nav: {
    listStyle: 'none',
    alignItems: 'center',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    mt: [5, null, null, null, 0],
    li: {
      '+ li': {
        marginLeft: [4],
      },
      '@media only screen and (max-width: 400px)': {
        mb: 4,
      },
      a: {
        color: 'white',
        display: 'inline-flex',
        textAlign: 'center',
        textDecoration: 'none',
      },
    },
  },
};
