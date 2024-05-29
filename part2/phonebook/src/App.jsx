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
    if (!duplicated) {
      addPerson();
    } else if (
      window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      console.log("accepted");
      updatePerson(duplicated.id);
    }
  }

  function findNameDuplicates() {
    return persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );
  }

  function updatePerson(id) {
    const newObject = {
      name: newName,
      number: newNumber,
      id: id,
    };
    personsService
      .put(id, newObject)
      .then((response) => {
        console.log(response);
        return personsService.getAll();
      })
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.log("There was an error updating the person", error);
      });
  }

  function handleFilter(e) {
    setFilter(e.target.value.toLowerCase());
  }

  function handleDelete(e) {
    const id = String(e.target.getAttribute("data-id"));
    if (window.confirm("Are you sure you want to delete this person?")) {
      personsService
        .deleteId(id)
        .then((response) => {
          console.log(response);
          return personsService.getAll();
        })
        .then((response) => {
          setPersons(response.data);
        })
        .catch((error) => {
          console.error("There was an error deleting the person:", error);
        });
    }
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
          <Numbers
            persons={persons}
            filter={filter}
            handleDelete={handleDelete}
          />
        </div>
      ) : (
        <div>loading</div>
      )}
    </main>
  );
};

export default App;
