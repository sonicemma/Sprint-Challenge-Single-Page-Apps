import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      Axios.get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`).then(response => {
        const character = response.data.results.filter(char =>
          char.name.toLowerCase().includes(search.toLowerCase())
        );
  
        setData(character);
      });
    }, [search]);
    const handleInputChange = e => {
      setSearch(e.target.value);
    };

  return (
    <section className="search-form">
      <div>
        <form>
          <input 
            id="name"
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleInputChange}
          />
        </form>
        {data.map(prop => {
        return (
          <CharacterCard
            key={prop.id}
            name={prop.name}
            gender={prop.gender}
          />
        );
      })}
      </div>
    </section>
  );
}
