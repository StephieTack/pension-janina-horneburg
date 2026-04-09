import Button from "../components/Button/Button";
import styles from "./page.module.css";
import {
  Bed,
  Users,
  CigaretteOff,
  MapPin,
  Sparkles,
  HouseIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main>

      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <img
            src="/logo_hell.png"
            alt="Pension Janina Horneburg Logo"
            className={styles.heroLogo}
          />

          <p className={styles.heroSubtitle}>
            Ankommen. Durchatmen. Wohlfühlen.
          </p>

          <a href="/zimmer" className={styles.secondaryButton}>
            Zimmer ansehen
          </a>

          <a href="#welcome" className={styles.scrollIndicator}>
            <span></span>
          </a>
        </div>
      </section>

      {/* ================= WELCOME ================= */}
      <section id="welcome" className={styles.section}>
        <div className={styles.container}>
          <h2>Willkommen in der Pension Janina</h2>
          <p>
            Ich bin Janina Ruprecht und führe die Pension in zweiter Generation –
            mit viel Herz und dem Anspruch, Ihnen einen entspannten und angenehmen
            Aufenthalt zu bieten.
          </p>
          <p>
            Freuen Sie sich auf moderne, liebevoll eingerichtete Zimmer und
            Ferienwohnungen – zentral gelegen im schönen Horneburg.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Unsere Unterkunft</h2>

          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <Bed className={styles.icon} />
              <span>7 Ferienzimmer (Einzel & Doppel)</span>
            </div>

            <div className={styles.featureItem}>
              <HouseIcon className={styles.icon} />
              <span>2 Ferienwohnungen</span>
            </div>

            <div className={styles.featureItem}>
              <Users className={styles.icon} />
              <span>Bis zu 4 Personen</span>
            </div>

            <div className={styles.featureItem}>
              <CigaretteOff className={styles.icon} />
              <span>Nichtraucher-Pension</span>
            </div>

            <div className={styles.featureItem}>
              <MapPin className={styles.icon} />
              <span>Zentrale Lage</span>
            </div>

            <div className={styles.featureItem}>
              <Sparkles className={styles.icon} />
              <span>Modern & gepflegt</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOCATION ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Perfekte Lage</h2>
          <p>
            Die Pension liegt im Ortskern von Horneburg – ruhig und dennoch
            zentral.
          </p>

          <ul className={styles.list}>
            <li>Bahnhof fußläufig erreichbar</li>
            <li>Restaurants und Cafés in direkter Nähe</li>
            <li>Zwischen Buxtehude und Stade</li>
            <li>Idealer Ausgangspunkt für Ausflüge ins Alte Land</li>
          </ul>
        </div>
      </section>

      {/* ================= IMAGE STRIP ================= */}
      <section className={styles.imageStrip}>
        <div className={styles.imageItem}>
          <img src="/stade_fleet.jpeg" alt="Stade Fleet" />
        </div>
        <div className={styles.imageItem}>
          <img src="/apfelernte.jpeg" alt="Apfelernte" />
        </div>
        <div className={styles.imageItem} >
          <img src="/stade_see.jpeg" alt="Stade See" />
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Erholung & Entdeckung</h2>
          <p>
            Ob entspannte Tage in der Natur, Radtouren durch das Alte Land oder
            Ausflüge in die Umgebung – bei uns finden Sie den idealen
            Ausgangspunkt für Ihre Auszeit.
          </p>
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