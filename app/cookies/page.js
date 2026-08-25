import LegalLayout from "../../components/LegalLayout/LegalLayout";
import styles from "../../components/LegalLayout/LegalLayout.module.css";

export default function CookiesPage() {
  return (
    <LegalLayout title="Cookie-Hinweise">
      <p>
        Auf dieser Website werden Cookies und ähnliche Technologien
        eingesetzt, soweit dies für den technischen Betrieb der Website oder
        die Bereitstellung bestimmter Funktionen erforderlich ist.
      </p>

      <h2>Technisch notwendige Cookies</h2>
      <p>
        Für die Bereitstellung bestimmter Funktionen können technisch
        notwendige Cookies verwendet werden. Diese dienen insbesondere dazu,
        die Funktionalität der Website und des Online-Buchungssystems
        sicherzustellen.
      </p>

      <h2>Onlinebuchung mit Easybooking</h2>
      <p>
        Für die Onlinebuchung wird das Buchungssystem Easybooking der zadego
        GmbH, Innsbruck, eingesetzt. Im Rahmen des Buchungsvorgangs können
        technisch notwendige Cookies und ähnliche Technologien verwendet
        werden, die für die Funktion des Buchungssystems erforderlich sind.
      </p>

      <p>
        Weitere Informationen zur Verarbeitung personenbezogener Daten im
        Rahmen der Onlinebuchung finden Sie in unserer{" "}
        <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>

      <h2>Google Maps</h2>
      <p>
        Die Anfahrt zur Pension ist über einen externen Link zu Google Maps
        erreichbar. Google Maps wird nicht direkt auf dieser Website
        eingebettet. Eine Verbindung zu Google Maps wird erst hergestellt,
        wenn Sie den entsprechenden Link anklicken.
      </p>

      <h2>Wetterdaten</h2>
      <p>
        Für die Wetteranzeige werden aktuelle Wetterdaten des Dienstes
        Open-Meteo abgerufen. Dabei werden keine Cookies durch unsere Website
        gesetzt.
      </p>

      <h2>Cookies im Browser verwalten</h2>
      <p>
        Sie können Cookies über die Einstellungen Ihres Browsers löschen oder
        blockieren. Bitte beachten Sie, dass dadurch technisch notwendige
        Funktionen, insbesondere die Onlinebuchung, möglicherweise nicht
        vollständig genutzt werden können.
      </p>

    </LegalLayout>
  );
}