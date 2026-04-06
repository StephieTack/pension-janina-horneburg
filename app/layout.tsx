import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={plusJakarta.className}>
        <header className="header">
          <nav className="nav">
            <a href="/" className="logo">
              <img src="/logo_hell_klein.png" alt="Pension Janina" />
            </a>

            <div className="navLinks">
              <a href="/zimmer">Zimmer</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/buchung" className="navButton">
                Buchung
              </a>
            </div>
          </nav>
        </header>

        <main className="main">{children}</main>
      </body>
    </html>
  );
}