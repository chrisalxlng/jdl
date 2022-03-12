import {
  Box,
  Button,
  Card,
  Container,
  Group,
  Text,
  Textarea,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { EnvelopeClosedIcon, SewingPinFilledIcon } from '@radix-ui/react-icons';
import React from 'react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import PageLayout from '../components/layouts/PageLayout';
import Image from '../components/utils/Image';

const kontakt = () => (
  <PageLayout>
    <ArticleLayout title="Kontakt">
      <Group grow spacing={100} align="flex-start">
        <Box sx={{ width: '100%', height: '400px' }}>
          <Container
            sx={{ position: 'relative', width: '100%', height: '100%' }}
          >
            <Image src="/svg/envelope.svg" />
          </Container>
        </Box>
        <Box>
          <Card shadow="sm" padding="lg" sx={{ maxWidth: '350px' }}>
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
                  placeholder="Ihre E-Mail"
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

export default kontakt;
