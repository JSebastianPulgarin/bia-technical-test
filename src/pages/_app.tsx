import '../styles/global.scss';

import { ThemeProvider } from 'next-themes';
import { nunito } from '@/fonts/fonts';

export default ({ Component, pageProps }) => 
  <ThemeProvider>
    <div className={nunito.className}>
      <Component {...pageProps} />
    </div>
  </ThemeProvider>;
