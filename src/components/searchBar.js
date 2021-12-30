import React from "react";
import { useState } from "react";

export function SearchBar(props) {
  let [search, updateSearch] = useState("");
  const handleChange = (e) => {
    search = e.target.value;
    console.log(search);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleChange}
        size={90}
        style={{ lineHeight: "20px" }}
      />
      <input type="submit" value="submit" style={{ marginLeft: "20px" }} />
    </div>
  );
}
