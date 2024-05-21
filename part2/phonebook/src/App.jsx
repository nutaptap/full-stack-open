import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "39-44-5323523" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  function handleName(e) {
    setNewName(e.target.value);
  }

  function handleNumber(e) {
    setNewNumber(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const duplicated = findNameDuplicates();
    console.log(duplicated);
    if (!duplicated) {
      setPersons([...persons, { name: newName, number: newNumber }]);
    } else {
      window.alert(`The name ${newName} already exists!`);
    }
  }

  function findNameDuplicates() {
    return persons.some((person) => person.name === newName);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label htmlFor="name">name: </label>
          <input type="text" id="name" onChange={handleName} />
          <input type="text" id="number" onChange={handleNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleClick}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, index) => (
          <li key={index}>{`${person.name} · ${person.number}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
