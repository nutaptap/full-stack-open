import { useEffect, useState } from "react";
import Filter from "./Filter";
import Form from "./Form";
import Numbers from "./Numbers";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    personsService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  function handleName(e) {
    setNewName(e.target.value);
  }

  function handleNumber(e) {
    setNewNumber(e.target.value);
  }

  function addPerson() {
    const personObject = {
      name: newName,
      number: newNumber,
    };
    personsService.create(personObject).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
      setNewNumber("");
    });
  }

  function handleClick(e) {
    e.preventDefault();
    const duplicated = findNameDuplicates();
    console.log(duplicated);
    if (!duplicated) {
      /* setPersons([...persons, { name: newName, number: newNumber }]); */
      addPerson();
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
      {persons.length > 0 ? (
        <div>
          <Filter handleFilter={handleFilter} />
          <Form
            handleName={handleName}
            handleNumber={handleNumber}
            handleClick={handleClick}
          />
          <Numbers persons={persons} filter={filter} />
        </div>
      ) : (
        <div>loading</div>
      )}
    </main>
  );
};

export default App;
