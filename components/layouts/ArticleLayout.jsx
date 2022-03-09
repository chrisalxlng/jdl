import { Container, Text, Title } from '@mantine/core';
import React from 'react';

const ArticleLayout = ({ title, lastUpdated = null, children }) => (
  <Container sx={{ padding: '16px' }}>
    <Container padding={0} mt={20} mb={60}>
      <Title order={1}>{title}</Title>
      {lastUpdated ? (
        <Text color="dimmed" size="sm" mt={5}>
          Zuletzt aktualisiert: {lastUpdated}
        </Text>
      ) : null}
    </Container>
    {children}
  </Container>
);

export default ArticleLayout;
