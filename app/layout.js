"use client";

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import Footer from "../components/Footer/Footer";
import CookieBanner from "../components/Cookiebanner/CookieBanner";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({children}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="de">
      <body className={plusJakarta.className}>
        <header className="header">
          <nav className="nav">
            {/* LOGO */}
            <a href="/" className="logo">
              <img src="/logo_hell_klein.png" alt="Pension Janina Logo" />
            </a>

            {/* DESKTOP NAV */}
            <div className="navLinks">
              <a href="/zimmer">Zimmer</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/buchung" className="primaryButton">
                Onlinebuchung
              </a>
            </div>

            {/* BURGER */}
            <button
              className={`burger ${open ? "open" : ""}`}
              onClick={() => setOpen(!open)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>

          {/* MOBILE MENU */}
          <div className={`mobileMenu ${open ? "show" : ""}`}>
  
  {/* 🔥 NEU: Logo im Mobile Menu */}
  <a href="/" className="mobileLogo" onClick={() => setOpen(false)}>
    <img src="/logo_hell_klein.png" alt="Pension Janina Logo" />
  </a>

  <a href="/zimmer" onClick={() => setOpen(false)}>
    Zimmer
  </a>
  <a href="/kontakt" onClick={() => setOpen(false)}>
    Kontakt
  </a>
  <a href="/buchung" className="navButton" onClick={() => setOpen(false)}>
    Onlinebuchung
  </a>

</div>
        </header>

        <main className="main">{children}</main>
        <Footer/>
        <CookieBanner/>
      </body>
    </html>
  );
}