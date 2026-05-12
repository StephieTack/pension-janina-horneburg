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
        angegebenen Zeitraum bereitgestellt. Änderungen bleiben vorbehalten.
      </p>
      <p className={styles.sub}>
        3.3 Der Gast ist verpflichtet, die vereinbarten bzw. geltenden Preise zu
        zahlen.
      </p>
      <p className={styles.sub}>
        3.4 Die Preise verstehen sich einschließlich der gesetzlichen
        Mehrwertsteuer.
      </p>
      <p className={styles.sub}>
        3.5 Der Gesamtbetrag ist spätestens bei Anreise fällig.
      </p>
      <p className={styles.sub}>
        3.6 Die Pension kann eine Vorauszahlung verlangen.
      </p>

      <h2>4. Anreise (Self Check-in)</h2>
      <p className={styles.sub}>
        4.1 Die Anreise erfolgt in der Regel kontaktlos über eine Schlüsselbox.
      </p>
      <p className={styles.sub}>
        4.2 Der Gast erhält vor Anreise die notwendigen Zugangsdaten.
      </p>
      <p className={styles.sub}>
        4.3 Diese Daten sind vertraulich zu behandeln.
      </p>

      <h2>5. Abreise</h2>
      <p className={styles.sub}>5.1 Check-in ab 15:00 Uhr.</p>
      <p className={styles.sub}>5.2 Check-out bis 10:00 Uhr.</p>
      <p className={styles.sub}>
        5.3 Bei verspäteter Abreise können Zusatzkosten entstehen.
      </p>

      <h2>6. Rücktritt des Gastes</h2>
      <p className={styles.sub}>6.1 Ein Rücktritt bedarf der Textform.</p>
      <p className={styles.sub}>6.2 Es gelten folgende Stornobedingungen:</p>

      <ul className={styles.list}>
        <li>30 bis 20 Tage vor Anreise: kostenfrei</li>
        <li>19 bis 7 Tage vor Anreise: 80 % des Reisepreises</li>
        <li>ab 6 Tage vor Anreise oder Nichtanreise: 100 %</li>
      </ul>

      <p className={styles.sub}>
        6.3 Der Nachweis eines geringeren Schadens ist möglich.
      </p>

      <h2>7. Rücktritt der Pension</h2>
      <p className={styles.sub}>7.1 Die Pension kann zurücktreten, wenn:</p>

      <ul className={styles.list}>
        <li>höhere Gewalt vorliegt</li>
        <li>falsche Angaben gemacht wurden</li>
        <li>der Betrieb gefährdet ist</li>
      </ul>

      <p className={styles.sub}>7.2 Kein Anspruch auf Schadensersatz.</p>

      <h2>8. Haftung</h2>
      <p className={styles.sub}>
        Die Haftung richtet sich nach den gesetzlichen Vorschriften (§§ 701 ff.
        BGB).
      </p>

      <h2>9. Haustiere</h2>
      <p className={styles.sub}>
        Haustiere sind nur nach vorheriger Zustimmung erlaubt.
      </p>

      <h2>10. Rauchverbot</h2>
      <p className={styles.sub}>
        In allen Innenräumen gilt Rauchverbot. Bei Verstoß wird eine
        Reinigungsgebühr erhoben.
      </p>

      <h2>11. Datenschutz</h2>
      <p className={styles.sub}>
        Die Verarbeitung personenbezogener Daten erfolgt gemäß DSGVO.
      </p>

      <h2>12. Schlussbestimmungen</h2>
      <p className={styles.sub}>
        Es gilt deutsches Recht. Gerichtsstand ist der Sitz der Pension.
      </p>

      <p className={styles.stand}>Stand: 27.04.2026</p>
    </LegalLayout>
  );
}
