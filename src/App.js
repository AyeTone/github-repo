import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import RepoList from "./Components/RepoList/RepoList";
import SearchBar from "./Components/SearchBar/SearchBar";
import { UserData } from "./context/userDataContext";

function App() {
  const [data, setData] = useState([]);
  const [searchRepo, setSearchRepo] = useState("");
  const [username, setUsername] = useState("Ayetone");
  const [repoSearchMounted, setRepoSearchMounted] = useState(false);
  const [userSearchMounted, setUserSearchMounted] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [username]);

  return (
    <UserData.Provider
      value={{
        data,
        setData,
        searchRepo,
        setSearchRepo,
        username,
        setUsername,
        repoSearchMounted,
        setRepoSearchMounted,
        userSearchMounted,
        setUserSearchMounted,
      }}
    >
      <div className="container">
        <div className="title">
          <h1>Github Showcase</h1>
        </div>
        <SearchBar />
        {repoSearchMounted ? (
          <RepoList username={username} />
        ) : (
          <Card uesrname={username} />
        )}
      </div>
    </UserData.Provider>
  );
}

export default App;
