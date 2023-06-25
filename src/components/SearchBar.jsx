import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchComponent() {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to the search results page with the search string as a query parameter
    navigate(`/search?search=${searchString}`);
  };

  return (
    <div className="flex items-center">
      <div className="flex rounded">
        <input  
          
          onChange={(e) => setSearchString(e.target.value)}
          type="text"
          className="pl-3 rounded-s-xl focus:bg-white bg-[#333] focus:outline-none focus:text-black"
          placeholder="Search..."
        />
        <button
          className="px-4 text-white bg-[#333] border-l rounded-e-xl"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}
