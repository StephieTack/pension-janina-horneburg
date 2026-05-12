import LegalLayout from "../../components/LegalLayout/LegalLayout";

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Allgemeine Hinweise</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns sehr wichtig. Nachfolgend
        informieren wir Sie darüber, welche Daten auf dieser Website erhoben und
        wie sie genutzt werden.
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

      <h2>3. Zugriffsdaten (Server-Logfiles)</h2>
      <p>
        Beim Besuch dieser Website werden automatisch Informationen durch den
        Hosting-Anbieter erfasst. Dazu gehören IP-Adresse, Browsertyp, Uhrzeit
        der Anfrage und aufgerufene Seiten.
      </p>
      <p>
        Diese Daten dienen ausschließlich der technischen Überwachung und
        Sicherheit der Website.
      </p>

      <h2>4. Kontaktformular</h2>
      <p>
        Wenn Sie uns über das Kontaktformular Anfragen senden, werden Ihre
        Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zur
        Bearbeitung Ihrer Anfrage gespeichert.
      </p>

      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO.
      </p>

      <p>
        Für den Versand nutzen wir den Dienst <strong>EmailJS</strong>. Dabei
        kann es zur Übermittlung von Daten an Server außerhalb der Europäischen
        Union kommen.
      </p>

      <p>
        Weitere Informationen finden Sie unter:
        <br />
        https://www.emailjs.com/docs/
      </p>

      <h2>5. Cookies</h2>
      <p>
        Diese Website verwendet nur technisch notwendige Cookies, die für den
        Betrieb der Seite erforderlich sind.
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung sowie
        Einschränkung der Verarbeitung Ihrer Daten.
      </p>

      <h2>7. Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren.
      </p>

      <h2>8. SSL- bzw. TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL- bzw.
        TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
        dass die Adresszeile des Browsers mit „https://“ beginnt.
      </p>
    </LegalLayout>
  );
}
