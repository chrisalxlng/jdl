import { Breadcrumbs, Text } from '@mantine/core';
import React from 'react';
import { getPath } from '../routing/routes';
import TextLink from './TextLink';

const Breadcrumb = () => {
  const path = getPath();

  const breadcrumbItems = path.map((item) =>
    item.hasOwnPage ? (
      <Text size="sm" sx={{ lineHeight: 'inherit' }}>
        <TextLink href={item.path} key={item.path}>
          {item.label}
        </TextLink>
      </Text>
    ) : (
      <Text size="sm" sx={{ lineHeight: 'inherit' }} key={item.label}>
        {item.label}
      </Text>
    )
  );

  return <Breadcrumbs sx={{ flexWrap: 'wrap' }}>{breadcrumbItems}</Breadcrumbs>;
};

export default Breadcrumb;
