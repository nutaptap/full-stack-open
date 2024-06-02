export default function Country({ country, weather }) {
  const languages = Object.values(country.languages);
  return (
    <article
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      <h2>{country.name.common}</h2>
      <section>
        <div>
          <b>Capital: </b>
          <span>{country.capital[0]}</span>
        </div>
        <div>
          <b>Area: </b>
          <span>{country.area}</span>
        </div>
      </section>
      <section>
        <h3>Languages:</h3>
        <ul>
          {languages.map((language) => {
            return <li key={language}>{language}</li>;
          })}
        </ul>
      </section>
      <section>
        <img
          style={{ width: "200px" }}
          src={country.flags.png}
          alt={country.flags.alt}
        />
      </section>
      <section>
        <h3>Weather in {country.name.common}:</h3>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          <div>
            <b>Temperature:</b> {weather?.main.temp} Celcius
          </div>
          {weather && (
            <img
              style={{ width: "150px" }}
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={country.flags.alt}
            />
          )}
          <div>
            <b>Wind:</b> {weather?.wind.speed} m/s
          </div>
        </div>
      </section>
    </article>
  );
}
