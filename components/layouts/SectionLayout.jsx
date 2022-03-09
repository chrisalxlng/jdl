import { Container, Title } from '@mantine/core';
import React from 'react';

const SectionLayout = ({ title, type = 'default', children }) => (
  <Container my={80} padding={0} size={type === 'paragraph' ? 560 : null}>
    <Title order={2} mb={40}>
      {title}
    </Title>
    {children}
  </Container>
);

export default SectionLayout;
