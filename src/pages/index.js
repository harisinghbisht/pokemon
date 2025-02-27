import { useState, useEffect } from "react";
import Link from "next/link";
import SearchBar from "../components/searchbar";

export default function Home() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data.results);
      });
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-blue-200 to-purple-300 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-blue-800 drop-shadow-md">Pokédex</h1>
      <div className="m-auto w-[300px] flex justify-center items-center mb-6">
        <SearchBar setSearch={setSearch} />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-4">
        {filteredPokemon.map((p, index) => (
          <Link key={index} href={`/pokemon/${index + 1}`}>
            <div className="border p-6 rounded-lg shadow-xl bg-white text-center cursor-pointer hover:bg-gradient-to-r from-yellow-300 to-orange-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              <p className="capitalize font-semibold text-lg text-gray-800">{p.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}