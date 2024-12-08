import React, { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <Header onSearch={setSearchResults} />
      <Main results={searchResults} />
    </div>
  );
}

export default App;
