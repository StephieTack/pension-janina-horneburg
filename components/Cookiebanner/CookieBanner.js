"use client";

import { useEffect, useState } from "react";
import styles from "./CookieBanner.module.css";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  function declineCookies() {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Diese Website verwendet Cookies, um die Benutzererfahrung zu verbessern.
      </p>
      <div className={styles.buttons}>
        <button onClick={acceptCookies}>Akzeptieren</button>
        <button onClick={declineCookies}>Ablehnen</button>
      </div>
    </div>
  );
}