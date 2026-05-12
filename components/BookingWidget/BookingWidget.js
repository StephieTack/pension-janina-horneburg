"use client";

import { useEffect } from "react";

export default function BookingWidget() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.easy-booking.at/bookingengine2/js/jquery.easybooking.frontend.js";

    script.async = true;

    script.onload = () => {
      function ebFrontendLoadedCheck() {
        if (typeof window.jQuery !== "undefined") {
          if (window.jQuery.fn.ebFrontEnd) {
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
            setTimeout(ebFrontendLoadedCheck, 200);
          }
        } else {
          setTimeout(ebFrontendLoadedCheck, 200);
        }
      }

      ebFrontendLoadedCheck();
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="ebFrontEndFrame"></div>;
}