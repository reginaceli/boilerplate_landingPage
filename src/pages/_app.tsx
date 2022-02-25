import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Boilerplate Landing page</title>
        <link rel="shortcut icon" href="img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <meta
          name="description"
          content="Boilerplate para landingpage com Typescript, React, Nextjs e Styled Components"
        />
      </Head>
      <Component {...pageProps} />;
      <GlobalStyle />
    </>
  );
}

export default App;
