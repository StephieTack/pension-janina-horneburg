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