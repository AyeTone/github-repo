import { useState } from "react";
import Card from "./Components/Card/Card";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <div className="title">
        <h1>Github Showcase</h1>
      </div>
      <SearchBar search={search} setSearch={setSearch} />
      {!search && <Card />}
    </div>
  );
}

export default App;
