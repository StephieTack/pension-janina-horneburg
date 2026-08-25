import LegalLayout from "../../components/LegalLayout/LegalLayout";
import styles from "../../components/LegalLayout/LegalLayout.module.css";

export default function AgbPage() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen">
      <h2>1. Geltungsbereich</h2>
      <p className={styles.sub}>
        1.1 Diese AGB gelten für Verträge über die mietweise Überlassung von
        Gästezimmern zur Beherbergung sowie alle für den Gast erbrachten
        weiteren Leistungen der Pension.
      </p>
      <p className={styles.sub}>
        1.2 Abweichende Bestimmungen des Gastes finden keine Anwendung, es sei
        denn, sie werden ausdrücklich schriftlich vereinbart.
      </p>

      <h2>2. Vertragsabschluss</h2>
      <p className={styles.sub}>
        2.1 Der Beherbergungsvertrag kommt durch die Annahme der Buchungsanfrage
        des Gastes durch die Pension zustande.
      </p>
      <p className={styles.sub}>
        2.2 Die Buchung kann schriftlich, telefonisch, elektronisch oder über
        Buchungsplattformen erfolgen.
      </p>
      <p className={styles.sub}>
        2.3 Die Pension ist berechtigt, eine Buchungsbestätigung in Textform zu
        verlangen.
      </p>

      <h2>3. Leistungen, Preise und Zahlung</h2>
      <p className={styles.sub}>
        3.1 Die Pension ist verpflichtet, die gebuchten Zimmer bereitzuhalten
        und die vereinbarten Leistungen zu erbringen.
      </p>
      <p className={styles.sub}>
        3.2 Sofern Frühstück gebucht oder im Preis enthalten ist, wird dieses im
        angegebenen Zeitraum bereitgestellt. Änderungen aus organisatorischen
        Gründen bleiben vorbehalten, soweit sie dem Gast zumutbar sind.
      </p>
      <p className={styles.sub}>
        3.3 Der Gast ist verpflichtet, die vereinbarten bzw. geltenden Preise zu
        zahlen.
      </p>
      <p className={styles.sub}>
        3.4 Die Preise verstehen sich einschließlich der jeweils geltenden
        gesetzlichen Mehrwertsteuer.
      </p>
      <p className={styles.sub}>
        3.5 Sofern nicht anders vereinbart, ist der Gesamtbetrag spätestens vor
        Anreise bzw. bei Anreise fällig.
      </p>
      <p className={styles.sub}>
        3.6 Die Pension ist berechtigt, bei Vertragsschluss oder danach eine
        angemessene Vorauszahlung zu verlangen.
      </p>

      <h2>4. Anreise (Schlüsselbox / Self Check-in)</h2>
      <p className={styles.sub}>
        4.1 Die Anreise erfolgt in der Regel kontaktlos über eine Schlüsselbox.
      </p>
      <p className={styles.sub}>
        4.2 Der Gast erhält rechtzeitig vor Anreise die erforderlichen
        Zugangsdaten (z. B. Code).
      </p>
      <p className={styles.sub}>
        4.3 Der Gast ist verpflichtet, die Zugangsdaten vertraulich zu
        behandeln und nicht an Dritte weiterzugeben.
      </p>
      <p className={styles.sub}>
        4.4 Bei Verlust oder Missbrauch der Zugangsdaten haftet der Gast für
        daraus entstehende Schäden, sofern er dies zu vertreten hat.
      </p>

      <h2>5. Abreise</h2>
      <p className={styles.sub}>
        5.1 Die Zimmer stehen am Anreisetag ab 15:00 Uhr zur Verfügung.
      </p>
      <p className={styles.sub}>
        5.2 Am Abreisetag sind die Zimmer bis spätestens 10:00 Uhr zu räumen.
      </p>
      <p className={styles.sub}>
        5.3 Bei verspäteter Abreise kann eine angemessene Zusatzvergütung
        berechnet werden.
      </p>

      <h2>6. Rücktritt des Gastes (Stornierung) / Nichtinanspruchnahme</h2>
      <p className={styles.sub}>
        6.1 Ein Rücktritt des Gastes bedarf der Textform.
      </p>
      <p className={styles.sub}>
        6.2 Im Falle des Rücktritts ist die Pension berechtigt, eine angemessene
        Entschädigung zu verlangen:
      </p>

      <ul className={styles.list}>
        <li>30 bis 20 Tage vor Anreise: kostenfrei</li>
        <li>19 bis 7 Tage vor Anreise: 80 % des vereinbarten Preises</li>
        <li>
          ab 6 Tage vor Anreise oder bei Nichtanreise: 100 % des vereinbarten
          Preises
        </li>
      </ul>

      <p className={styles.sub}>
        6.3 Dem Gast bleibt der Nachweis vorbehalten, dass kein oder ein
        wesentlich geringerer Schaden entstanden ist.
      </p>
      <p className={styles.sub}>
        6.4 Die Pension ist verpflichtet, nicht in Anspruch genommene Zimmer
        nach Möglichkeit anderweitig zu vergeben.
      </p>

      <h2>7. Rücktritt der Pension</h2>
      <p className={styles.sub}>
        7.1 Die Pension ist berechtigt, aus sachlich gerechtfertigtem Grund vom
        Vertrag zurückzutreten, insbesondere wenn:
      </p>

      <ul className={styles.list}>
        <li>höhere Gewalt oder andere nicht zu vertretende Umstände vorliegen</li>
        <li>falsche Angaben zur Person oder Buchung gemacht wurden</li>
        <li>Sicherheits- oder Betriebsgründe dies erforderlich machen</li>
      </ul>

      <p className={styles.sub}>
        7.2 In diesen Fällen besteht kein Anspruch auf Schadensersatz.
      </p>

      <h2>8. Haftung der Pension</h2>
      <p className={styles.sub}>
        8.1 Die Haftung richtet sich nach den gesetzlichen Vorschriften.
      </p>
      <p className={styles.sub}>
        8.2 Bei leicht fahrlässigen Pflichtverletzungen haftet die Pension nur
        bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den
        vorhersehbaren Schaden.
      </p>
      <p className={styles.sub}>
        8.3 Die Haftung für Schäden aus der Verletzung von Leben, Körper oder
        Gesundheit bleibt unberührt.
      </p>
      <p className={styles.sub}>
        8.4 Für eingebrachte Sachen gilt die gesetzliche Haftung (§§ 701 ff.
        BGB).
      </p>

      <h2>9. Haftung des Gastes</h2>
      <p className={styles.sub}>
        Der Gast haftet für alle Schäden, die durch ihn oder mitreisende
        Personen verursacht werden.
      </p>

      <h2>10. Haustiere</h2>
      <p className={styles.sub}>
        Haustiere sind nur nach vorheriger Zustimmung gestattet.
      </p>

      <h2>11. Rauchverbot</h2>
      <p className={styles.sub}>
        11.1 In allen Innenräumen gilt Rauchverbot.
      </p>
      <p className={styles.sub}>
        11.2 Bei Verstoß wird eine pauschale Reinigungsgebühr von 150 € erhoben.
        Dem Gast bleibt der Nachweis eines geringeren Schadens vorbehalten.
      </p>

      <h2>12. Datenschutz</h2>
      <p className={styles.sub}>
        Die Verarbeitung personenbezogener Daten erfolgt gemäß den geltenden
        Datenschutzbestimmungen (DSGVO).
      </p>

      <h2>13. Schlussbestimmungen</h2>
      <p className={styles.sub}>
        13.1 Es gilt das Recht der Bundesrepublik Deutschland.
      </p>
      <p className={styles.sub}>
        13.2 Ist der Gast Kaufmann oder juristische Person, ist Gerichtsstand
        der Sitz der Pension.
      </p>
      <p className={styles.sub}>
        13.3 Sollten einzelne Bestimmungen unwirksam sein, bleibt die
        Wirksamkeit der übrigen unberührt.
      </p>

      <p className={styles.stand}>Stand: 27.04.2026</p>
    </LegalLayout>
  );
}