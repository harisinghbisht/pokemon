
export async function getStaticPaths() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
  const data = await res.json();

  const paths = data.results.map((_, index) => ({
    params: { id: (index + 1).toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const pokemon = await res.json();

  return { props: { pokemon } };
}


export default function PokemonDetail({ pokemon }) {
  return (
    <div className="mx-auto p-4 mt-[120px] text-center m-auto w-1/6 border-2 bg-gradient-to-r from-blue-200 to-purple-300 h-auto border-white">
      <h1>POKEMON Details</h1>
      <h1 className="text-3xl font-bold capitalize">{pokemon.name}</h1>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-auto w-1/2"
      />
      <p className="mt-2">Type: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p>Abilities: {pokemon.abilities.map((a) => a.ability.name).join(", ")}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
    </div>
  );
}