import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import { getPath } from '../components/routing/routes';

const leben = () => {
  const [path] = getPath().splice(-1);

  return <PageLayout title={`jdlang.de - ${path.label}`}>Leben</PageLayout>;
};

export default leben;
