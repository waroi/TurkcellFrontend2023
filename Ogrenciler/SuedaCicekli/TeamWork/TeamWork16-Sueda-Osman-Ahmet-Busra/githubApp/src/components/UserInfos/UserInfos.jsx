import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Following from "./Following/Following";
import Repos from "./Repos/Repos";
import UserInfoPage from "./UserInfoPage/UserInfoPage";
import Followers from "./Followers/Followers.jsx";
import style from "./UserInfos.module.css";
const UserInfos = ({ user }) => {
  const [userData, setUserData] = useState([]);
  const [repos, setRepos] = useState([]);

  const [followers, setFollowers] = useState([]);
  const [showRepos, setShowRepos] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollowing, setShowFollowing] = useState(false);
  const [showUserData, setShowUserData] = useState(true);
  const [following, setFollowing] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      let users = JSON.parse(localStorage.getItem("items"));
      try {
        const userData = await user;
        setUserData(userData);
        let request = ` https://api.github.com/users/${
          userData.login ? userData.login : users[users.length - 1]
        }`;

        const responseUser = await fetch(` ${request}`);
        const userDatas = await responseUser.json();
        setUserData(userDatas);

        const responseRepos = await fetch(`${request}/repos`);
        const userRepos = await responseRepos.json();
        setRepos(userRepos);

        const responseFollowers = await fetch(`${request}/followers`);
        const userFollowers = await responseFollowers.json();
        setFollowers(userFollowers);

        const responseFollowing = await fetch(`${request}/following`);
        const userFollowing = await responseFollowing.json();
        setFollowing(userFollowing);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUser();
  }, [user]);

  const showFollowerss = () => {
    setShowRepos(false);
    setShowUserData(false);
    setShowFollowing(false);
    setShowFollowers(true);
  };

  const showReposs = () => {
    setShowRepos(true);
    setShowUserData(false);
    setShowFollowers(false);
    setShowFollowing(false);
  };

  const showUser = () => {
    setShowUserData(true);
    setShowRepos(false);
    setShowFollowers(false);
    setShowFollowing(false);
  };

  const showFollowingg = () => {
    setShowRepos(false);
    setShowUserData(false);
    setShowFollowers(false);
    setShowFollowing(true);
  };

  return (
    <div >
      <div className={style.filterButton}>
      <button className={style.button} onClick={showUser}> User Data</button>
      <button className={style.button} onClick={showFollowerss}> Followers({userData.followers})</button>
      <button className={style.button} onClick={showFollowingg}>Following ({userData.following})</button>
      <button className={style.button} onClick={showReposs}> Repos ({userData.public_repos})</button>
      </div>

      {showUserData && <UserInfoPage userData={userData} />}

      {showRepos && <Repos repos={repos} />}

      {showFollowers && (
        
        <Followers followers={followers} />
      )}

      {showFollowing && (
        <Following following={following} />
      )}
    </div>
  );
};

UserInfos.propTypes = {
  user: PropTypes.array.isRequired,
};

export default UserInfos;
