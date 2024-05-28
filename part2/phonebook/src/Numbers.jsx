export default function Numbers({ persons, filter, handleDelete }) {
  return (
    <section>
      <h2>Numbers</h2>
      <div>
        {persons
          .filter((person) => person.name.toLowerCase().includes(filter))
          .map((person) => (
            <div key={person.id}>
              <div>{`${person.name} · ${person.number}`} </div>
              <button data-id={person.id} onClick={handleDelete}>
                delete
              </button>
            </div>
          ))}
      </div>
    </section>
  );
}
