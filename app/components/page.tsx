import styles from "./page.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.top}>
        
        {/* LEFT */}
        <div className={styles.col}>
          <h3>PENSION JANINA</h3>
          <p>Horneburg</p>
          <p>Telefon: 04163 123456</p>
          <p>Email: info@pension-janina.de</p>
        </div>

        {/* CENTER */}
        <div className={styles.col}>
          <img src="niedersachsen.png" alt="niedersachsen" />
        </div>

        {/* RIGHT */}
        <div className={styles.col}>
          <h3>WETTER</h3>
          <p>Heute</p>
          <p>☀️ 14°C sonnig</p>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© Pension Janina</p>
        <div className={styles.links}>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
        </div>
      </div>

    </footer>
  );
}