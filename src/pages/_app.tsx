import '../styles/global.css';

import type { AppProps } from 'next/app';
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-body',
  display: 'swap',
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div
    className={`${poppins.variable} ${inter.variable} font-body bg-linyr-offWhite text-linyr-charcoal min-h-screen`}
  >
    <Component {...pageProps} />
  </div>
);

export default MyApp;
