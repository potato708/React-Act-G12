import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./Activity3.css";

const Activity3 = () => {
  const [characterList, setCharacterList] = useState([]);
  const [search, setSearch] = useState("");

  const fetchNarutoCharacters = async () => {
    try {
      // Fetching with a high limit to get all characters
      const response = await fetch("https://dattebayo-api.onrender.com/characters?limit=1500");
      if (!response.ok) throw new Error("Network response was not ok");
      
      const result = await response.json();
      setCharacterList(result.characters || []);
    } catch (error) {
      console.error("Error fetching characters:", error);
    }
  };

  useEffect(() => {
    fetchNarutoCharacters();
  }, []);

  const filtered = characterList.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="headerTitle">Naruto Characters 🌀</h1>
      
      <input
        type="text"
        placeholder="Search ninja..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <section className="gallery">
        {filtered.length > 0 ? (
          filtered.map((data) => (
            <CharacterCard key={data.id} character={data} />
          ))
        ) : (
          <p className="loading-text">Summoning Shinobi...</p>
        )}
      </section>
    </main>
  );
};

export default Activity3;