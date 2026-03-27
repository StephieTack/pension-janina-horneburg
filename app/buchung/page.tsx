export default function Buchung() {

  return (
    <div className="p-10">
      {/* <h1 className="text-3xl font-bold mb-6">
        Pension Janina
      </h1> */}

      {/* <div className="w-full h-[2000px] overflow-hidden rounded-xl">
        <iframe
          src="https://beds24.com/booking2.php?propid=319626&hidefooter=yes&showsearch=0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          scrolling="no"
        ></iframe>
      </div> */}
      <div className="w-full h-[2000px] overflow-hidden">
  <iframe
    src="https://beds24.com/booking2.php?propid=319626&hidefooter=yes&advancedays=2&referer=iframe&showsearch=0"
    className="w-full h-full"
    style={{ border: "none" }}
  ></iframe>
</div>
    </div>
  );
}