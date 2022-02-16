import React, { useState } from "react";

const Search = ({ search }) => {
  return (
    <div className="search">
      <input type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
