"use client";

import { useState } from "react";
import Button from "../Button/Button";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        {/* LOGO */}
        <Link href="/" className="logo">
          <img src="/logo_hell_klein.png" alt="Pension Janina Logo" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="navLinks">
          <Link href="/zimmer" className="navLink">
            Zimmer & Preise
          </Link>

          <Link href="/galerie" className="navLink">
            Bildergalerie
          </Link>

          <Link href="/infos" className="navLink">
            Wissenswertes
          </Link>

          <Link href="/umgebung" className="navLink">
            Umgebung
          </Link>

          <Link href="/kontakt" className="navLink">
            Kontakt
          </Link>

          <Button href="/buchung" variant="secondary">
            <span>Buchung</span>
          </Button>
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
        <Link href="/" className="mobileLogo" onClick={() => setOpen(false)}>
          <img src="/logo_hell_klein.png" alt="Pension Janina Logo" />
        </Link>

        <Link href="/zimmer" onClick={() => setOpen(false)}>
          Zimmer & Preise
        </Link>

        <Link href="/galerie" onClick={() => setOpen(false)}>
          Bildergalerie
        </Link>

        <Link href="/infos" onClick={() => setOpen(false)}>
          Wissenswertes
        </Link>

        <Link href="/umgebung" onClick={() => setOpen(false)}>
          Umgebung
        </Link>

        <Link href="/kontakt" onClick={() => setOpen(false)}>
          Kontakt
        </Link>

        <Link href="/buchung" onClick={() => setOpen(false)}>
          Buchung
        </Link>
      </div>
    </>
  );
}
