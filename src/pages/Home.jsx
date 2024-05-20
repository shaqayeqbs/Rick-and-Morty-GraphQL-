import React from "react";
import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";
import HeroSection from "../components/hero-section";
function CharactersList() {
  const { error, data, loading } = useCharacters();

  if (loading) return <div>Loading ....</div>;

  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <HeroSection />
      <div className="CharacterList py-10">
        {data.characters.results.map((character) => (
          <Link
            to={character?.id}
            key={character.id}
            className="CharacterCard bg-slate-700 p-3 text-white rounded-md"
          >
            <img src={character.image} alt={character.name} />
            <h2 className=" my-3">{character.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CharactersList;
