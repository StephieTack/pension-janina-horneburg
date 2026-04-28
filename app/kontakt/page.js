"use client";

import styles from "./page.module.css";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Hero from "../../components/Hero/Hero";

export default function Kontakt() {
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        e.target,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        () => setStatus("Nachricht erfolgreich gesendet!"),
        () => setStatus("Fehler beim Senden.")
      );

    e.target.reset();
  };

  return (
    <main>
      {/* ================= HERO ================= */}
      <Hero
        title="Kontakt"
        subtitle="Ich freue mich auf Ihre Anfrage"
        image="/janina_ruprecht2.jpg"
        height="medium"
        showScroll
        scrollTarget="#kontakt"
      />

      {/* ================= KONTAKT ================= */}
      <section id="kontakt" className={styles.section}>
        <div className={styles.container}>
          <h2>So erreichen Sie uns</h2>

          <div className={styles.grid}>
            <address className={styles.info}>
              <div className={styles.item}>
                <MapPin />
                <div>
                  <p>Isern-Hinnerk-Weg 1a</p>
                  <p>21640 Horneburg</p>
                </div>
              </div>

              <div className={styles.item}>
                <Phone />
                <p>04163 812440</p>
              </div>

              <div className={styles.item}>
                <Mail />
                <p>pension-janina@t-online.de</p>
              </div>
            </address>

            <form className={styles.form} onSubmit={sendEmail}>
              <input name="name" type="text" placeholder="Ihr Name" required />
              <input name="email" type="email" placeholder="Ihre E-Mail" required />
              <textarea name="message" rows="5" placeholder="Ihre Nachricht" required />

              <button type="submit">Nachricht senden</button>

              {status && <p className={styles.status}>{status}</p>}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}