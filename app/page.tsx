export default function Home() {
  return (
    <main>
      {/* Hero mit Bild */}
      <section
        className="h-[80vh] flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage: "url('/pension-janina.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">
          Pension Janina Horneburg
        </h1>
        <p className="text-xl mb-6 drop-shadow-md">
          Erholung in gemütlicher Atmosphäre
        </p>
        <a
          href="/buchung"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg"
        >
          Jetzt anfragen
        </a>
      </section>

      {/* Info */}
      <section className="p-10 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">
          Unsere Unterkunft
        </h2>
        <p>
          Wir bieten komfortable Zimmer und Ferienwohnungen
          für Ihren Aufenthalt in Horneburg.
        </p>
      </section>
    </main>
  );
}