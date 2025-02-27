export default function SearchBar({ setSearch }) {
    return (
      <input
        type="text"
        placeholder="Search Pokémon..."
        className="border w-full p-8 text-center h-[40px] pl-2 rounded-medium"
        onChange={(e) => setSearch(e.target.value)}
      />
    );
  }