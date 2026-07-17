"use client";

import { useEffect, useRef } from "react";
import styles from "./BookingWidget.module.css";

export default function BookingWidget() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const script = document.createElement("script");

    script.src =
      "https://www.easy-booking.at/bookingengine2/js/jquery.easybooking.frontend.js";

    script.async = true;

    script.onload = () => {
      const check = () => {
        if (
          window.jQuery &&
          window.jQuery.fn.ebFrontEnd
        ) {
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
        } else {
          setTimeout(check, 200);
        }
      };

      check();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <div id="ebFrontEndFrame" suppressHydrationWarning />
    </section>
  );
}