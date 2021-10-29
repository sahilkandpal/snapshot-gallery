import React, { useRef } from "react";
import SearchIcon from "@heroicons/react/solid/SearchIcon";
import { useImageContext } from "../../context/imageContext";

const SearchBar = () => {
  const queryRef = useRef();
  const { fetchData } = useImageContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const queryRefValue = queryRef.current.value.trim();
    if (queryRefValue !== "") fetchData(queryRefValue);
  };

  return (
    <form
      className="searchbar flex md:w-full w-[90%] mx-auto rounded-md bg-white"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="search"
        placeholder="Search for photos"
        autoComplete="off"
        className="px-3 md:px-5 py-5 flex-1 rounded-l-md outline-none"
        ref={queryRef}
      />
      <button type="submit" className="px-4 bg-white rounded-r-md">
        <SearchIcon className="h-6 w6 text-gray-500" />
      </button>
    </form>
  );
};

export default SearchBar;
