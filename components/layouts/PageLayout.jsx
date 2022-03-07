import React, { useState } from 'react';
import Link from 'next/link';
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
import Navigation from '../Navigation';

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
      <Text
        style={{ fontStyle: 'italic' }}
        size="xl"
        color="#518985"
        weight={900}
      >
        jdl
      </Text>
      <Text style={{ fontStyle: 'italic' }} size="xl">
        ang.de
      </Text>
    </div>
  </Link>
);

const navLinks = [
  { label: 'Home', path: '/', items: [] },
  {
    label: 'Leben',
    path: '/leben',
    items: [],
  },
  {
    label: 'Interessen',
    path: '/interessen',
    items: [],
  },
  {
    label: 'Background',
    path: '/background',
    items: [
      { label: 'Ausbildung', path: '/ausbildung' },
      { label: 'Berufliche Erfahrungen', path: '/berufliche-erfahrungen' },
      { label: 'Social Engagements', path: '/social-engagements' },
    ],
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
    items: [],
  },
];

export default function PageLayout({ children }) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
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
                <Navigation type="navbar" items={navLinks} />
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
            <Navigation type="header" items={navLinks} />
          </Navbar>
        }
      >
        {children}
      </AppShell>
    </MantineProvider>
  );
}
