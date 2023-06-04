import style from "./UserInfo.module.css";
import { MdLocationOn } from "react-icons/md";
import { GrTwitter, GrGithub } from "react-icons/gr";
import { BiLink } from "react-icons/bi";
import { BsPersonHearts, BsPersonHeart, BsBuildings } from "react-icons/bs";
import PropTypes from "prop-types"

const UserInfoPage = ({ userData }) => {
  return (
    <div className={style.card}>
      <div className={style.dgrid}>
        <div className={style.span3}>
          <img
            src={userData.avatar_url}
            alt={userData.name}
            className={style.avatarImg}
          />
        </div>
        <div className={style.span6}>
          <h2>{userData.name}</h2>
          <h3 className={style.mt3}>@{userData.login}</h3>
          <p className={style.mt3}>{userData.bio}</p>
        </div>
        <div className={style.span3}>
          <div>
            <p>
              {" "}
              <MdLocationOn /> {userData.location}{" "}
            </p>
          </div>
          <p>
            <GrTwitter /> {userData.twitter_username}
          </p>
          <p>
            <BsPersonHearts /> {userData.followers}
          </p>
          <p>
            <BsPersonHeart /> {userData.following}
          </p>
        </div>
      </div>
      <div className={style.grid}>
        <div>
          <a href={userData.blog} target="_blank" rel="noreferrer">
            {" "}
            <BiLink /> {userData.blog}
          </a>
        </div>
        <div>
          <a href={userData.html_url} target="_blank" rel="noreferrer">
            {" "}
            <GrGithub /> {userData.html_url}
          </a>
        </div>
        <div>
          <BsBuildings /> {userData.company}
        </div>
      </div>
    </div>
  );
};
UserInfoPage.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      blog:PropTypes.string.isRequired,
      html_url:PropTypes.string,
    })
  ).isRequired,
};

export default UserInfoPage;
