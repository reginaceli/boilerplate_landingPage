import Head from 'next/head';

import Main from 'components/Main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boilerplate Landing page</title>
        <meta
          name="description"
          content="Boilerplate para landingpage com Typescript, React, Nextjs e Styled Components"
        />
        <link rel="icon" href="img/icon-512.png" />
      </Head>

      <Main />
    </div>
  );
}
