import React from 'react';
import { Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

const SectionLayout = ({ title, type = 'default', children }) => {
  const largerThanBreakpoint = useMediaQuery('(min-width: 850px)');

  return (
    <Container
      my={largerThanBreakpoint ? 80 : 40}
      padding={0}
      size={type === 'paragraph' ? 560 : null}
    >
      <Title order={2} mb={40}>
        {title}
      </Title>
      {children}
    </Container>
  );
};

export default SectionLayout;
