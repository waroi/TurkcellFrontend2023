import "./App.css";
import Infos from "./components/Infos/Infos";
import LastSearches from "./components/LastSearches/LastSearches";
import Repos from "./components/Repos/Repos";
import Search from "./components/Search/Search";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Search setUser={setUser} />
      {user && <Infos user={user} />}
      {user && <LastSearches />}
    </>
  );
}

export default App;
