import React, { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search({ onSearch }) {
  const [name, setName] = useState("");
  const [GetLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: { name },
    }
  );

  const handleSearchChange = (e) => {
    setName(e.target.value);
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  return (
    <div className="flex flex-col md:max-w-[70%] mx-auto !pt-10 p-4">
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search characters"
          value={name}
          onChange={handleSearchChange}
          className="flex-grow p-2 border rounded border-gray-300"
        />
        <button
          onClick={() => GetLocations()}
          disabled={loading}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-300"
        >
          Search
        </button>
      </div>
      {loading && <div className="text-white mt-20 italic">Loading...</div>}
      {error && (
        <div className="text-red-500 font-bold">Error: {error.message}</div>
      )}
      {called && !loading && !error && (
        <ul className="list-none  mt-4">
          {data?.characters.results.map((result, index) => (
            <li
              key={index}
              className="bg-[#2d3459] text-white p-2 mt-1 rounded"
            >
              {result.location.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
