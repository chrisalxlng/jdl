import React from 'react';
import { Blockquote, Group } from '@mantine/core';
import LogoTitleSubtitleCard from '../../components/cards/LogoTitleSubtitleCard';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import PageLayout from '../../components/layouts/PageLayout';
import SectionLayout from '../../components/layouts/SectionLayout';

const beruflicheErfahrungen = () => (
  <PageLayout>
    <ArticleLayout title="Berufliche Erfahrungen" lastUpdated="09.03.2022">
      <SectionLayout title={'Erfahrungs-Mix: "Beste Referenzen"'}>
        <Group>
          <LogoTitleSubtitleCard
            logo="/img/logo-braun.png"
            title="Berufsausbildung zum Industriekaufmann"
            subtitle="Braun AG Kronberg/Ts. und Frankfurt/Main"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-braun.png"
            title={'Projekt-Manager Beschaffungs-Marketing "Local Sourcing"'}
            subtitle="Braun Ireland Ltd., Carlow, Rep. Ireland"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-commodore.png"
            title="Direktionsassistent Vertrieb Systeme"
            subtitle="Commodore Büromaschinen GmbH, Frankfurt/Main"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-mastercard.png"
            title="Produktmanager Eurocard MasterCard (Einstieg als Assistant Marketing Manager)"
            subtitle="GZS Gesellschaft für Zahlungssysteme mbH, Frankfurt/Main"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-eplus.png"
            title="Produkt Manager/Referent Firmenkunden-Marketing"
            subtitle="E-Plus Mobilfunk GmbH, Potsdam"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-arcor.png"
            title="Manager Segmentmarketing Mittelstand (Strategisches Marketing)"
            subtitle="Mannesmann Arcor AG & Co., Eschborn"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-time.png"
            title="Director (Vice President) Group Marketing & PR"
            subtitle="T.I.M.E. Communication Services AG, Bad Homburg/Barcelona/Madrid"
          />
        </Group>
      </SectionLayout>
      <SectionLayout>
        <Blockquote cite="– Immanuel Kant">
          Alles Wissen stammt aus Erfahrung.
        </Blockquote>
        <Blockquote cite="– Jesus Sirach 34, 10-11">
          Wer nichts erfahren hat, weiß wenig, der Vielgereiste nimmt zu an
          Klugheit.
        </Blockquote>
      </SectionLayout>
      <SectionLayout title="Studentenjobs während des Studiums (Auswahl)">
        <Group>
          <LogoTitleSubtitleCard
            logo="/img/logo-burke.png"
            title="Interviewer"
            subtitle="Burke International Marktforschungsgesellschaft mbH"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-compagnon.png"
            title="Freier wissenschaftlicher Mitarbeiter"
            subtitle="Compagnon Marktforschung"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-dhl.png"
            title="Kurierfahrer und Account Clerk"
            subtitle="DHL Worldwide Express"
          />
        </Group>
      </SectionLayout>
    </ArticleLayout>
  </PageLayout>
);

export default beruflicheErfahrungen;
