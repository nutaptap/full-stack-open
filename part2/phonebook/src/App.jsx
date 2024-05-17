import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setPersons([...persons, { name: newName }]);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          <label htmlFor="name">name: </label>
          <input type="text" id="name" onChange={handleChange} />
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
          <li key={index}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
