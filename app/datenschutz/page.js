import LegalLayout from "../../components/LegalLayout/LegalLayout";
import styles from "../../components/LegalLayout/LegalLayout.module.css";

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns wichtig. Nachfolgend
        informieren wir Sie darüber, welche personenbezogenen Daten beim Besuch
        dieser Website, bei einer Kontaktaufnahme und bei der Nutzung unserer
        Onlinebuchung verarbeitet werden.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Pension Janina
        <br />
        Inhaberin: Janina Ruprecht
        <br />
        Isern-Hinnerk-Weg 1a
        <br />
        21640 Horneburg
        <br />
        E-Mail: pension-janina@t-online.de
      </p>

      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird über einen externen Hosting-Anbieter bereitgestellt.
        Beim Aufruf der Website werden durch den Hosting-Anbieter technisch
        erforderliche Informationen verarbeitet und in Server-Logfiles
        gespeichert.
      </p>

      <p>Hierzu können insbesondere gehören:</p>

      <ul className={styles.list}>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>aufgerufene Seiten</li>
        <li>übertragene Datenmenge</li>
      </ul>

      <p>
        Die Verarbeitung erfolgt, um die Website technisch bereitzustellen,
        einen störungsfreien Betrieb zu gewährleisten sowie die Sicherheit und
        Stabilität des Angebots zu gewährleisten.
      </p>

      <h2>4. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular kontaktieren, werden die von Ihnen
        eingegebenen Daten verarbeitet. Dies betrifft insbesondere Ihren
        Namen, Ihre E-Mail-Adresse und den Inhalt Ihrer Nachricht.
      </p>

      <p>
        Die Verarbeitung erfolgt zur Bearbeitung und Beantwortung Ihrer
        Anfrage. Soweit Ihre Anfrage auf den Abschluss eines
        Beherbergungsvertrags oder auf eine vorvertragliche Kommunikation
        gerichtet ist, erfolgt die Verarbeitung auf Grundlage von Art. 6 Abs. 1
        lit. b DSGVO. In anderen Fällen erfolgt die Verarbeitung auf Grundlage
        von Art. 6 Abs. 1 lit. f DSGVO, wobei unser berechtigtes Interesse in
        der Bearbeitung und Beantwortung eingehender Anfragen liegt.
      </p>

      <h2>5. Versand von Kontaktanfragen über Resend</h2>
      <p>
        Für die technische Übermittlung von Nachrichten aus dem Kontaktformular
        nutzen wir den Dienst Resend. Anbieter ist Resend Inc.
      </p>

      <p>
        Im Rahmen des Versands werden die für die Bearbeitung und Zustellung
        erforderlichen Daten an Resend übermittelt. Dazu gehören insbesondere
        Name, E-Mail-Adresse und der Inhalt der Nachricht.
      </p>

      <p>
        Bei der Nutzung von Resend kann eine Verarbeitung personenbezogener
        Daten außerhalb der Europäischen Union bzw. des Europäischen
        Wirtschaftsraums, insbesondere in den USA, erfolgen. Für
        Datenübermittlungen in Drittländer werden die vom Anbieter angegebenen
        geeigneten Datenschutzgarantien verwendet.
      </p>

      <p>
        Weitere Informationen zum Datenschutz bei Resend finden Sie in der{" "}
        <a
          href="https://resend.com/legal/privacy-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Resend
        </a>
        .
      </p>

      <h2>6. Online-Buchung mit Easybooking</h2>
      <p>
        Für die Onlinebuchung unserer Unterkünfte nutzen wir das
        Buchungssystem Easybooking der zadego GmbH, Innsbruck, Österreich.
      </p>

      <p>
        Zur Bereitstellung des Buchungssystems werden technische Inhalte von
        Easybooking geladen. Hierzu wird eine Verbindung zu den Servern des
        Anbieters hergestellt. Dabei können insbesondere IP-Adresse, Datum und
        Uhrzeit des Zugriffs sowie weitere technische Verbindungsdaten
        verarbeitet werden.
      </p>

      <p>
        Bei einer Nutzung des Buchungssystems werden außerdem die von Ihnen im
        Rahmen der Buchung eingegebenen personenbezogenen Daten verarbeitet.
        Hierzu können insbesondere Name, Kontaktdaten, Aufenthaltsdaten und
        Angaben zur Buchung gehören.
      </p>

      <p>
        Die Verarbeitung erfolgt zur Anbahnung und Durchführung des
        Beherbergungsvertrags gemäß Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <p>
        Im Rahmen des Buchungssystems können technisch notwendige Cookies oder
        vergleichbare Technologien eingesetzt werden, die für die
        Bereitstellung und Funktion des Buchungsvorgangs erforderlich sind.
      </p>

      <p>
        Weitere Informationen zur Datenverarbeitung durch Easybooking finden
        Sie in der{" "}
        <a
          href="https://www.easy-booking.at/datenschutz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Datenschutzerklärung von Easybooking
        </a>
        .
      </p>

      <h2>7. Wetterdaten</h2>
      <p>
        Auf dieser Website wird eine aktuelle Wetteranzeige bereitgestellt.
        Hierfür werden Wetterdaten des Dienstes Open-Meteo abgerufen.
      </p>

      <p>
        Beim Abruf der Wetterdaten wird eine Verbindung zu den Servern von
        Open-Meteo hergestellt. Dabei können technisch erforderliche
        Verbindungsdaten, insbesondere die IP-Adresse des anfragenden Geräts,
        verarbeitet werden.
      </p>

      <p>
        Die Wetterdaten werden ausschließlich zur Darstellung der aktuellen
        Wetterlage auf unserer Website verwendet. Über unsere Website werden
        dabei keine Analyse- oder Marketing-Cookies von Open-Meteo gesetzt.
      </p>

      <h2>8. Google Maps und externe Links</h2>
      <p>
        Diese Website enthält einen externen Link zu Google Maps, über den Sie
        die Lage der Pension aufrufen können.
      </p>

      <p>
        Google Maps wird nicht direkt auf dieser Website eingebettet. Eine
        Verbindung zu Google wird erst hergestellt, wenn Sie den entsprechenden
        Link anklicken.
      </p>

      <p>
        Darüber hinaus enthält diese Website weitere Links zu externen
        Websites und Diensten Dritter. Auf deren Inhalte und
        Datenschutzpraktiken haben wir keinen Einfluss. Für die Verarbeitung
        personenbezogener Daten durch diese Anbieter gelten deren jeweilige
        Datenschutzerklärungen.
      </p>

      <h2>9. Cookies</h2>
      <p>
        Auf unserer Website werden keine Cookies zu Analyse-, Werbe- oder
        Marketingzwecken eingesetzt.
      </p>

      <p>
        Im Rahmen des Online-Buchungssystems Easybooking können technisch
        notwendige Cookies oder vergleichbare Technologien verwendet werden,
        soweit diese für die Funktion des Buchungssystems erforderlich sind.
      </p>

      <p>
        Weitere Informationen hierzu finden Sie in unseren{" "}
        <a href="/cookies">Cookie-Hinweisen</a>.
      </p>

      <h2>10. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers mit „https://“ beginnt und ein
        Schloss-Symbol angezeigt wird.
      </p>

      <h2>11. Speicherdauer</h2>
      <p>
        Personenbezogene Daten werden nur so lange gespeichert, wie dies für
        den jeweiligen Zweck erforderlich ist oder gesetzliche
        Aufbewahrungspflichten bestehen.
      </p>

      <p>
        Anfragen über das Kontaktformular werden gelöscht, sobald die Anfrage
        abschließend bearbeitet wurde und keine gesetzlichen
        Aufbewahrungspflichten oder sonstigen berechtigten Gründe für eine
        weitere Speicherung bestehen.
      </p>

      <h2>12. Ihre Rechte</h2>
      <p>
        Sie haben nach der Datenschutz-Grundverordnung insbesondere folgende
        Rechte:
      </p>

      <ul className={styles.list}>
        <li>
          Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten
        </li>
        <li>Recht auf Berichtigung unrichtiger Daten</li>
        <li>Recht auf Löschung Ihrer Daten</li>
        <li>Recht auf Einschränkung der Verarbeitung</li>
        <li>Recht auf Datenübertragbarkeit</li>
        <li>Recht auf Widerspruch gegen bestimmte Verarbeitungen</li>
      </ul>

      <h2>13. Beschwerderecht bei einer Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über
        die Verarbeitung Ihrer personenbezogenen Daten zu beschweren.
      </p>

      <h2>14. Aktualität dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung kann angepasst werden, wenn sich die
        technischen Funktionen dieser Website oder die eingesetzten Dienste
        ändern.
      </p>

      <p className={styles.stand}>Stand: 25.08.2026</p>
    </LegalLayout>
  );
}