import React from 'react';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>jdlang.de</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
