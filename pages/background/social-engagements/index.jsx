import { Text, Timeline } from '@mantine/core';
import React from 'react';
import ArticleLayout from '../../../components/layouts/ArticleLayout';
import PageLayout from '../../../components/layouts/PageLayout';
import SectionLayout from '../../../components/layouts/SectionLayout';
import Paragraph from '../../../components/utils/Paragraph';
import TextLink from '../../../components/utils/TextLink';

const socialEngagements = () => (
  <PageLayout>
    <ArticleLayout title="Social Engagements">
      <SectionLayout type="paragraph">
        <Paragraph>
          Konkretes soziales Engagement für die demokratische Gesellschaft ist
          für J.D. Lang „nicht nur ein (temporäres) Lippen-Bekenntnis“, sondern
          eine „Lebens-Einstellung“ und zieht sich konsequent wie „ein roter
          Faden“ durch sein Leben.
        </Paragraph>
      </SectionLayout>
      <SectionLayout title="Beispiele">
        <Timeline>
          <Timeline.Item title="1982">
            <Text size="sm">
              Vorsitzender der Junge Union Oberursel (Taunus)
            </Text>
          </Timeline.Item>
          <Timeline.Item title="1983/84">
            <Text size="sm">
              1983/84 bei der Bundeswehr als Stabsdienstsoldat beim 4.
              Panzergrenadier-Bataillon 53 in Fritzlar vertrat JDL als
              „Vertrauensmann der Mannschaft“ die Interessen seiner Kameraden
              auf Bataillons-Ebene.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="1984/85">
            <Text size="sm">
              Ab Winter-Semester 1984/5 Engagement beim RCDS Ring Christlich
              demokratischer Studenten der Universität Frankfurt/Main.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Seit 1985">
            <Text size="sm">
              Mitglied bei MTP: Mitarbeit in diversen Funktionen bei der
              Studenten-Initiative MTP Marketing zwischen Theorie und Praxis
              e.V. Geschäftsstelle Universität Frankfurt/Main
            </Text>
          </Timeline.Item>
          <Timeline.Item title="1992-1994">
            <Text size="sm">1. Vorsitzender der MTP Alumni</Text>
          </Timeline.Item>
          <Timeline.Item title="Herbst 1989 - April 1990">
            <Text size="sm">
              Initiator und Mitglied der geschäftsführenden Projektleitung des
              1. Marketing- Symposium Frankfurt/M.-Leipzig. Von Studenten für
              Studenten.{' '}
              <TextLink href="/background/social-engagements/marketing-symposium">
                Mehr erfahren
              </TextLink>
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Heute">
            <Text size="sm">
              Seit 2001 – „aus innigster Überzeugung, weil sinnstiftend“ –
              Mitglied beim Marburger Kreis e.V., ein überkonfessionelles
              Netzwerk von Christen. als „einfacher Mitarbeiter ohne offizielles
              Amt“ tätig (Engagement als „(Lebens)-SINN Fluencer“), „weil
              „praktizierender Christ die Basis für ein sinnstiftendes Leben
              ist“.{' '}
              <TextLink href="https://marburger-kreis.de" openNewTab>
                Mehr erfahren
              </TextLink>
            </Text>
          </Timeline.Item>
        </Timeline>
      </SectionLayout>
    </ArticleLayout>
  </PageLayout>
);

export default socialEngagements;
