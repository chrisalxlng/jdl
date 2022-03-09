import { Container, Divider, Text } from '@mantine/core';
import React from 'react';

const FooterLayout = ({ component, ...rest }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div {...rest}>
      <Container mt={40} mb={20} padding={20} sx={{ maxWidth: '100%' }}>
        <Divider mb={20} />
        <Container padding="xl" sx={{ maxWidth: '100%' }}>
          <Text size="xs">&copy; {currentYear} Christopher Lang</Text>
        </Container>
      </Container>
    </div>
  );
};

export default FooterLayout;
