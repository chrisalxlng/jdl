import { Container, Title } from '@mantine/core';
import React from 'react';

const SectionLayout = ({ title, children }) => (
  <Container my={80} padding={0}>
    <Title order={2} mb={40}>
      {title}
    </Title>
    {children}
  </Container>
);

export default SectionLayout;
