"use client";

import { useEffect } from "react";
import styles from "./BookingWidget.module.css";

export default function BookingWidget() {
  useEffect(() => {
    let timeoutId;

    function initEasybooking() {
      if (
        !window.jQuery ||
        !window.jQuery.fn ||
        !window.jQuery.fn.ebFrontEnd
      ) {
        timeoutId = setTimeout(initEasybooking, 100);
        return;
      }

      // Bereits initialisiert?
      if (window.jQuery("#ebFrontEndFrame").children().length > 0) {
        return;
      }

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
    }

    initEasybooking();

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div id="ebFrontEndFrame" suppressHydrationWarning />
    </section>
  );
}