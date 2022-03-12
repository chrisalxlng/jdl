import React from 'react';
import { Group, List, Text, ThemeIcon, Timeline } from '@mantine/core';
import { ExternalLinkIcon, FileTextIcon } from '@radix-ui/react-icons';
import LogoTitleSubtitleCard from '../../components/cards/LogoTitleSubtitleCard';
import ArticleLayout from '../../components/layouts/ArticleLayout';
import PageLayout from '../../components/layouts/PageLayout';
import SectionLayout from '../../components/layouts/SectionLayout';
import TextLink from '../../components/utils/TextLink';

const ausbildung = () => (
  <PageLayout>
    <ArticleLayout title="Ausbildung">
      <SectionLayout title={'"Solides Fundament in Theorie & Praxis!"'}>
        <Group>
          <LogoTitleSubtitleCard
            logo="/img/logo-braun.png"
            title="Ausbildung zum Industriekaufmann"
            subtitle="Braun AG Kronberg/Ts. und Frankfurt/Main"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-schule.png"
            title="Wirtschaftsabitur (Allgemeine Hochschulreife)"
            subtitle="Feldbergschule Oberursel"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-goethe.png"
            title="Studium der Betriebswirtschaft und Soziologie (Schwerpunkt Marketing +
              Handelsbetriebslehre)"
            subtitle="Goethe Universität, Frankfurt/Main"
          />
        </Group>
      </SectionLayout>
      <SectionLayout title="Studentische, universitäre Aktivitäten & Social activities nach dem Studium (Auswahl)">
        <Timeline>
          <Timeline.Item title="Seit 1985">
            <Text size="sm">
              Mitarbeit in diversen Funktionen bei der Studenten-Initiative MTP
              Marketing zwischen Theorie und Praxis e.V. Geschäftsstelle
              Universität Frankfurt/Main
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Herbst 1989 - April 1990">
            <Text size="sm">
              Initiator und Mitglied der geschäftsführenden Projektleitung des{' '}
              <TextLink href="/background/social-engagements">
                1. Marketing-Symposium Frankfurt/M.-Leipzig. Von Studenten für
                Studenten
              </TextLink>
            </Text>
          </Timeline.Item>
          <Timeline.Item title="1992 - 1994">
            <Text size="sm">
              <TextLink href="/files/file-mtp_alumni.pdf" openNewTab>
                1. Vorsitzender der MTP-Alumni
              </TextLink>
            </Text>
          </Timeline.Item>
        </Timeline>
      </SectionLayout>
      <SectionLayout title="Weiterbildung (Auswahl)">
        <Group>
          <LogoTitleSubtitleCard
            logo="/img/logo-ruetli.png"
            title="Grundlagen-Seminar: Zielorientierte Mitarbeiterführung"
            subtitle="Bielefeld, März 1997"
          />
          <LogoTitleSubtitleCard
            logo="/img/logo-csulb.png"
            title="Teilnahme an zwei Marketing-Workshops zwischen der Universität Frankfurt/M. und der California State University"
            subtitle="Long Beach (California USA), 1993 und 1996"
          />
        </Group>
      </SectionLayout>
      <SectionLayout title="Weitere Verweise">
        <List spacing="xs" size="sm">
          <List.Item
            icon={
              <ThemeIcon color="dark-teal" size={24} radius="xl">
                <FileTextIcon size={12} />
              </ThemeIcon>
            }
          >
            <Text weight={500} mb={5}>
              Diplomarbeit
            </Text>
            <TextLink href="/files/file-diplomarbeit.pdf" openNewTab>
              <Text mb={5}>
                &quot;Die Kosten-Nutzen-Analyse als Instrument zur
                wirtschaftspolitischen Beratung; die Möglichkeiten zur
                Präjudizierung politischer Entscheidungen anhand ausgewählter
                Beispiele.&quot;
              </Text>
            </TextLink>
            <Text size="sm" color="dimmed">
              Frankfurt/Main, 1989
            </Text>
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="dark-teal" size={24} radius="xl">
                <ExternalLinkIcon size={12} />
              </ThemeIcon>
            }
          >
            <Text weight={500}>
              MTP – Marketing zwischen Theorie und Praxis e.V.
            </Text>
            <TextLink href="https://www.mtp.org" openNewTab>
              <Text mb={5}>Offizielle Website</Text>
            </TextLink>
          </List.Item>
        </List>
      </SectionLayout>
    </ArticleLayout>
  </PageLayout>
);

export default ausbildung;
