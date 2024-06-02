export default function Countries({ countries, handleShowCountry }) {
  console.log(countries);
  return (
    <section style={{ marginTop: "2rem" }}>
      {countries.map((country, index) => {
        return (
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <h2 key={country.name.common}>{country.name.common}</h2>
            <button
              data-index={index}
              onClick={handleShowCountry}
              style={{ height: "1.5rem" }}
            >
              show
            </button>
          </div>
        );
      })}
    </section>
  );
}
