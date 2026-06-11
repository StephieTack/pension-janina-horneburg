import Button from "../components/Button/Button";
import Hero from "../components/Hero/Hero";
import styles from "./page.module.css";
import {
  Bed,
  Users,
  CigaretteOff,
  MapPin,
  Sparkles,
  HouseIcon,
  Train,
  UtensilsCrossed,
  Map,
  ArrowRightLeft,
} from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <Hero
        image="/zimmer3.jpeg"
        logo="/logo_hell.png"
        subtitle="Ankommen. Durchatmen. Wohlfühlen."
        showScroll
        scrollTarget="#welcome"
      >
        <Button href="/zimmer" variant="secondary">
          <span>Zimmer ansehen</span>
        </Button>
      </Hero>

      {/* ================= WELCOME ================= */}
      <section id="welcome" className={styles.section}>
        <div className={styles.container}>
          <h2>
            Willkommen in der Pension Janina – Ihrem Zuhause auf Zeit in Horneburg
          </h2>
          <p>
            Schön, dass Sie den Weg zu uns gefunden haben! Ich bin Janina
            Ruprecht – und die Pension Janina ist kein anonymes Hotel, sondern
            ein Stück Familie. Bereits in zweiter Generation führe ich unser
            Haus mit ganzem Herzen, und genau das spüren Sie vom ersten Moment
            an.
          </p>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Unsere Unterkunft</h2>
          <p>
            Freuen Sie sich auf moderne, liebevoll eingerichtete Zimmer und
            gemütliche Ferienwohnungen, mitten im charmanten Horneburg. Erholen
            Sie sich, kommen Sie zur Ruhe – wir freuen uns auf Sie!
          </p>
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
          <h2>Perfekte Lage – mitten im Herzen von Horneburg</h2>
          <p>
            Die Pension Janina liegt genau richtig: ruhig genug zum Entspannen,
            zentral genug für alles was Sie brauchen. Ob Sie geschäftlich
            unterwegs sind oder die wunderschöne Region rund um die Niederelbe
            erkunden möchten – bei uns sind Sie bestens aufgehoben.
          </p>

          <ul className={styles.list}>
            <li>
              <Train size={30} />
              Bahnhof bequem zu Fuß erreichbar
            </li>
            <li>
              <UtensilsCrossed size={30} />
              Restaurants und Cafés direkt vor der Tür
            </li>
            <li>
              <Map size={30} />
              Zentral zwischen Buxtehude (~9 km) und Stade (~13 km) gelegen
            </li>
            <li>
              <ArrowRightLeft size={30} />
              Hamburg schnell erreichbar – nur ca. 35 km entfernt, bequem per
              S-Bahn direkt vom Bahnhof Horneburg
            </li>
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
        <div className={styles.imageItem}>
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
          <Button href="/umgebung" variant="primary">
            <span>Umgebung entdecken</span>
          </Button>
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
