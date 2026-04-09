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

  <div className={styles.item}>
    <MapPin className={styles.icon} />
    <div>
      <p>Isern-Hinnerk-Weg 1a</p>
      <p>21640 Horneburg</p>
    </div>
  </div>

  <div className={styles.item}>
    <Phone className={styles.icon} />
    <p>04163 812440</p>
  </div>

  <div className={styles.item}>
    <Mail className={styles.icon} />
    <p>pension-janina@t-online.de</p>
  </div>
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
          <a href="#">AGB</a>
          <a href="#">Impressum</a>
          <a href="#">Datenschutz</a>
          <a href="/cookies">Cookies</a>
        </div>
      </div>

    </footer>
  );
}