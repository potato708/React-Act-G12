import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import "./Activity3.css";

const Activity3 = () => {
  const [characterList, setCharacterList] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNarutoCharacters = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://dattebayo-api.onrender.com/characters?limit=1500"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const result = await response.json();
      setCharacterList(result.characters || []);
    } catch (err) {
      console.error("Error fetching characters:", err);
      setError("⚠️ No internet connection or failed to load data.");
    } finally {
      setLoading(false);
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
        {error ? (
          <p className="error-text">{error}</p>
        ) : loading ? (
          <p className="loading-text">Summoning Shinobi...</p>
        ) : filtered.length > 0 ? (
          filtered.map((data) => (
            <CharacterCard
              key={data.id || data.name}
              character={data}
            />
          ))
        ) : (
          <p className="loading-text">No ninja found 🥷</p>
        )}
      </section>
    </main>
  );
};

export default Activity3;