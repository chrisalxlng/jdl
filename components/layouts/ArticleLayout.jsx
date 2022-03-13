import React from 'react';
import { Container, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Breadcrumb from '../utils/Breadcrumb';

const ArticleLayout = ({ title, children }) => {
  const largerThanBreakpoint = useMediaQuery('(min-width: 850px)');

  return (
    <Container sx={{ padding: '16px' }}>
      <Container padding={0} mt={20} mb={largerThanBreakpoint ? 60 : 20}>
        <Breadcrumb />
        <Title order={1} mt={10}>
          {title}
        </Title>
      </Container>
      {children}
    </Container>
  );
};

export default ArticleLayout;
