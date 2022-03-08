import React from 'react';
import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import PageLayout from '../components/layouts/PageLayout';

const home = () => {
  const largerThanBreakpoint = useMediaQuery('(min-width: 850px)');

  return (
    <PageLayout padding={false}>
      <Grid columns={10} gutter={0}>
        <Grid.Col
          span={largerThanBreakpoint ? 6 : 10}
          sx={(theme) => ({ backgroundColor: theme.colors['dark-teal'] })}
        >
          <Container
            padding={largerThanBreakpoint ? 80 : 'xl'}
            size={600}
            sx={
              largerThanBreakpoint
                ? { height: '100%' }
                : { padding: '20px 24px' }
            }
          >
            <Group grow align="center" sx={{ height: '100%' }}>
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
                    <Text color="white" inherit sx={{ fontStyle: 'italic' }}>
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
                <Button
                  variant="white"
                  sx={largerThanBreakpoint ? null : { display: 'none' }}
                >
                  Mehr erfahren
                </Button>
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
          <Container padding={0} size={400}>
            <Image src="/img/jdl_main.png" />
          </Container>
        </Grid.Col>
      </Grid>
      <Container mt={50} padding="xl" size={560}>
        <Title order={2} mb={20}>
          Kurzprofil
        </Title>
        <Text my={25}>
          Nach seiner Berufsausbildung zum Industriekaufmann mit anschließender
          halbjähriger Auslandstätigkeit, studierte J. D. Lang
          Betriebswirtschaft und Soziologie an der Goethe-Universität
          Frankfurt/Main.
        </Text>
        <Text my={25}>
          In seinen beruflichen Stationen, überwiegend bei multinational
          erfolgreichen Top-Unternehmen in verschiedenen Management-Positionen
          im operativen und strategischen Marketing (B2C und B2B), entwickelte
          er sich zielgerichtet zu einem vielseitigen Marketing-Manager (zuletzt
          auch in beratender Funktion als Management-Consultant) mit fundiertem,
          auch internationalen, Background in Theorie & Praxis.
        </Text>
        <Text my={25}>
          Heute erholt sich Lang von den Folgen zweier schwerer Schlaganfälle
          als Privatier in der Anonymität der Großstadt seiner Wahl-Heimat
          Berlin.
        </Text>
      </Container>
    </PageLayout>
  );
};

export default home;
