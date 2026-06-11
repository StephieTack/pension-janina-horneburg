import Hero from "../../components/Hero/Hero";
import styles from "./page.module.css";

export default function PensionPage() {
  return (
    <main>
      {/* HERO */}
      <Hero
        image="/einblicke.jpg"
        title="Einblicke in unsere Pension"
        subtitle="Liebevolle Details, gemütliche Zimmer und eine Atmosphäre zum Ankommen."
        height="medium"
      />

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.containerSmall}>
          <span className={styles.eyebrow}>Pension Janina</span>

          <h2>Wohlfühlen in jedem Detail</h2>

          <p>
            Unsere Pension verbindet moderne Gemütlichkeit mit familiärer
            Atmosphäre. Helle Räume, ruhige Farben und kleine Details sorgen
            dafür, dass Sie sich vom ersten Moment an willkommen fühlen.
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className={styles.gallerySection}>
        <div className={styles.container}>
          <div className={styles.galleryGrid}>
            <img src="/detail1.jpg" alt="Dekoration Pension Janina" />
            <img src="/detail2.jpg" alt="Dekoration Pension Janina" />
            <img src="/detail5.jpg" alt="Dekoration Pension Janina" />
            <img src="/detail4.jpg" alt="Dekoration Pension Janina" />
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}
      <section className={styles.featureSection}>
        <div className={styles.featureWrapper}>
          <img
            src="/zimmer6.jpg"
            alt="Gemütliches Zimmer"
            className={styles.featureImage}
          />

          <div className={styles.overlay}>
            <span>Entspannen & ankommen</span>

            <h2>Ruhige Nächte. Entspannte Tage.</h2>

            <p>
              Ob Kurzurlaub, Geschäftsreise oder längerer Aufenthalt – unsere
              Zimmer bieten den idealen Rückzugsort nach einem erlebnisreichen
              Tag.
            </p>
          </div>
        </div>
      </section>

      {/* SECOND GALLERY */}
      <section className={styles.editorialSection}>
        <div className={styles.container}>
          <div className={styles.editorialGrid}>
            <div className={styles.editorialContent}>
              <span>Frühstück auf Anfrage</span>

              <h2>Mit einem guten Frühstück entspannt in den Tag starten</h2>

              <p>
                Auf Wunsch servieren wir Ihnen am Wochenende ein liebevoll
                vorbereitetes Frühstück in gemütlicher Atmosphäre. Freuen Sie
                sich auf frische Brötchen, Kaffee, regionale Spezialitäten und
                einen entspannten Start in den Tag – ganz ohne Hektik.
              </p>

              <p>
                Damit wir alles frisch für Sie vorbereiten können, bitten wir um
                eine vorherige Reservierung. Teilen Sie Ihren Wunsch bitte vorab
                mit.
              </p>
            </div>

            <div className={styles.editorialGallery}>
              <img src="/fruehstueck1.jpg" alt="Frühstückstisch" />
              <img src="/fruehstueck4.jpg" alt="Frühstücksraum" />
              <img src="/fruehstueck3.jpg" alt="Frühstückstisch" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
