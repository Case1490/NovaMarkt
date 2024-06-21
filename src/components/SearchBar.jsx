import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={query}
      onChange={handleInputChange}
      placeholder="Buscar Productos..."
      className="input_search p-2 outline-0 rounded-xl w-full dark:text-black"
    />
  );
};

export default SearchBar;
