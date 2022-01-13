import React, { useState, useEffect } from "react";

import "./App.css";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      setMonsters(users);
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonster = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder="search monster"
        handleChange={handleChange}
        value={searchField}
      />
      <CardList monsters={filteredMonster} />
    </div>
  );
};

export default App;
