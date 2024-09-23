// pages/_app.js
import { useEffect } from 'react';
import Router from 'next/router';
import { ThemeUIProvider } from 'theme-ui';
import theme from '../theme';
import Layout from '../components/layout';
import 'swiper/css';
import '../../public/assets/css/slick.min.css';
import { initGA, logPageView } from '../analytics';
import 'typeface-dm-sans';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../store/store';

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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PersistGate>
      </Provider>
    </ThemeUIProvider>
  );
}
