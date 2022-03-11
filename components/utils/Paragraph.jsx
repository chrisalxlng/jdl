import React from 'react';
import { Text, Title } from '@mantine/core';

const Paragraph = ({ title = null, children }) => (
  <>
    {title ? (
      <Title order={2} mb={20}>
        {title}
      </Title>
    ) : null}
    <Text my={25}>{children}</Text>
  </>
);

export default Paragraph;
