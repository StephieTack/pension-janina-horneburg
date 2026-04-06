import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <img
          src="/logo.png"
          alt="Pension Janina Horneburg"
          className={styles.heroLogo}
        />
        <p className={styles.heroSubtitle}>
          Erholung in gemütlicher Atmosphäre
        </p>
        <a href="/buchung" className={styles.ctaButton}>
          Jetzt anfragen
        </a>
      </section>

      <section className={styles.infoSection}>
        <h2 className={styles.infoTitle}>
          Unsere Unterkunft
        </h2>
        <p className={styles.infoText}>
          Wir bieten komfortable Zimmer und Ferienwohnungen
          für Ihren Aufenthalt in Horneburg.
        </p>
      </section>
    </main>
  );
}