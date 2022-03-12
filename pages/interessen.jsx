import React from 'react';
import PageLayout from '../components/layouts/PageLayout';
import { getPath } from '../components/routing/routes';

const interessen = () => {
  const [path] = getPath().splice(-1);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>Interessen</PageLayout>
  );
};

export default interessen;
