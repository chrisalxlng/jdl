import React from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';

const TextLink = ({ href, children }) => (
  <Link href={href} passHref>
    <Text variant="link" sx={{ display: 'inline', cursor: 'pointer' }}>
      {children}
    </Text>
  </Link>
);

export default TextLink;
