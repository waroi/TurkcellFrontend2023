// import { useState } from 'react'
import UserList from "./components/UserList/UserList";

import "./App.css";
import UserSearch from "./components/UserSearch/UserSearch";
import { useState } from "react";

function App() {
	const [renderCheck, setRenderCheck] = useState(false);
	const [activeUser, setActiveUser] = useState();
	const [userRepos, setUserRepos] = useState([]);

	return (
		<>
			<UserSearch
				activeUser={activeUser}
				setActiveUser={setActiveUser}
				userRepos={userRepos}
				setUserRepos={setUserRepos}
				renderCheck={renderCheck}
				setRenderCheck={setRenderCheck}
			/>
			<div className="bg-transparent">
				<h3>Son Aramalar</h3>
				<UserList setUser={setActiveUser} setUserRepos={setUserRepos} />
			</div>
		</>
	);
}

export default App;
