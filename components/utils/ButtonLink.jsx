import { Text, UnstyledButton } from '@mantine/core';
import React from 'react';

const ButtonLink = ({ onClick, children }) => (
  <UnstyledButton onClick={onClick}>
    <Text variant="link" inherit sx={{ display: 'inline', cursor: 'pointer' }}>
      {children}
    </Text>
  </UnstyledButton>
);

export default ButtonLink;
