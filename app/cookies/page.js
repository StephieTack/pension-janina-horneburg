import styles from "./page.module.css";

export default function CookiesPage() {
  return (
    <main className={styles.container}>
      <h1>Cookie-Richtlinie</h1>
      <div className={styles.divider}></div>

      <p>
        Diese Website verwendet Cookies, um die Nutzung zu verbessern und bestimmte Funktionen bereitzustellen.
      </p>

      <h2>Welche Cookies wir verwenden</h2>
      <p>
        Wir verwenden hauptsächlich technisch notwendige Cookies, die für den Betrieb der Website erforderlich sind.
      </p>

      <h2>Externe Dienste</h2>
      <p>
        Beim Laden externer Inhalte (z. B. Karten oder APIs) können Drittanbieter Cookies setzen.
      </p>

      <h2>Ihre Rechte</h2>
      <p>
        Sie können Cookies jederzeit über die Einstellungen Ihres Browsers deaktivieren oder löschen.
      </p>
    </main>
  );
}