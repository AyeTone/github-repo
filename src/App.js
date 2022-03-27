import Card from "./Components/Card/Card";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <div className="container">
      <div className="title">
        <h1>Github Showcase</h1>
      </div>
      <SearchBar />
      <Card />
    </div>
  );
}

export default App;
