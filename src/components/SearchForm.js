import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function SearchForm(props) {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
  
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
        {data.map(character => {
        return (
          <CharacterCard
            key={character.id}
            name={character.name}
            gender={character.gender}
          />
        );
      })}
      </div>
    </section>
  );
}
