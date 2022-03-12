/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import Link from 'next/link';
import { Text } from '@mantine/core';

const TextLink = ({ href, openNewTab = false, arrow = false, children }) => (
  <>
    {openNewTab ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: 'none' }}
      >
        <Text
          variant="link"
          inherit
          sx={{ display: 'inline', cursor: 'pointer' }}
        >
          {arrow ? <>&rarr; {children}</> : children}
        </Text>
      </a>
    ) : (
      <Link href={href} passHref>
        <Text
          variant="link"
          inherit
          sx={{ display: 'inline', cursor: 'pointer' }}
        >
          {arrow ? <>&rarr; {children}</> : children}
        </Text>
      </Link>
    )}
  </>
);

export default TextLink;
