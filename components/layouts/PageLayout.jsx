import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
  createStyles,
  MantineProvider,
  AppShell,
  Header,
  Navbar,
  Burger,
  MediaQuery,
  Text,
} from '@mantine/core';
import Navigation from '../routing/Navigation';
import FooterLayout from './FooterLayout';
import { getRoutes } from '../routing/routes';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}));

const Logo = () => (
  <Link href="/">
    <div style={{ height: 'min-content', display: 'flex', cursor: 'pointer' }}>
      <Text sx={{ fontStyle: 'italic' }} size="xl" color="#518985" weight={900}>
        jdl
      </Text>
      <Text sx={{ fontStyle: 'italic' }} size="xl">
        ang.de
      </Text>
    </div>
  </Link>
);

export default function PageLayout({ title, children }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colors: {
            'dark-teal': [
              '#ddedec',
              '#ddedec',
              '#8db0ad',
              '#8db0ad',
              '#85aba8',
              '#669693',
              '#518985',
              '#518985',
              '#44827e',
              '#44827e',
            ],
          },
          primaryColor: 'dark-teal',
        }}
      >
        <AppShell
          fixed
          navbarOffsetBreakpoint="sm"
          header={
            <Header height={60}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: '100%',
                  padding: '0 20px',
                }}
              >
                {Logo()}
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                  />
                </MediaQuery>
                <div className={classes.links}>
                  <Navigation type="navbar" items={getRoutes()} />
                </div>
              </div>
            </Header>
          }
          navbar={
            <Navbar
              className={classes.navbar}
              width={{ base: '100%', sm: 0 }}
              hidden={!opened}
            >
              <Navigation type="header" items={getRoutes()} />
            </Navbar>
          }
          sx={() => ({
            main: {
              padding: '60px 0 0 0',
            },
          })}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <div style={{ flexGrow: 1, backgroundColor: '#F8F9FA' }}>
              {children}
            </div>
            <FooterLayout style={{ backgroundColor: '#F8F9FA' }} />
          </div>
        </AppShell>
      </MantineProvider>
    </>
  );
}
