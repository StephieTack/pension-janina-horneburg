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
            <a href="/">Start</a>
            <a href="/zimmer">Zimmer</a>
            <a href="/kontakt">Kontakt</a>
            <a href="/buchung">Buchung</a>
          </nav>
        </header>

        <main className="main">{children}</main>
      </body>
    </html>
  );
}