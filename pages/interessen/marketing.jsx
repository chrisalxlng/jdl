import { Text, Timeline } from '@mantine/core';
import React from 'react';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import PageLayout from '../../components/layouts/PageLayout';
import SectionLayout from '../../components/layouts/SectionLayout';
import { getPath } from '../../components/routing/routes';
import Paragraph from '../../components/utils/Paragraph';
import TextLink from '../../components/utils/TextLink';

const marketing = () => {
  const [path] = getPath().splice(-1);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>
      <ArticleLayout title="Marketing">
        <SectionLayout type="paragraph">
          <Paragraph>
            Seine Leidenschaft für das Marketing entwickelte JDL während seiner
            Berufsausbildung zum Industriekaufmann bei der Braun AG (überwiegend
            in der Hauptverwaltung In- und Ausland und Werk Kronberg/Ts. und dem
            ehemaligen Braun-HiFi-Werk Frankfurt/Main).
          </Paragraph>
          <Paragraph>
            Besonders die ersten praktischen Erfahrungen auf diesem Gebiet im
            Rahmen des Ausbildungs- Komplexes „Absatzwirtschaft (Marketing &amp;
            Sales)“, den er überwiegend im damaligen Braun-HiFi-Werk
            Frankfurt/Main absolvierte, (Verkaufsförderung, Marktforschung) und
            „Marketing-Kommunikation“, International Sales (Export-Management)
            in der Hauptverwaltung Kronberg prägten sein berufliches Interesse
            für den Bereich Marketing.
          </Paragraph>
          <Paragraph>
            Hier fasste er den Entschluss, nach Abschluss seiner
            Berufsausbildung seine generierten ersten Kenntnisse durch ein
            wirtschaftswissenschaftliches Studium mit den Schwerpunkten
            Marketing und Handelsbetriebslehre an der Goethe-Universität
            Frankfurt/Main zu vertiefen und sich final für die Verleihung des
            akademischen Grad Diplom-Kaufmann zu qualifizieren.
          </Paragraph>
        </SectionLayout>
        <SectionLayout title="Konkrete Engagements">
          <Timeline>
            <Timeline.Item title="Seit 1985">
              <Text size="sm">
                <TextLink href="https://www.mtp.org" openNewTab>
                  MTP Marketing zwischen Theorie &amp; Praxis e.V.
                </TextLink>
                : Bereits während seines ersten Semesters schloss sich JDL „aus
                innerer Überzeugung“ der studentischen Marketing-Initiative „MTP
                Marketing zwischen Theorie &amp; Praxis e.V.“ an der Goethe-
                Universität Frankfurt/Main an. JDL war es „ein Anliegen, von
                Anfang an die wissenschaftliche Theorie mit der Praxis zu
                verbinden“. Nach Abschluss seines Studiums wurde JDL Mitglied
                der Ehemaligen-Organisation MTP-Alumni e.V., die er von
                1992-1994 als deren{' '}
                <TextLink href="/files/file-mtp_alumni.pdf" openNewTab>
                  1. Vorsitzender
                </TextLink>{' '}
                führte.
              </Text>
            </Timeline.Item>
            <Timeline.Item title="Anno 1989/1990">
              <Text size="sm">
                <TextLink href="/files/file-programmheft.pdf" openNewTab>
                  1. Marketing-Symposium Frankfurt-Leipzig (von Studenten für
                  Studenten).
                </TextLink>{' '}
                Ein außergewöhnliches Projekt, das Deutsch-deutsche
                Marketing-Geschichte schrieb…{' '}
                <TextLink
                  href="/background/social-engagements/marketing-symposium"
                  arrow
                >
                  Mehr erfahren
                </TextLink>
              </Text>
            </Timeline.Item>
          </Timeline>
        </SectionLayout>
      </ArticleLayout>
    </PageLayout>
  );
};

export default marketing;
