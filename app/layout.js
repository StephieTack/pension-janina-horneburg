import Script from "next/script";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Pension Janina",
  description: "Zimmer und Unterkünfte in Horneburg",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" data-scroll-behavior="smooth">
      <body className={plusJakarta.className}>
        <Script
          src="https://www.easy-booking.at/bookingengine2/js/jquery.easybooking.frontend.js"
          strategy="afterInteractive"
        />

        <header className="header">
          <Navigation />
        </header>

        <main className="main">{children}</main>

        <Footer />
      </body>
    </html>
  );
}