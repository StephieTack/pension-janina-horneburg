import styles from "./Footer.module.css";
import Weather from "../Weather/Weather";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* LEFT */}
        <div className={styles.col}>
          <h3>PENSION JANINA</h3>

          <address className={styles.info}>
            <Link
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
            </Link>

            <Link href="tel:+494163812440" className={styles.contactLink}>
              <Phone />
              <span>04163 812440</span>
            </Link>

            <Link
              href="mailto:pension-janina@t-online.de"
              className={styles.contactLink}
            >
              <Mail />
              <span>pension-janina@t-online.de</span>
            </Link>
          </address>
        </div>

        {/* CENTER */}
        <div className={styles.col}>
          <img src="niedersachsen.png" alt="Niedersachsen Grundriss" />
        </div>

        {/* RIGHT */}
        <div className={styles.col}>
          <h3>WETTER</h3>
          <Weather />
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© Pension Janina</p>
        <div className={styles.links}>
          <Link href="/agb">AGB</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
          <Link href="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
