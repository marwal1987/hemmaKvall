import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm); // Anropa onSearch-funktionen från props
    }
  };

  return (
    <div className="flex p-6 justify-center items-center gap-6">
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Sök efter filmtitel..."
        aria-label="Sökfält"
        className="border p-2 w-fit"
      />
      <button
        onClick={handleSearch}
        disabled={!searchTerm.trim()} // Inaktivera om ingen sökterm finns
        className={`bg-gray-800 text-white px-4 py-2 border-2 border-gray-light 
        hover:border-gray-dark hover:bg-gray-light hover:text-gray-dark 
        text-gray-light bg-gray-dark rounded-md ${
          !searchTerm.trim() ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Sök
      </button>
    </div>
  );
};

export default SearchBar;
