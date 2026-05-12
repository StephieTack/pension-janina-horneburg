import styles from "./LegalLayout.module.css";

export default function LegalLayout({ title, children }) {
  return (
    <main className={styles.container}>
      <h1>{title}</h1>
      <div className={styles.divider}></div>
      {children}
    </main>
  );
}
