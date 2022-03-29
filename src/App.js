import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import RepoList from "./Components/RepoList/RepoList";
import SearchBar from "./Components/SearchBar/SearchBar";
import { UserData } from "./context/userDataContext";

function App() {
  const [data, setData] = useState([]);
  const [searchRepo, setSearchRepo] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [username, setUsername] = useState("Ayetone");
  const [showUserSearch, setShowUserSearch] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <UserData.Provider
      value={{
        data,
        setData,
        searchRepo,
        setSearchRepo,
        isMounted,
        setIsMounted,
        showUserSearch,
        setShowUserSearch,
      }}
    >
      <div className="container">
        <div className="title">
          <h1>Github Showcase</h1>
        </div>
        <SearchBar />
        {isMounted ? (
          <RepoList username={username} />
        ) : (
          <Card uesrname={username} />
        )}
      </div>
    </UserData.Provider>
  );
}

export default App;
