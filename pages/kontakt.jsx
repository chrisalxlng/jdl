import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import ArticleLayout from '../components/layouts/ArticleLayout';
import PageLayout from '../components/layouts/PageLayout';
import Image from '../components/utils/Image';
import { getPath } from '../components/routing/routes';

const kontakt = () => {
  const largerThanBreakpoint = useMediaQuery('(min-width: 850px)');
  const [path] = getPath().splice(-1);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>
      <ArticleLayout title="Kontakt">
        <Group
          grow
          spacing={100}
          align="flex-start"
          direction={largerThanBreakpoint ? 'row' : 'column-reverse'}
        >
          <Box sx={{ width: '100%', height: '400px' }}>
            <Container
              sx={{ position: 'relative', width: '100%', height: '100%' }}
            >
              <Image src="/svg/envelope.svg" />
            </Container>
          </Box>
          <Box
            sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
          >
            <Card
              shadow="sm"
              padding="lg"
              sx={{ width: '100%', maxWidth: '350px' }}
            >
              <form action="https://formspree.io/mjvakozr" method="post">
                <Group grow direction="column" spacing={30}>
                  <TextInput
                    name="name"
                    placeholder="Ihr Name"
                    label="Name"
                    variant="filled"
                    required
                  />
                  <TextInput
                    name="_replyto"
                    placeholder="Ihre E-Mail Adresse"
                    label="E-Mail Adresse"
                    variant="filled"
                    required
                  />
                  <Textarea
                    name="message"
                    variant="filled"
                    label="Nachricht"
                    placeholder="Ihre Nachricht"
                    autosize
                    minRows={3}
                    maxRows={5}
                    required
                  />
                  <Button type="submit">Senden</Button>
                </Group>
              </form>
            </Card>
          </Box>
        </Group>
      </ArticleLayout>
    </PageLayout>
  );
};

export default kontakt;
