import React, { useEffect, useState } from 'react';
import { Group, Loader, MantineProvider } from '@mantine/core';

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'light',
      }}
    >
      {loading ? (
        <Group
          grow
          align="center"
          direction="column"
          color="green"
          sx={{ width: '100vw', height: '100vh' }}
        >
          <Loader color="#44827e" />
        </Group>
      ) : (
        <Component {...pageProps} />
      )}
    </MantineProvider>
  );
}
