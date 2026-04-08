import styles from "./page.module.css";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Kontakt() {
  return (
    <main className={styles.container}>
      <h1>Kontakt</h1>
      <div className={styles.divider}></div>

      <div className={styles.grid}>
        {/* LEFT: INFOS */}
        <div className={styles.info}>
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

        {/* RIGHT: FORM */}
        <form className={styles.form}>
          <input type="text" placeholder="Ihr Name" required />
          <input type="email" placeholder="Ihre E-Mail" required />
          <textarea placeholder="Ihre Nachricht" rows="5" required />
          <button type="submit">Nachricht senden</button>
        </form>
      </div>
    </main>
  );
}