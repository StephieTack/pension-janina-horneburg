import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <header className="p-6 bg-blue-600 flex gap-6">
          <a href="/">Start</a>
          <a href="/zimmer">Zimmer</a>
          <a href="/kontakt">Kontakt</a>
          <a href="/buchung">Buchung</a>
        </header>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}