import { useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Numbers from "./Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState(undefined);

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

  function handleFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }

  return (
    <main>
      <h1>Phonebook</h1>
      <Filter handleFilter={handleFilter} />
      <Form
        handleName={handleName}
        handleNumber={handleNumber}
        handleClick={handleClick}
      />
      <Numbers persons={persons} filter={filter} />
    </main>
  );
};

export default App;
