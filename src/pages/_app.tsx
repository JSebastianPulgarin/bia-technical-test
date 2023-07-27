import '../styles/global.scss';

import { ThemeProvider } from 'next-themes';

export default ({ Component, pageProps }) => 
  <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>;
