// import styles from "./page.module.css";
// import Button from "../../components/Button/Button";
// import Hero from "../../components/Hero/Hero";
// import { Bike, Waves, Apple, Coffee, Flower2 } from "lucide-react";

// export default function UmgebungPage() {
//   return (
//     <main>
//       {/* HERO */}
//       <Hero
//         title="Umgebung & Ausflugsziele"
//         subtitle="Zwischen Obstplantagen, Elbe und Hansestadt Hamburg"
//         image="/apfelernte.jpeg"
//         height="medium"
//         showScroll
//         scrollTarget="#ausgangslage"
//       />

//       {/* ================= Ausgangslage================= */}
//       <section id="ausgangslage" className={styles.sectionAlt}>
//         <div className={styles.container}>
//           <h2>Ideale Ausgangslage</h2>

//           <p>
//             Unsere Unterkunft ist der ideale Ausgangspunkt für entspannte
//             Ausflüge und unvergessliche Entdeckungen in der Region.
//           </p>
//         </div>
//       </section>
//       {/* ================= ALTES LAND ================= */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <h2>Das Alte Land (ca. 8 km)</h2>

//           <p>
//             Europas größtes zusammenhängendes Obstanbaugebiet liegt direkt vor
//             der Haustür. Von März bis Mai verwandelt die Obstblüte die
//             Landschaft in ein farbenfrohes Meer. Im Sommer locken frische
//             Erdbeeren und Kirschen, im Herbst die berühmte Apfelernte. Ein
//             Paradies für Radfahrer, Spaziergänger und Genießer.
//           </p>

//           <div className={styles.gallery}>
//             <img src="/stade_see.jpeg" alt="See in Stade" />
//             <img src="/fachwerkhaus.jpeg" alt="Fachwerkhaus im Alten Land" />
//             <img src="/apfelbaum.jpeg" alt="Blühender Apfelbaum" />
//           </div>
//         </div>
//       </section>

//       {/* ================= LÜHE ANLEGER ================= */}
//       <section className={styles.featureSection}>
//         <div className={styles.featureImageWrapper}>
//           <img
//             src="/apfelbaum.jpeg"
//             alt="Lüheanleger an der Elbe"
//             className={styles.featureImage}
//           />

//           <div className={styles.featureOverlay}>
//             <span>ca. 10 km entfernt</span>
//             <h2>Lüheanleger</h2>

//             <p>
//               Maritime Atmosphäre direkt an der Elbe mit Fähre, kleinen Cafés
//               und traumhaften Sonnenuntergängen.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ================= STADE ================= */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <h2>Historische Altstadt Stade (ca. 13 km)</h2>

//           <p>
//             Die Hansestadt Stade begeistert mit über tausendjähriger Geschichte,
//             liebevoll restaurierten Fachwerkhäusern, alten Kirchen und dem
//             bekannten schiefen Turm. Das herrliche Elbpanorama macht den Besuch
//             besonders reizvoll.
//           </p>

//           <div className={styles.gallery}>
//             <img src="/stade_see.jpeg" alt="See in Stade" />
//             <img src="/fachwerkhaus.jpeg" alt="Fachwerkhaus im Alten Land" />
//             <img src="/apfelbaum.jpeg" alt="Blühender Apfelbaum" />
//           </div>
//         </div>
//       </section>

//       {/* ================= HAMBURG ================= */}
//       <section className={styles.sectionAlt}>
//         <div className={styles.container}>
//           <h2>Hamburger Speicherstadt & Hafencity (ca. 40 km)</h2>

//           <p>
//             Das UNESCO-Weltkulturerbe zählt zu den beliebtesten
//             Sehenswürdigkeiten Hamburgs und ist bequem mit der S-Bahn in weniger
//             als 40 Minuten erreichbar. Historische Backsteingebäude treffen hier
//             auf moderne Architektur und echtes Hafenflair.
//           </p>
//           {/*
//           <div className={styles.priceWrapper}>
//             <div className={styles.priceCard}>
//               <strong>45 Min.</strong>
//               <p>bis Hamburg</p>
//             </div>

//             <div className={styles.priceCard}>
//               <strong>Hafen</strong>
//               <p>& Speicherstadt</p>
//             </div>

//             <div className={styles.priceCard}>
//               <strong>Musicals</strong>
//               <p>& Elbphilharmonie</p>
//             </div>
//           </div> */}

//           <div className={styles.gallery}>
//             <img src="/hafen_hamburg.jpg" alt="Hamburger Hafen" />
//             <img src="/speicherstadt_hamburg.jpg" alt="Speicherstadt Hamburg" />
//             <img
//               src="/elbphilharmonie_hamburg.jpg"
//               alt="ElbphilharmonieHamburg"
//             />
//           </div>
//         </div>
//       </section>

//       {/* ================= AUSFLUGSZIELE =================
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <h2>Weitere Ausflugsziele</h2>

//           <div className={styles.priceWrapper}>
//             <div className={styles.priceCard}>
//               <strong>Stade</strong>
//               <p>Historische Altstadt & Hafen</p>
//             </div>

//             <div className={styles.priceCard}>
//               <strong>Buxtehude</strong>
//               <p>Märchenhafte Fachwerkstadt</p>
//             </div>

//             <div className={styles.priceCard}>
//               <strong>Jork</strong>
//               <p>Herz des Alten Landes</p>
//             </div>
//           </div>

//           <div className={styles.gallery}>
//             <img src="/stade_fleet.jpeg" alt="Stade Altstadt" />
//             <img src="/altstadt_buxtehude.jpg" alt="Buxtehude Altstadt" />
//             <img src="/fachwerk_jork.jpeg" alt="Jork im Alten Land" />
//           </div>
//         </div>
//       </section> */}

//       {/* ================= AKTIVITÄTEN ================= */}
//       <section className={styles.section}>
//         <div className={styles.container}>
//           <h2>Aktivitäten & Natur</h2>

//           <p>
//             Ob entspannte Fahrradtouren entlang der Elbe, Spaziergänge durch
//             Obstgärten oder gemütliche Stunden in Hofcafés – rund um Horneburg
//             gibt es viel zu entdecken.
//           </p>

//           <ul className={styles.list}>
//             <li>
//               <Bike size={30} />
//               Fahrradtouren durchs Alte Land
//             </li>

//             <li>
//               <Waves size={30} />
//               Spaziergänge an der Elbe
//             </li>

//             <li>
//               <Apple size={30} />
//               Hofläden & regionale Spezialitäten
//             </li>

//             <li>
//               <Coffee size={30} />
//               Gemütliche Hofcafés
//             </li>

//             <li>
//               <Flower2 size={30} />
//               Apfelblüte im Frühling
//             </li>
//           </ul>

//           <div className={styles.gallery}>
//             <img src="/fahrradtour.jpg" alt="Fahrradtour im Alten Land" />
//             <img src="/elbe_blankenese.jpg" alt="Blankenese an der Elbe" />
//             <img src="/hofladen.jpg" alt="Hofcafé im Alten Land" />
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className={styles.ctaSection}>
//         <div className={styles.container}>
//           <h2>Jetzt Aufenthalt planen</h2>

//           <p>
//             Genießen Sie entspannte Tage im Alten Land und entdecken Sie die
//             schönsten Seiten Norddeutschlands.
//           </p>

//           <Button href="/buchung" variant="secondary">
//             <span>Zur Onlinebuchung</span>
//           </Button>
//         </div>
//       </section>
//     </main>
//   );
// }
import styles from "./page.module.css";
import Button from "../../components/Button/Button";
import Hero from "../../components/Hero/Hero";

import { Bike, Waves, Apple, Coffee, Flower2, ArrowRight } from "lucide-react";

export default function UmgebungPage() {
  return (
    <main>
      {/* ================= HERO ================= */}

      <Hero
        title="Umgebung & Ausflugsziele"
        subtitle="Zwischen Obstplantagen, Elbe und Hansestadt Hamburg"
        image="/apfelernte.jpeg"
        height="medium"
        showScroll
        scrollTarget="#intro"
      />

      {/* ================= INTRO ================= */}

      <section id="intro" className={styles.intro}>
        <div className={styles.containerSmall}>
          <span className={styles.eyebrow}>Natur • Elbe • Hansestädte</span>

          <h2>Zwischen Apfelblüte, Fachwerkhäusern und maritimem Flair.</h2>

          <p>
            Unsere Unterkunft ist der ideale Ausgangspunkt für entspannte
            Ausflüge und unvergessliche Entdeckungen in der Region.
          </p>
        </div>
      </section>

      {/* ================= ALTES LAND ================= */}

      <section className={styles.editorialSection}>
        <div className={styles.editorialGrid}>
          <div className={styles.editorialContent}>
            <span>ca. 8 km entfernt</span>

            <h2>Das Alte Land</h2>

            <p>
              Europas größtes zusammenhängendes Obstanbaugebiet liegt direkt vor
              der Haustür. Von März bis Mai verwandelt die Obstblüte die
              Landschaft in ein farbenfrohes Meer. Im Sommer locken frische
              Erdbeeren und Kirschen, im Herbst die berühmte Apfelernte. Ein
              Paradies für Radfahrer, Spaziergänger und Genießer.
            </p>

            <p>
              Perfekt für Fahrradtouren, Spaziergänge und entspannte Tage in der
              Natur.
            </p>
          </div>

          <div className={styles.editorialGallery}>
            <img src="/apfelbaum.jpeg" alt="" />
            <img src="/fachwerkhaus.jpeg" alt="" />
            <img src="/stade_see.jpeg" alt="" />
          </div>
        </div>
      </section>

      {/* ================= FEATURE LÜHE ================= */}

      <section className={styles.featureSection}>
        <div className={styles.featureImageWrapper}>
          <img
            src="/fahrradtour.jpg"
            alt="Lüheanleger"
            className={styles.featureImage}
          />

          <div className={styles.featureOverlay}>
            <span>ca. 10 km entfernt</span>

            <h2>Lüheanleger</h2>

            <p>
              Dieses charmante Ausflugsziel direkt an der Elbe lädt zum
              Verweilen ein: kleine Imbissbuden, entspannte Deichspaziergänge
              und gemütliche Plätze mit Blick auf den Strom sorgen für maritime
              Atmosphäre. Besonders beliebt ist die historische
              Lühe-Schulau-Fähre, die bereits seit 1918 nach Wedel übersetzt.
            </p>
          </div>
        </div>
      </section>

      {/* ================= STADE ================= */}

      <section className={styles.splitSection}>
        <div className={styles.splitImage}>
          <img src="/stade_fleet.jpeg" alt="Stade" />
        </div>

        <div className={styles.splitContent}>
          <span>ca. 13 km entfernt</span>

          <h2>Historische Altstadt Stade</h2>

          <p>
            Die Hansestadt Stade begeistert mit über tausendjähriger Geschichte,
            liebevoll restaurierten Fachwerkhäusern, alten Kirchen und dem
            bekannten schiefen Turm. Das herrliche Elbpanorama macht den Besuch
            besonders reizvoll.
          </p>

          <p>
            Besonders schön: ein Spaziergang entlang der Fleete mit Blick auf
            die liebevoll erhaltene Altstadt.
          </p>
        </div>
      </section>

      {/* ================= HAMBURG ================= */}

      <section className={styles.citySection}>
        <div className={styles.container}>
          <div className={styles.cityIntro}>
            <span>ca. 40 km entfernt</span>

            <h2>Hamburger Speicherstadt & HafenCity</h2>

            <p>
              Das UNESCO-Weltkulturerbe zählt zu den beliebtesten
              Sehenswürdigkeiten Hamburgs und ist bequem mit der S-Bahn in
              weniger als 40 Minuten erreichbar. Historische Backsteingebäude
              treffen hier auf moderne Architektur und echtes Hafenflair.
            </p>
          </div>

          <div className={styles.cityGrid}>
            <article className={styles.cityCard}>
              <img src="/hafen_hamburg.jpg" alt="" />

              <div>
                <h3>Hamburger Hafen</h3>
                <p>Maritimes Flair & Hafenrundfahrten</p>
              </div>
            </article>

            <article className={styles.cityCard}>
              <img src="/speicherstadt_hamburg.jpg" alt="" />

              <div>
                <h3>Speicherstadt</h3>
                <p>UNESCO-Weltkulturerbe aus Backstein</p>
              </div>
            </article>

            <article className={styles.cityCard}>
              <img src="/elbphilharmonie_hamburg.jpg" alt="" />

              <div>
                <h3>Elbphilharmonie</h3>
                <p>Architektur & Panoramablick über Hamburg</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ================= AKTIVITÄTEN ================= */}

      <section className={styles.activitySection}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Natur & Erholung</span>

          <h2>Aktivitäten rund um Horneburg</h2>

          <div className={styles.activityGrid}>
            <div className={styles.activityCard}>
              <Bike size={26} />
              <span>Fahrradtouren durchs Alte Land</span>
            </div>

            <div className={styles.activityCard}>
              <Waves size={26} />
              <span>Spaziergänge an der Elbe</span>
            </div>

            <div className={styles.activityCard}>
              <Apple size={26} />
              <span>Regionale Hofläden</span>
            </div>

            <div className={styles.activityCard}>
              <Coffee size={26} />
              <span>Gemütliche Hofcafés</span>
            </div>

            <div className={styles.activityCard}>
              <Flower2 size={26} />
              <span>Apfelblüte im Frühling</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className={styles.ctaSection}>
        <div className={styles.containerSmall}>
          <span className={styles.eyebrowLight}>
            Zeit für eine kleine Auszeit
          </span>

          <h2>Jetzt Aufenthalt planen</h2>

          <p>
            Entdecken Sie die schönsten Seiten Norddeutschlands zwischen Elbe,
            Obstplantagen und Hansestadt.
          </p>

          <Button href="/buchung" variant="secondary">
            <span>Zur Onlinebuchung</span>

            <ArrowRight size={18} />
          </Button>
        </div>
      </section>
    </main>
  );
}
