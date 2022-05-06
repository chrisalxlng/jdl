import { Group } from '@mantine/core';
import React from 'react';
import ArticleLayout from '../components/layouts/ArticleLayout';
import PageLayout from '../components/layouts/PageLayout';
import SectionLayout from '../components/layouts/SectionLayout';
import { getPath } from '../components/routing/routes';
import Image from '../components/utils/Image';
import Paragraph from '../components/utils/Paragraph';

const schoepferischeKreativitaet = () => {
  const [path] = getPath().splice(-1);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>
      <ArticleLayout title="Schöpferische Kreativität">
        <SectionLayout type="paragraph">
          <Paragraph>
            In den Anfangsjahren des MTP gehörte zum damaligen Corporate Design
            (mehr oder inoffiziell) das „MTP-Männchen mit Doktorhut“ dazu.
            Dieses wurde oft in den Plakaten und auch in sonstigen Drucksachen
            integriert und erfreute sich damals bis Anfang/Mitte der 1990er
            Jahre großer Beliebtheit. Auf diesen Fotos aus Mitte der 1980er
            Jahre ist diese von JDL geschaffene MTP-Werbefigur als
            „MTP-Schneemännchen“ und Mitglieder der MTP Geschäftsstelle der
            Johan-Wolfgang Goethe-Universität Frankfurt am Main zu sehen.
          </Paragraph>
          <Group position="center" spacing={40} mt={50}>
            <Image
              src="/img/img-mtp-1.jpg"
              width={350}
              height={240}
              caption="MTP-Schneemännchen"
            />
            <Image
              src="/img/img-mtp-2.jpg"
              width={350}
              height={240}
              caption="MTP-Schneemännchen"
            />
            <Image
              src="/files/file-pool.jpg"
              width={350}
              height={240}
              caption={'Mein "Creative Pool"'}
            />
          </Group>
        </SectionLayout>
      </ArticleLayout>
    </PageLayout>
  );
};

export default schoepferischeKreativitaet;
