import styles from "./Footer.module.css";
import Weather from "../Weather/Weather";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.top}>
        
        {/* LEFT */}
<div className={styles.col}>
  <h3>PENSION JANINA</h3>

  <address className={styles.info}>
    <a
      href="https://maps.google.com/?q=Isern-Hinnerk-Weg+1a+21640+Horneburg"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.contactLink}
    >
      <MapPin />

      <div>
        <span>Isern-Hinnerk-Weg 1a</span>
        <span>21640 Horneburg</span>
      </div>
    </a>

    <a href="tel:+494163812440" className={styles.contactLink}>
      <Phone />
      <span>04163 812440</span>
    </a>

    <a
      href="mailto:pension-janina@t-online.de"
      className={styles.contactLink}
    >
      <Mail />
      <span>pension-janina@t-online.de</span>
    </a>
  </address>
</div>

        {/* CENTER */}
        <div className={styles.col}>
          <img src="niedersachsen.png" alt="Niedersachsen Grundriss" />
        </div>

        {/* RIGHT */}
        <div className={styles.col}>
          <h3>WETTER</h3>
          <Weather/>
        </div>

      </div>

      <div className={styles.bottom}>
        <p>© Pension Janina</p>
        <div className={styles.links}>
          <a href="/agb">AGB</a>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>

    </footer>
  );
}