import { useEffect } from 'react';
import Router from 'next/router';
import { ThemeUIProvider } from 'theme-ui'
import theme from '../theme';
import Layout from '../components/layout';
import 'swiper/css';
import '../../public/assets/css/slick.min.css';
import { initGA, logPageView } from '../analytics';
import 'typeface-dm-sans';

export default function CustomApp({ Component, pageProps }) {
  useEffect(() => {
    initGA();
    logPageView();
    Router.events.on('routeChangeComplete', logPageView);

    // Cleanup the event listener on unmount
    return () => {
      Router.events.off('routeChangeComplete', logPageView);
    };
  }, []);

  return (
    <ThemeUIProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
   </ThemeUIProvider>
  );
}
