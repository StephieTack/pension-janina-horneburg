import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero({
  title,
  subtitle,
  image,
  height = "full",
  showScroll = false,
  scrollTarget = "#next",
  logo,
  children,
}) {
  return (
    <section
      className={`${styles.hero} ${height === "medium" ? styles.medium : ""}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* CONTENT */}
      <div className={styles.content}>
        {logo ? (
          <img src={logo} alt="Logo" className={styles.logo} />
        ) : (
          <h1>{title}</h1>
        )}

        {subtitle && <p>{subtitle}</p>}

        {children}
      </div>

      {/* 🔥 SCROLL INDICATOR (RAUS AUS CONTENT!) */}
      {showScroll && (
        <Link href={scrollTarget} className={styles.scrollIndicator}>
          <span></span>
        </Link>
      )}
    </section>
  );
}
