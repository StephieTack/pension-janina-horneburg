import { Check } from "lucide-react";
import styles from "./page.module.css";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

export default function ZimmerPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
        title="Unsere Zimmer"
        subtitle="Finden Sie Ihren
          perfekten Rückzugsort"
        image="/pension-janina.jpg"
        height="medium"
        showScroll
        scrollTarget="#ferienzimmer"
      />

      {/* ================= FERIENZIMMER ================= */}
      <section id="ferienzimmer" className={styles.section}>
        <div className={styles.container}>
          <h2>Unsere Ferienzimmer</h2>

          {/* 🖼️ Image Slider */}
          <ImageSlider
            images={[
              { src: "/ferienzimmer1.png", alt: "Ferienzimmer" },
              { src: "/ferienzimmer2.jpeg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer3.jpeg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer4.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer5.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer6.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer9.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer10.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer11.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer12.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer13.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer14.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer15.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer16.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer17.jpg", alt: "Ferienzimmer" },
              { src: "/ferienzimmer18.jpg", alt: "Ferienzimmer" },
            ]}
          />

          {/* Text */}
          <div className={styles.textBlock}>
            <p>
              Unsere liebevoll eingerichteten Ferienzimmer bieten Ihnen alles,
              was Sie für einen entspannten Aufenthalt benötigen.
            </p>

            {/* PREISE */}
            <div className={styles.priceWrapper}>
              <div className={styles.priceCard}>
                <strong>74€</strong>
                <p>1 Person / Nacht</p>
              </div>

              <div className={styles.priceCard}>
                <strong>99€</strong>
                <p>2 Personen / Nacht</p>
              </div>

              <div className={styles.priceCard}>
                <strong>125€</strong>
                <p>3 Personen / Nacht</p>
              </div>

              <div className={styles.priceCard}>
                <strong>155€</strong>
                <p>4 Personen / Nacht</p>
              </div>
            </div>

            <ul className={styles.list}>
              <li>
                <Check color="var(--color-primary)" /> Komfortables Bett
              </li>
              <li>
                <Check color="var(--color-primary)" /> Eigenes Badezimmer
              </li>
              <li>
                <Check color="var(--color-primary)" /> WLAN inklusive
              </li>
              <li>
                <Check color="var(--color-primary)" /> Ruhige Lage
              </li>
              <li>
                <Check color="var(--color-primary)" /> Kinder unter 3 Jahren:
                kostenfrei
              </li>
            </ul>

            <Button href="/buchung" variant="primary">
              <span>Ferienzimmer buchen</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= FERIENWOHNUNG ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Unsere Ferienwohnungen</h2>

          {/* 🖼️ Image Slider */}
          <ImageSlider
            images={[
              { src: "/ferienwohnung1.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung2.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung3.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung4.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung5.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung6.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung7.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung8.jpg", alt: "Ferienzimmer" },
              { src: "/ferienwohnung9.jpg", alt: "Ferienzimmer" },
            ]}
          />

          <div className={styles.textBlock}>
            <p>
              Unsere großzügigen Ferienwohnungen bieten maximalen Komfort und
              viel Platz.
            </p>

            {/* PREISE */}
            <div className={styles.priceWrapper}>
              <div className={styles.priceCard}>
                <strong>120€</strong>
                <p>1–2 Personen / Nacht</p>
              </div>

              <div className={styles.priceCard}>
                <strong>150€</strong>
                <p>3 Personen / Nacht</p>
              </div>

              <div className={styles.priceCard}>
                <strong>180€</strong>
                <p>4 Personen / Nacht</p>
              </div>
            </div>

            <ul className={styles.list}>
              <li>
                <Check color="var(--color-primary)" /> Voll ausgestattete Küche
              </li>
              <li>
                <Check color="var(--color-primary)" /> Separater Wohnbereich
              </li>
              <li>
                <Check color="var(--color-primary)" /> WLAN inklusive
              </li>
              <li>
                <Check color="var(--color-primary)" /> Ideal für Familien
              </li>
              <li>
                <Check color="var(--color-primary)" /> Ruhige Lage
              </li>
              <li>
                <Check color="var(--color-primary)" /> Kinder unter 3 Jahren:
                kostenfrei
              </li>
            </ul>

            <Button href="/buchung" variant="primary">
              <span>Ferienwohnung buchen</span>
            </Button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Jetzt Aufenthalt anfragen</h2>
          <p>Wir freuen uns darauf, Sie bei uns begrüßen zu dürfen.</p>

          <Button href="/buchung" variant="secondary">
            <span>Zur Onlinebuchung</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
