"use client";

import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="de">
      <body className={plusJakarta.className}>
        <header className="header">
          <nav className="nav">
            {/* LOGO */}
            <a href="/" className="logo">
              <img src="/logo_hell_klein.png" alt="Pension Janina" />
            </a>

            {/* DESKTOP NAV */}
            <div className="navLinks">
              <a href="/zimmer">Zimmer</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/buchung" className="navButton">
                Buchung
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
    <img src="/logo_hell_klein.png" alt="Pension Janina" />
  </a>

  <a href="/zimmer" onClick={() => setOpen(false)}>
    Zimmer
  </a>
  <a href="/kontakt" onClick={() => setOpen(false)}>
    Kontakt
  </a>
  <a href="/buchung" className="navButton" onClick={() => setOpen(false)}>
    Buchung
  </a>

</div>
        </header>

        <main className="main">{children}</main>
      </body>
    </html>
  );
}