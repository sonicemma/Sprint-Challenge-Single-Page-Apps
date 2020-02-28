import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios
      .get(`https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setData(response.data.results);
        //console.log(response.data.results);
      })
  }, []);

  return (
    <div className="character-list">
      {data.map(data => {
        return (
          <CharacterCard 
            id={data.id}
            name={data.name}
            gender={data.gender}
          />
        )
      })}
    </div>
  );
}
