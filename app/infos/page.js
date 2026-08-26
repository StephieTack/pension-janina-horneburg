"use client";

import styles from "./page.module.css";
import Hero from "../../components/Hero/Hero";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Infos() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "An- & Abreise",
      content: (
        <>
          <p>
            Der Check-in ist ab 15:00 Uhr möglich, der Check-out erfolgt bis
            10:00 Uhr.{" "}
          </p>
          <p>
            Unsere Rezeption ist telefonisch täglich von 08:00 bis 12:00 Uhr
            sowie von 14:00 bis 18:00 Uhr für Sie erreichbar.{" "}
          </p>
          <p>
            Die Anreise beziehungsweise der Check-in erfolgt bequem per
            Schlüsselsafe, sodass Sie flexibel anreisen können.
          </p>
        </>
      ),
    },
    {
      title: "Frühstück",
      content: (
        <>
          <p>
            Von Freitag bis Sonntag servieren wir Ihnen zwischen 08:00 und 10:00
            Uhr ein liebevoll angerichtetes Frühstück direkt am Tisch – ganz
            ohne Buffet und in entspannter Atmosphäre.{" "}
          </p>
          <p>
            Damit wir alles frisch für Sie vorbereiten können, bitten wir um
            eine vorherige Reservierung. Teilen Sie Ihren Wunsch bitte vorab
            mit.
          </p>
          <p>
            Der Frühstückspreis beträgt 12,50 € pro Person. Freuen Sie sich auf
            frische Brötchen mit einer Auswahl an süßem und herzhaftem
            Aufschnitt, dazu frische Gurken, ein gekochtes Ei sowie frischen
            Orangensaft. Kaffee wird bei uns selbstverständlich unbegrenzt
            serviert.{" "}
          </p>
          <p>
            Wer lieber Tee statt Kaffee genießt, kann sich gerne aus einer
            feinen Auswahl verschiedener Teesorten bedienen. So starten Sie
            entspannt und genussvoll in den Tag.
          </p>
        </>
      ),
    },
    {
      title: "Inklusivleistungen",
      content: (
        <p>
          Während Ihres Aufenthalts steht Ihnen kostenfreies WLAN zur Verfügung.
          Je nach Verfügbarkeit bieten wir außerdem Stellplätze direkt an der
          Unterkunft an. Für Fahrräder gibt es eine sichere
          Unterstellmöglichkeit – ideal für Gäste, die die Umgebung aktiv
          erkunden möchten.
        </p>
      ),
    },
    {
      title: "Haustiere",
      content: (
        <p>
          Vierbeinige Begleiter sind bei uns herzlich willkommen. Für Hunde
          berechnen wir einen Aufpreis von 12 € pro Nacht. Bitte sprechen Sie
          uns vor Ihrer Anreise gerne an, damit wir alles optimal vorbereiten
          können.
        </p>
      ),
    },
    {
      title: "Übernachtungspreise",
      content: (
        <>
          <p>Wir bieten Ihnen komfortable Unterkünfte zu fairen Preisen:</p>
          <p>
            <strong>Doppelzimmer 1 Person:</strong> 74,00 € pro Nacht
          </p>
          <p>
            <strong>Doppelzimmer 2 Personen:</strong> 99,00 € pro Nacht
          </p>
          <p>
            <strong>Doppelzimmer 3 Personen:</strong> 125,00 € pro Nacht
          </p>
          <p>
            <strong>Doppelzimmer 4 Personen:</strong> 155,00 € pro Nacht
          </p>
          <p>
            <strong>Ferienwohnung 1 - 2 Personen:</strong> 120,00 € pro Nacht
          </p>
          <p>
            <strong>Ferienwohnung 3 Personen:</strong> 150,00 € pro Nacht
          </p>
          <p>
            <strong>Ferienwohnung 4 Personen:</strong> 180,00 € pro Nacht
          </p>
          <p>
            <strong>Kinder unter 3 Jahren:</strong> kostenfrei
          </p>
          <p>Endreinigung Ferienwohnung: 45,00 €</p>
        </>
      ),
    },
    {
      title: "Zusatzleistungen",
      content: (
        <>
          <p>
            Für einen noch angenehmeren Aufenthalt können Sie folgende Extras
            hinzu buchen:
          </p>
          <p>
            <strong>Frühstück:</strong> 12,50 € pro Person und Tag{" "}
            <p>(nach vorheriger Reservierung)</p>
          </p>
          <p>
            <strong>Hund:</strong> 12,00 € pro Nacht{" "}
            <p>(bequem über die Onlinebuchung auswählbar)</p>
          </p>
          <p>Wir freuen uns darauf, Sie bald bei uns begrüßen zu dürfen!</p>
        </>
      ),
    },
    {
      title: "Zahlung",
      content: (
        <>
          <p>
            Um die Reservierung verbindlich abzuschließen, bitten wir um eine
            Anzahlung in Höhe von 10 % des Gesamtbetrags innerhalb von 3 Tagen
            nach der Buchung.
          </p>
          <p>
            Bei einer Anreise innerhalb der nächsten 14 Tage bitten wir Sie,
            anstelle der Anzahlung den gesamten offenen Betrag innerhalb von 3
            Tagen nach der Buchung auf unser Konto zu überweisen. Erfolgt die
            Anreise bereits vor Ablauf dieser Frist, ist der Gesamtbetrag
            spätestens einen Tag vor Anreise fällig.
          </p>
        </>
      ),
    },
    {
      title: "Stornobedingungen",
      content: (
        <>
          <p>
            Ein Rücktritt des Gastes bedarf der Textform. Im Falle einer
            Stornierung gelten folgende Bedingungen:
          </p>
          <ul>
            <li>Bis 20 Tage vor Anreise: kostenfrei</li>
            <li>19 bis 7 Tage vor Anreise: 80 % des vereinbarten Preises</li>
            <li>
              ab 6 Tage vor Anreise oder bei Nichtanreise: 100 % des
              vereinbarten Preises
            </li>
          </ul>
        </>
      ),
    },
    {
      title: "Parken & Anfahrt",
      content: (
        <p>
          Parkmöglichkeiten befinden sich direkt an der Pension. Eine genaue
          Wegbeschreibung erhalten Sie bequem vor Ihrer Anreise per E-Mail.
        </p>
      ),
    },
  ];

  return (
    <main>
      <Hero
        title="Wissenswertes"
        subtitle="Alle wichtigen Infos für deinen Aufenthalt"
        image="/gaestebuch.jpg"
        height="medium"
        showScroll
        scrollTarget="#gaesteinformationen"
      />

      <section id="gaesteinformationen" className={styles.section}>
        <div className={styles.container}>
          <header>
            <h2>Die wichtigsten Informationen</h2>
            <p>
              Sie haben Fragen zu ihrem Aufenthalt in der Pension Janina? Hier
              finden Sie alle wichtigen Informationen – von der Anreise bis zum
              Check-out.
            </p>
          </header>

          {/* 🔥 ACCORDION INLINE */}
          <div className={styles.accordion}>
            {items.map((item, index) => (
              <div
                key={index}
                className={`${styles.accordionItem} ${
                  openIndex === index ? styles.active : ""
                }`}
              >
                <button
                  className={styles.accordionHeader}
                  onClick={() => toggle(index)}
                >
                  <span>{item.title}</span>
                  <ChevronDown className={styles.icon} />
                </button>

                <div className={styles.accordionContent}>
                  <div className={styles.accordionInner}>{item.content}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
