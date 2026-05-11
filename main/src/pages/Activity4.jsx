import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard"; 
import "./Activity4.css";

const Activity4 = () => {
  const [characterList, setCharacterList] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchNarutoCharacters = async () => {
    // Check for internet before trying to fetch
    if (!navigator.onLine) {
      setError("No internet connection. Please check your Wi-Fi.");
      return;
    }

    try {
      // Fetching characters from the API
      const response = await fetch("https://dattebayo-api.onrender.com/characters?limit=1500");
      if (!response.ok) throw new Error("Network response was not ok");
      
      const result = await response.json();
      setCharacterList(result.characters || []);
      setError(null);
    } catch (err) {
      setError("Failed to fetch characters. The server might be down.");
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    fetchNarutoCharacters();
    
    // Listen for connection changes
    const handleOffline = () => setError("You are now offline.");
    const handleOnline = () => {
      setError(null);
      fetchNarutoCharacters();
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  // Filter list based on search input
  const filtered = characterList.filter((char) =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="container">
      <h1 className="headerTitle">NARUTO SHINOBI 🌀</h1>
      
      <input
        type="text"
        placeholder="Search for a ninja..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      {/* Show error if offline or API fails */}
      {error && <div className="error-popup">{error}</div>}

      <section className="gallery">
        {filtered.length > 0 ? (
          filtered.map((data) => (
            <CharacterCard key={data.id} character={data} />
          ))
        ) : (
          !error && <p className="loading-text">Summoning Shinobi...</p>
        )}
      </section>
    </main>
  );
};

export default Activity4;