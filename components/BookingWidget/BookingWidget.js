"use client";

import { useEffect, useState } from "react";
import styles from "./BookingWidget.module.css";

export default function BookingWidget() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("BookingWidget gemountet");

    function initEasybooking() {
      console.log("Prüfe Easybooking...");

      if (
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.ebFrontEnd
      ) {
        console.log("Easybooking noch nicht verfügbar...");
        setTimeout(initEasybooking, 100);
        return;
      }

      console.log("Easybooking verfügbar");
      console.log("Starte ebFrontEnd()");

      try {
        window.jQuery("#ebFrontEndFrame").ebFrontEnd({
          customerId: 11842,
          serialNo: "5482-6486-5985",
          localeId: 2,
          frameId: "ebFrontEndPlugin",
          scrollOffset: 0,
          adultOnly: false,
          gtmDL: "dataLayer",
          hideFilters: "on",
          disableScroll: true,
          source: "",
          collapsedExtras: false,
        });

        console.log("ebFrontEnd() wurde aufgerufen");

        // Spinner noch kurz anzeigen
        setTimeout(() => {
          console.log("Ladeanimation beendet");
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Fehler beim Initialisieren:", error);
      }
    }

    const src =
      "https://www.easy-booking.at/bookingengine2/js/jquery.easybooking.frontend.js";

    const existingScript = document.querySelector(
      `script[src="${src}"]`
    );

    if (existingScript) {
      console.log("Script bereits vorhanden");
      initEasybooking();
      return;
    }

    console.log("Script wird geladen");

    const script = document.createElement("script");
    script.src = src;
    script.async = true;

    script.onload = () => {
      console.log("Script geladen");
      initEasybooking();
    };

    script.onerror = () => {
      console.error("Easybooking Script konnte nicht geladen werden");
    };

    document.body.appendChild(script);

    return () => {
      console.log("BookingWidget unmounted");
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      {loading && (
        <div className={styles.loader}>
          <div className={styles.spinner}></div>
          <p>Buchungssystem wird geladen...</p>
        </div>
      )}

      <div
        id="ebFrontEndFrame"
        suppressHydrationWarning
        style={{
          display: loading ? "none" : "block",
        }}
      />
    </section>
  );
}