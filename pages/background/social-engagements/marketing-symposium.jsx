import { Blockquote, Container, Text } from '@mantine/core';
import React, { useState } from 'react';
import ArticleLayout from '../../../components/layouts/ArticleLayout';
import PageLayout from '../../../components/layouts/PageLayout';
import SectionLayout from '../../../components/layouts/SectionLayout';
import ImagePreviewModal from '../../../components/modals/ImagePreviewModal';
import { getPath } from '../../../components/routing/routes';
import ButtonLink from '../../../components/utils/ButtonLink';
import CoverflowImageCarousel from '../../../components/utils/CoverflowImageCarousel';
import Image from '../../../components/utils/Image';
import Paragraph from '../../../components/utils/Paragraph';
import TextLink from '../../../components/utils/TextLink';

const marketingSymposium = () => {
  const [path] = getPath().splice(-1);
  const [imageModalOpened, setImageModalOpened] = useState(false);
  const showImage = () => setImageModalOpened(!imageModalOpened);

  return (
    <PageLayout title={`jdlang.de - ${path.label}`}>
      <ImagePreviewModal
        opened={imageModalOpened}
        setOpened={setImageModalOpened}
        image="/files/file-pool.jpg"
        title={'Mein "Creative Pool"'}
        caption="Die besten Ideen kommen mir, wenn mir das Wasser bis zum Hals steht..."
      />
      <ArticleLayout title="1. Marketing Symposium Frankfurt-Leipzig (von Studenten für Studenten)">
        <SectionLayout
          title="Ein Stück Deutsch-deutsche Marketing-Geschichte..."
          type="paragraph"
        >
          <Paragraph>
            Es gibt Projekte, an die sind so einzigartig und emotional, dass man
            sich auch nach Jahrzehnten immer wieder sehr gerne daran erinnert.
            Das 1. Marketingsymposium Frankfurt-Leipzig von Studenten für
            Studenten ist ein solches. Es war Ende 1989, kurz nach dem 9.
            November. Die Mauer war gerade gefallen und die Menschen träumten
            von der Wieder-Vereinigung. Ich lag in meinem{' '}
            <ButtonLink onClick={showImage}>
              &quot;creative-Pool&quot;
            </ButtonLink>{' '}
            in meiner damaligen Studenten-Bude in Oberursel im Taunus und dort
            entwickelte ich eine erste, spontane grobe Idee einer großen
            Marketing-Veranstaltung für unsere &quot;Kommilitonen&quot; in der
            DDR zu organisieren und durchzuführen. Am nächsten Tag erzählte ich
            meinen damaligen Kommilitonen Philipp Werner davon. Nachdem auch er
            spontan von dieser Idee begeistert war, beschlossen wir gemeinsam
            mit dieser Idee zu dem damaligen Lehrbeauftragten für die
            praktischen Übungen zum Marketing Joachim Kellner (später Professor
            für Marketing in Hamburg) zu gehen, um ihn einzuladen mitzumachen.
          </Paragraph>
          <Paragraph>
            Von der Idee dies zu einer MTP-Veranstaltung zu machen riet er uns
            aus pragmatischen, umsetzungstechnischen Gründen ab (MTP war schon
            damals eine sehr große, teilweise auch schon etwas schwerfällige
            Organisation, sodass das gebotene Tempo bei der Vorbereitung wohl
            nicht realisiert werden könnte. So schlug er vor, eine derartige
            Veranstaltung unter einem eigenen Label zu entwickeln. Dass Joachim
            Kellner ein erfolgreicher, sehr erfahrener Unternehmensberater mit
            glänzenden Kontakten war, sollte sich für dieses Projekt als ein
            Glücksfall erweisen. Dank seiner Kompetenz und Erfahrung, die er uns
            &quot;Greenhorns&quot; voraus hatte, bildeten wir gemeinsam mit ihm
            die{' '}
            <TextLink href="/files/file-projektleitung.pdf" openNewTab>
              geschäftsführende Projektleitung
            </TextLink>{' '}
            und machten uns gemeinsam an die{' '}
            <TextLink href="/files/file-arbeit.pdf" openNewTab>
              Arbeit
            </TextLink>
            . Oft trafen wir uns bei Joachim Kellner zu Hause und arbeiteten
            gemeinsam an einem Konzept. Als Partner-Universität hatten wir uns
            auf Leipzig verständigt, wo neben der Karl-Marx-Universität auch die
            älteste deutsche Handelshochschule beheimatet war. Weil wir zur
            Planung und Umsetzung Ansprechpartner vor Ort dringend benötigten,
            entschieden wir uns relativ kurzfristig nach Leipzig zu fahren und
            dort die für unser Vorhaben relevanten Personen, also Professoren
            der beiden Hochschulen in Leipzig zu ermitteln und unser Projekt
            vorzustellen. Nachdem wir eine wirklich abenteuerliche Fahrt auf den
            damals noch mit Schlaglöchern übersäten DDR-Autobahnen und damals
            noch im Dienst stehende DDR-Grenz-Soldaten hinter uns hatten,
            erreichten wir endlich bei tiefster Dunkelheit den Stadtrand von
            Leipzig, wo wir bei der Familie Lemnitz Unterkunft erhielten. Gleich
            am nächsten Morgen ging&apos;s zur Karl-Marx-Uni. Wir waren von der
            Offenheit und Freundlichkeit der Leipziger Professoren förmlich
            überrascht. Schnell und verblüffend unkompliziert fanden wir in den
            relevanten{' '}
            <TextLink href="/files/file-projektleitung_2.pdf" openNewTab>
              Professoren
            </TextLink>{' '}
            tatkräftige Unterstützer.
          </Paragraph>
        </SectionLayout>
        <SectionLayout>
          <CoverflowImageCarousel
            images={[
              '/img/img-symposium_1.png',
              '/img/img-symposium_2.png',
              '/img/img-symposium_3.png',
              '/img/img-symposium_4.png',
            ]}
          />
          <Container size={560} mt={20}>
            <Text align="center" color="dimmed" size="sm">
              Die Motive der{' '}
              <TextLink href="/files/file-printkampagne.pdf" openNewTab>
                vier Werbeplakate
              </TextLink>{' '}
              zu dem bereits im Vorfeld von der{' '}
              <TextLink href="/files/file-presse.pdf" openNewTab>
                Presse
              </TextLink>{' '}
              stark beachteten 1. deutsch-deutschen Marketing-Symposium
            </Text>
          </Container>
        </SectionLayout>
        <SectionLayout type="paragraph">
          <Paragraph>
            Spätestens jetzt wussten wir, dass unser Projekt sehr erfolgreich
            werden wird. Zurück in Frankfurt machte Joachim ein Termin für uns
            alle bei der Frankfurter Werbeagentur Michael Conrad & Leo Burnett,
            deren Managing Director er einst war. Nach einem kurzen, präzisen
            Briefing entwickelten sie für das Symposium ein Logo (hier
            Wort-Bild-Marke) und ein Corporate Design, das dann Basis für eine{' '}
            <TextLink href="/files/file-printkampagne.pdf" openNewTab>
              Printkampagne
            </TextLink>{' '}
            wurde. Nach der Ausarbeitung eines inhaltlichen Konzeptes (
            <TextLink href="/files/file-lehrveranstaltungen.pdf" openNewTab>
              Lehrveranstaltungen
            </TextLink>
            ) für diese Veranstaltung machten wir uns sehr erfolgreich auf die
            Suche nach spendenfreudigen{' '}
            <TextLink href="/files/file-sponsoren.pdf" openNewTab>
              Sponsoren
            </TextLink>
            , und die Tatsache, dass der{' '}
            <TextLink href="/files/file-hochadel.pdf" openNewTab>
              &quot;Hochadel&quot;
            </TextLink>{' '}
            des deutschen Marketings, neben{' '}
            <TextLink href="/files/file-politik.pdf" openNewTab>
              Politik
            </TextLink>{' '}
            und{' '}
            <TextLink href="/files/file-wissenschaft.pdf" openNewTab>
              Wissenschaft
            </TextLink>{' '}
            von unserem Vorhaben begeistert war, machte das Überzeugen der
            Marketing-Abteilungen problemlos. Schnell hatten wir ausreichend
            Sponsorengelder von Top-Markenartiklern zusammen, so dass wir zu
            unserer ersten Presse-Konferenz, die auch sehr gut besucht war, nach
            Leipzig laden konnten. So war es auch nicht verwunderlich, dass im
            Vorfeld unseres Symposiums in vielen Medien (überwiegend Presse,
            aber auch Radio und TV) darüber berichtet wurde. Ein Teil davon
            haben wir in unserem Programmheft dokumentiert. Weil dieses{' '}
            <TextLink href="/files/file-programmheft.pdf" openNewTab>
              Programmheft
            </TextLink>{' '}
            bereits zu Beginn dieser Veranstaltung ausgegeben haben, liegt es in
            der Natur der Sache, dass wir dort nur das Presse-Echo vom Vorfeld
            dieser Veranstaltung dokumentieren konnten. Im Trubel der
            Veranstaltung hatten wir es dann nicht geschafft, die
            Medien-Landschaft nach Berichten zu screenen, um diese dann zu
            dokumentieren.
          </Paragraph>
          <Paragraph>
            Dann ging es endlich los: Zuvor hatten wir noch unsere gestiftete{' '}
            <TextLink href="/files/file-bibliothek.pdf" openNewTab>
              Marketing-Bibliothek
            </TextLink>{' '}
            feierlich eröffnet und den Leipziger Professoren die Unterlagen zu
            den{' '}
            <TextLink href="/files/file-praktika.pdf" openNewTab>
              Praktikumsplätzen
            </TextLink>
            , die wir bei westdeutschen Markenartiklern akquiriert hatten,
            übergeben. Bereits dort gingen unsere{' '}
            <TextLink href="/files/file-programmheft.pdf" openNewTab>
              Programmhefte
            </TextLink>{' '}
            weg wie warme Semmeln; sie wurden uns förmlich aus den Händen
            gerissen...! Rührend war auch die Reaktion auf die Bekanntgabe, dass
            der damalige Computer-Hersteller{' '}
            <TextLink href="/files/file-commodore.pdf" openNewTab>
              Commodore
            </TextLink>
            , bei dem ich wenige Monate später, nach bestandenen Diplom-Examen
            meine postuniversitäre Karriere als Direktionsassistent startete,
            die beiden Leipziger Hochschulen kostenfrei mit Computer ausstatten
            wird: Die Professoren Dr. Henschel und Dr. Scholz hatten fast schon
            vor ungläubiger Freude Tränen in den Augen , umarmten und rückten
            der Reihe nach an sich - da musste ich auch selbst erst mal
            schlucken und tief durchatmen.
          </Paragraph>
        </SectionLayout>
        <SectionLayout>
          <Image src="/img/img-helmut-kohl.png" height={150} />
          <Blockquote cite="– Grußwort des damaligen Bundeskanzler, Dr. Helmut Kohl (April 1990)">
            Ihrer Veranstaltung wünsche ich im Interesse der Menschen sowie
            unseres ganzen Landes einen erfolgreichen Verlauf.
          </Blockquote>
        </SectionLayout>
        <SectionLayout type="paragraph">
          <Paragraph>
            Von dem Ansturm der Studenten waren wir geradezu überwältigt. Die
            Hörsäle waren total überfüllt, auf den Tischen saßen und standen
            nicht nur die Studenten, sondern auch etliche weiterbildungswillige
            ältere, erfahrenere &quot;Semester&quot; aus der DDR, die sich
            vermutlich so für Ihren Job fit machen wollten.
          </Paragraph>
          <Paragraph>
            Gemeinsam mit Dr. Scholz hielt ich einen Vortrag über
            &quot;Marketing im Unternehmen&quot;. Ich übernahm die erste Hälfte
            dieser Vorlesung. Und ich muss schon sagen, vor dieser Menschenmenge
            war ich förmlich beeindruckt, -um nicht zu sagen, fast verängstigt-
            so bedrückend eng war es in diesem total überfüllten Hörsaal! Wenige
            Meter von mir entfernt saßen die Menschen auf dem Boden und auch auf
            den restlichen Stehplätzen herrschte großes Gedränge. Bestimmt waren
            es mehrere Hundert, wenn nicht sogar mindestens 1.000 Zuhörer...
          </Paragraph>
          <Paragraph>
            Als wir wenige Tage später mit der Lufthansa, die unsererer gesamten{' '}
            <TextLink href="/files/file-mannschaft.pdf" openNewTab>
              Mannschaft
            </TextLink>{' '}
            Freiflüge spendierte, nach Hause flogen, waren wir total geschafft,
            den Kopf voll mit sehr emotionalen, einzigartigen Erlebnissen, die
            ich wohl nie vergessen werde. Und weil dieses nicht-kommerzielle
            Social-Marketing-Projekt wohl das Schönste war, was ich in meiner
            krankheitsbedingt viel zu kurzen Karriere realisieren konnte, werde
            ich vermutlich noch meinen Enkeln von diesem wahrhaft historischem
            Projekt erzählen. Und: Dieses Projekt wird noch als Referenzprojekt
            für andere Social-Marketing-Projekte, die ich noch vorhabe, noch auf
            Jahre hinaus fungieren. Und allein für diesen Zweck ist es wahrlich
            überzeugend genug...
          </Paragraph>
        </SectionLayout>
      </ArticleLayout>
    </PageLayout>
  );
};

export default marketingSymposium;
