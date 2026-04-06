import styles from "./page.module.css";

export default function Buchung() {

  return (
      <div className={styles.wrapper}>
  <iframe
    src="https://beds24.com/booking2.php?propid=319626&hidefooter=yes&advancedays=2&referer=iframe&showsearch=0"
    className={styles.iframe}
  ></iframe>
</div>)
}