import styles from "./page.module.css";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";
import {
  Bike,
  Waves,
  Apple,
  Coffee,
  Flower2,
} from "lucide-react";

export default function UmgebungPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
        title="Umgebung & Ausflugsziele"
        subtitle="Zwischen Obstplantagen, Elbe und Hansestadt Hamburg"
        image="/apfelernte.jpeg"
        height="medium"
        showScroll
        scrollTarget="#altesLand"
      />

      {/* ================= ALTES LAND ================= */}
      <section id="altesLand" className={styles.section}>
        <div className={styles.container}>
          <h2>Das Alte Land</h2>

          <p>
            Das Alte Land zählt zu den schönsten Regionen Norddeutschlands und
            ist besonders bekannt für seine weitläufigen Obstplantagen,
            Fachwerkhäuser und idyllischen Deiche.
          </p>

          <p>
            Vor allem zur Apfelblüte im Frühling und während der Erntezeit im
            Herbst zeigt sich die Region von ihrer schönsten Seite.
          </p>

          <div className={styles.gallery}>
            <img src="/stade_see.jpeg" alt="See in Stade" />
            <img src="/fachwerkhaus.jpeg" alt="Fachwerkhaus im Alten Land" />
            <img src="/apfelbaum.jpeg" alt="Blühender Apfelbaum" />
          </div>
        </div>
      </section>

      {/* ================= HAMBURG ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Hamburg erleben</h2>

          <p>
            Die Hansestadt Hamburg erreichen Sie bequem in weniger als einer
            Stunde. Perfekt für Tagesausflüge, Shopping, Musicals oder einen
            Spaziergang entlang des Hafens.
          </p>

          <div className={styles.priceWrapper}>
            <div className={styles.priceCard}>
              <strong>45 Min.</strong>
              <p>bis Hamburg</p>
            </div>

            <div className={styles.priceCard}>
              <strong>Hafen</strong>
              <p>& Speicherstadt</p>
            </div>

            <div className={styles.priceCard}>
              <strong>Musicals</strong>
              <p>& Elbphilharmonie</p>
            </div>
          </div>

          <div className={styles.gallery}>
            <img src="/hafen_hamburg.jpg" alt="Hamburger Hafen" />
            <img src="/speicherstadt_hamburg.jpg" alt="Speicherstadt Hamburg" />
            <img
              src="/elbphilharmonie_hamburg.jpg"
              alt="ElbphilharmonieHamburg"
            />
          </div>
        </div>
      </section>

      {/* ================= AUSFLUGSZIELE ================= */}
      <section className={styles.section}>
        <div className={styles.container}>
          <h2>Weitere Ausflugsziele</h2>

          <div className={styles.priceWrapper}>
            <div className={styles.priceCard}>
              <strong>Stade</strong>
              <p>Historische Altstadt & Hafen</p>
            </div>

            <div className={styles.priceCard}>
              <strong>Buxtehude</strong>
              <p>Märchenhafte Fachwerkstadt</p>
            </div>

            <div className={styles.priceCard}>
              <strong>Jork</strong>
              <p>Herz des Alten Landes</p>
            </div>
          </div>

          <div className={styles.gallery}>
            <img src="/stade_fleet.jpeg" alt="Stade Altstadt" />
            <img src="/altstadt_buxtehude.jpg" alt="Buxtehude Altstadt" />
            <img src="/fachwerk_jork.jpeg" alt="Jork im Alten Land" />
          </div>
        </div>
      </section>

      {/* ================= AKTIVITÄTEN ================= */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <h2>Aktivitäten & Natur</h2>

          <p>
            Ob entspannte Fahrradtouren entlang der Elbe, Spaziergänge durch
            Obstgärten oder gemütliche Stunden in Hofcafés – rund um Horneburg
            gibt es viel zu entdecken.
          </p>

          <ul className={styles.list}>
            <li>
              <Bike size={30} style={{ color: "var(--color-primary)" }}/>
              Fahrradtouren durchs Alte Land
            </li>

            <li>
              <Waves size={30} style={{ color: "var(--color-primary)" }} />
              Spaziergänge an der Elbe
            </li>

            <li>
              <Apple size={30} style={{ color: "var(--color-primary)" }} />
              Hofläden & regionale Spezialitäten
            </li>

            <li>
              <Coffee size={30} style={{ color: "var(--color-primary)" }} />
              Gemütliche Hofcafés
            </li>

            <li>
              <Flower2 size={30} style={{ color: "var(--color-primary)" }}/>
              Apfelblüte im Frühling
            </li>
          </ul>

          <div className={styles.gallery}>
            <img src="/fahrradtour.jpg" alt="Fahrradtour im Alten Land" />
            <img src="/elbe_blankenese.jpg" alt="Blankenese an der Elbe" />
            <img src="/hofladen.jpg" alt="Hofcafé im Alten Land" />
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <h2>Jetzt Aufenthalt planen</h2>

          <p>
            Genießen Sie entspannte Tage im Alten Land und entdecken Sie die
            schönsten Seiten Norddeutschlands.
          </p>

          <Button href="/buchung" variant="secondary">
            <span>Zur Onlinebuchung</span>
          </Button>
        </div>
      </section>
    </main>
  );
}
