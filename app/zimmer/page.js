// import { Check } from "lucide-react";
// import styles from "./page.module.css";
// import Button from "../../components/Button/Button";

// export default function ZimmerPage() {
//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Unsere Unterkünfte</h1>

//       <p className={styles.intro}>
//         Ob gemütliches Ferienzimmer oder großzügige Ferienwohnung – bei uns
//         finden Sie die passende Unterkunft für Ihren Aufenthalt in Horneburg.
//       </p>

//       {/* 🏡 Ferienzimmer */}
//       <section className={styles.card}>
//         <div className={styles.imageWrapper}>
//           <img
//             src="../ferienzimmer2.jpg"
//             alt="Ferienzimmer"
//             className={styles.image}
//           />
//         </div>

//         <div className={styles.content}>
//           <h2>Ferienzimmer</h2>
//           <p>
//             Unsere liebevoll eingerichteten Ferienzimmer bieten Ihnen alles, was
//             Sie für einen angenehmen Aufenthalt benötigen. Perfekt für
//             Kurzreisen, Geschäftsreisende oder Wochenendgäste.
//           </p>

//           <ul className={styles.list}>
//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Komfortables Bett
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Eigenes Badezimmer
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               WLAN inklusive
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Ruhige Lage
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               mind. xx m²
//             </li>
//           </ul>

//           <Button href="/buchung" variant="primary">
//             <span>Zimmer buchen</span>
//           </Button>
//         </div>
//       </section>

//       {/* 🏡 Ferienwohnung */}
//       <section className={styles.cardReverse}>
//         <div className={styles.imageWrapper}>
//           <img
//             src="../ferienwohnung.png"
//             alt="Ferienwohnung"
//             className={styles.image}
//           />
//         </div>

//         <div className={styles.content}>
//           <h2>Ferienwohnung</h2>
//           <p>
//             Unsere großzügige Ferienwohnung bietet Ihnen maximalen Komfort und
//             viel Platz für einen längeren Aufenthalt – ideal für Familien oder
//             kleine Gruppen.
//           </p>

//                     <ul className={styles.list}>
//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Voll ausgestattete Küche
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Separater Wohnbereich
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               WLAN inklusive
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Mehrere Schlafmöglichkeiten
//             </li>

//             <li className={styles.featureItem}>
//               <Check className={styles.icon} />
//               Perfekt für längere Aufenthalte
//             </li>
//           </ul>

//           <Button href="/buchung" variant="primary">
//             <span>Zimmer buchen</span>
//           </Button>
//         </div>
//       </section>
//     </div>
//   );
// }

import { Check } from "lucide-react";
import styles from "./page.module.css";
import Button from "../../components/Button/Button";

export default function ZimmerPage() {
  return (
    <main>

      {/* HERO MINI */}
      <section className={styles.heroSmall}>
        <h1>Unsere Unterkünfte</h1>
        <p>
          Ob gemütliches Zimmer oder großzügige Wohnung – finden Sie Ihren perfekten Rückzugsort.
        </p>
      </section>

      {/* ================= FERIENZIMMER ================= */}
      <section className={styles.section}>
        <div className={styles.container}>

          <h2>Ferienzimmer</h2>

          {/* 🖼️ Galerie */}
          <div className={styles.gallery}>
            <img src="/ferienzimmer1.jpg" />
            <img src="/ferienzimmer2.jpg" />
            <img src="/ferienzimmer3.png" />
          </div>

          {/* Text */}
          <div className={styles.textBlock}>
            <p>
              Unsere liebevoll eingerichteten Ferienzimmer bieten Ihnen alles,
              was Sie für einen entspannten Aufenthalt benötigen.
            </p>

            <ul className={styles.list}>
              <li><Check /> Komfortables Bett</li>
              <li><Check /> Eigenes Badezimmer</li>
              <li><Check /> WLAN inklusive</li>
              <li><Check /> Ruhige Lage</li>
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

          <h2>Ferienwohnung</h2>

          <div className={styles.gallery}>
            <img src="/ferienwohnung1.png" />
            <img src="/ferienwohnung2.png" />
            <img src="/ferienwohnung3.png" />
          </div>

          <div className={styles.textBlock}>
            <p>
              Unsere großzügige Ferienwohnung bietet maximalen Komfort und viel Platz.
            </p>

            <ul className={styles.list}>
              <li><Check /> Voll ausgestattete Küche</li>
              <li><Check /> Separater Wohnbereich</li>
              <li><Check /> WLAN inklusive</li>
              <li><Check /> Ideal für Familien</li>
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