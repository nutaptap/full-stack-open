export default function Country({ country }) {
  console.log(country);
  const languages = Object.values(country.languages);
  return (
    <article>
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
        <h3>Languages</h3>
        <ul>
          {languages.map((language) => {
            return <li key={language}>{language}</li>;
          })}
        </ul>
      </section>
      <section>
        <img src={country.flags.png} alt={country.flags.alt} />
      </section>
    </article>
  );
}
