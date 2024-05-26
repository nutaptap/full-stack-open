export default function Numbers({ persons, filter }) {
  return (
    <section>
      <h2>Numbers</h2>
      <ul>
        {persons
          .filter((person) => person.name.toLowerCase().includes(filter))
          .map((person, index) => (
            <li key={index}>{`${person.name} · ${person.number}`}</li>
          ))}
      </ul>
    </section>
  );
}
