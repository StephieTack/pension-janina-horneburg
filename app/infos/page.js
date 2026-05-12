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
          <p>Am Anreisetag steht dir dein Zimmer ab 15 Uhr zur Verfügung.</p>
          <p>
            Am Abreisetag bitten wir dich, das Zimmer bis 11 Uhr freizugeben.
          </p>
          <p>
            Unsere Rezeptionszeiten sind von 8 bis 18 Uhr. Eine spätere Anreise
            ist jederzeit über unseren Self-Check-in möglich – bitte gib uns
            dazu rechtzeitig Bescheid.
          </p>
        </>
      ),
    },
    {
      title: "Preise",
      content: (
        <>
          <p>
            <strong>Einzelzimmer:</strong> 63,00 € / Nacht
          </p>
          <p>
            <strong>Doppelzimmer:</strong> 79,00 € / Nacht
          </p>
          <p>
            <strong>Ferienwohnung:</strong> 97,00 € / Nacht
          </p>
          <p>Aufbettung ab der 3. Person: 20,00 €</p>
          <p>Endreinigung Ferienwohnung: 20,00 €</p>
          <p>Frühstück: 9,00 € pro Person</p>
          <p>Zustellbett: 20,00 € pro Nacht</p>
          <p>Hund: 8,00 € pro Nacht</p>
        </>
      ),
    },
    {
      title: "Frühstück",
      content: (
        <p>
          Frühstück ist am Wochenende für 9 € pro Person auf Anfrage möglich.
          Bitte melde dich vorab bei uns.
        </p>
      ),
    },
    {
      title: "Inklusivleistungen",
      content: (
        <ul>
          <li>Kostenloses WLAN</li>
          <li>Kostenloser Stellplatz</li>
          <li>Kostenloser Fahrradstellplatz</li>
        </ul>
      ),
    },
    {
      title: "Parken & Anfahrt",
      content: (
        <p>
          Parkmöglichkeiten befinden sich direkt an der Pension. Die genaue
          Wegbeschreibung erhältst du mit deiner Buchungsbestätigung.
        </p>
      ),
    },
    {
      title: "Haustiere",
      content: (
        <p>
          Haustiere sind im gesamten Haus gegen einen Aufpreis von 8 € pro Nacht
          erlaubt.
        </p>
      ),
    },
    {
      title: "Anzahlung",
      content: (
        <p>
          Für deine Buchung wird eine Anzahlung von 25 % innerhalb von 7 Tagen
          nach Erhalt der Buchungsbestätigung fällig.
        </p>
      ),
    },
    {
      title: "Stornobedingungen",
      content: (
        <>
          <p>Kostenlose Stornierung bis 14 Tage vor Anreise.</p>
          <p>Bei weniger als 14 Tagen: 80 % des Reisepreises.</p>
          <p>Bei Nichtanreise: 100 % des Reisepreises.</p>
          <p>Wir empfehlen eine Reiserücktrittsversicherung.</p>
        </>
      ),
    },
  ];

  return (
    <main>
      <Hero
        title="Wissenswertes von A bis Z"
        subtitle="Alle wichtigen Infos für deinen Aufenthalt"
        image="/janina_ruprecht2.jpg"
        height="medium"
        showScroll
        scrollTarget="#gaesteinformationen"
      />

      <section id="gaesteinformationen" className={styles.section}>
        <div className={styles.container}>
          <header>
            <h2>Die wichtigsten Informationen</h2>
            <p>
              Du hast Fragen zu deinem Aufenthalt in der Pension Janina? Hier
              findest du alle wichtigen Informationen – von der Anreise bis zum
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
