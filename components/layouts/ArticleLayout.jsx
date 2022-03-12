import { Container, Title } from '@mantine/core';
import React from 'react';
import Breadcrumb from '../utils/Breadcrumb';

const ArticleLayout = ({ title, children }) => (
  <Container sx={{ padding: '16px' }}>
    <Container padding={0} mt={20} mb={60}>
      <Breadcrumb />
      <Title order={1}>{title}</Title>
    </Container>
    {children}
  </Container>
);

export default ArticleLayout;
