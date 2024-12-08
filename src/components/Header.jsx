import React, { useState } from "react";
import axios from "axios";

function Header({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const response = await axios.get("https://2tvzmld7-3002.asse.devtunnels.ms/search", {
        params: { title: searchQuery },
      });
      onSearch(response.data); // Send the search results to the parent
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  return (
    <header
      className="bg-light text-dark d-flex align-items-center"
      style={{ height: "175px", backgroundColor: "#add8e6" }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h6 m-0">My Header Bar</h1>

        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control rounded-pill me-2"
            placeholder="Search"
            style={{ width: "850px" }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-circle"
            onClick={handleSearch}
          >
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
