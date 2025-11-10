import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div className="min-h-screen bg-linyr-offWhite font-body text-linyr-charcoal">
    <Component {...pageProps} />
  </div>
);

export default MyApp;
