import { useState } from "react";
import Search from "./Search";
import axios from "axios";
import Countries from "./Countries";
import Country from "./Country";

function fetchAll() {
  const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
  return axios.get(url).then((response) => response.data);
}

function App() {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  function handleQuery(e) {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (query !== "") {
      fetchAll().then((data) => {
        let results = [];
        for (let i = 0; i < data.length; i++) {
          if (results.length >= 10) {
            break;
          }
          if (data[i].name.common.toLowerCase().includes(query.toLowerCase())) {
            results.push(data[i]);
          }
        }
        setCountries(results);
      });
    }
  }

  function handleShowCountry(e) {
    e.preventDefault();
    const country = countries[e.target.getAttribute("data-index")];
    setCountries([country]);
  }

  return (
    <main>
      <h1>Countries</h1>
      <Search handleQuery={handleQuery} handleSearch={handleSearch} />
      {countries.length > 1 ? (
        <Countries
          countries={countries}
          handleShowCountry={handleShowCountry}
        />
      ) : (
        countries.length == 1 && <Country country={countries[0]} />
      )}
    </main>
  );
}

export default App;
