import React from 'react';
import Link from 'next/link';
import { Button, Container, Grid, Group, Text, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageLayout from '../components/layouts/PageLayout';
import TextLink from '../components/utils/TextLink';
import Paragraph from '../components/utils/Paragraph';
import SectionLayout from '../components/layouts/SectionLayout';
import { getPath } from '../components/routing/routes';
import BasicImageCarousel from '../components/utils/BasicImageCarousel';

const home = () => {
  const largerThanBreakpoint = useMediaQuery('(min-width: 850px)');
  const [path] = getPath().splice(-1);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>
      <Grid columns={10} gutter={0}>
        <Grid.Col
          span={largerThanBreakpoint ? 6 : 10}
          sx={(theme) => ({
            backgroundColor: theme.colors['dark-teal'],
          })}
        >
          <Container
            padding={largerThanBreakpoint ? 80 : 'xl'}
            size={600}
            sx={
              largerThanBreakpoint
                ? { height: '100%' }
                : { padding: 'auto 24px' }
            }
          >
            <Group
              grow
              align="center"
              sx={{ height: '100%', paddingTop: '50px', paddingBottom: '50px' }}
            >
              <Group
                direction="column"
                align={largerThanBreakpoint ? 'start' : 'center'}
                spacing={50}
              >
                <Group
                  direction="column"
                  align={largerThanBreakpoint ? 'start' : 'center'}
                  spacing={0}
                >
                  <Text
                    color="white"
                    size="xl"
                    weight="bold"
                    sx={{ fontStyle: 'italic' }}
                  >
                    Dipl.-Kfm.
                  </Text>
                  <Title order={1}>
                    <Text
                      color="white"
                      inherit
                      sx={{ fontStyle: 'italic' }}
                      align="center"
                    >
                      Joachim Dieter Lang
                    </Text>
                  </Title>
                  <Text
                    color="white"
                    size="xl"
                    weight="normal"
                    sx={{ fontStyle: 'italic' }}
                  >
                    Marketing-Professional
                  </Text>
                </Group>
                <Link href="/background/ausbildung">
                  <Button
                    variant="white"
                    sx={largerThanBreakpoint ? null : { display: 'none' }}
                  >
                    Mehr erfahren
                  </Button>
                </Link>
              </Group>
            </Group>
          </Container>
        </Grid.Col>
        <Grid.Col
          span={largerThanBreakpoint ? 4 : 10}
          sx={(theme) => ({
            backgroundColor: theme.colors['dark-teal'][7],
            paddingTop: '50px',
          })}
        >
          <Container
            padding={0}
            size={400}
            sx={largerThanBreakpoint ? { height: '100%' } : { height: '200px' }}
          >
            <BasicImageCarousel
              images={[
                '/img/jdl_hemd-ohne-krawatte.png',
                '/img/jdl_lederjacke-dunkel.png',
                '/img/jdl_lederjacke.png',
                '/img/jdl_main.png',
              ]}
              height={largerThanBreakpoint ? 250 : 200}
            />
          </Container>
        </Grid.Col>
      </Grid>
      <Container>
        <SectionLayout type="paragraph" title="Kurzprofil">
          <Paragraph>
            Nach seiner Berufsausbildung zum Industriekaufmann mit
            anschlie??ender halbj??hriger Auslandst??tigkeit, studierte J. D. Lang
            Betriebswirtschaft und Soziologie an der Goethe-Universit??t
            Frankfurt/Main.
          </Paragraph>
          <Paragraph>
            In seinen beruflichen Stationen, ??berwiegend bei multinational
            erfolgreichen{' '}
            <TextLink href="/background/berufliche-erfahrungen">
              Top-Unternehmen
            </TextLink>{' '}
            in verschiedenen Management-Positionen im operativen und
            strategischen Marketing (B2C und B2B), entwickelte er sich
            zielgerichtet zu einem vielseitigen Marketing-Manager (zuletzt auch
            in beratender Funktion als Management-Consultant) mit fundiertem,
            auch internationalen,{' '}
            <TextLink href="/background/ausbildung">Background</TextLink> in
            Theorie & Praxis.
          </Paragraph>
          <Paragraph>
            Heute erholt sich Lang von den Folgen zweier schwerer Schlaganf??lle
            als Privatier in der Anonymit??t der Gro??stadt seiner Wahl-Heimat
            Berlin.
          </Paragraph>
        </SectionLayout>
      </Container>
    </PageLayout>
  );
};

export default home;
