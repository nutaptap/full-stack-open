import { useState } from "react";
import Search from "./Search";
import axios from "axios";
import Countries from "./Countries";
import Country from "./Country";

function App() {
  //"4ac0db577dcd1464b28232be4b9ad3d3"
  const apiKey = import.meta.env.VITE_API_KEY;
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(undefined);
  const [query, setQuery] = useState("");

  function fetchWeather(results) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${results[0].name.common.toLowerCase()}&appid=${apiKey}&units=metric`;
    return axios.get(url).then((response) => response.data);
  }

  function fetchAll() {
    const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
    return axios.get(url).then((response) => response.data);
  }

  function handleQuery(e) {
    const newQuery = e.target.value.toLowerCase();
    setQuery(newQuery);
  }

  function handleSearch(e) {
    e.preventDefault();
    setWeather(undefined);
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
        fetchWeather(results).then((data) => {
          setWeather(data);
          console.log(data);
        });
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
        countries.length == 1 && (
          <Country country={countries[0]} weather={weather} />
        )
      )}
    </main>
  );
}

export default App;
