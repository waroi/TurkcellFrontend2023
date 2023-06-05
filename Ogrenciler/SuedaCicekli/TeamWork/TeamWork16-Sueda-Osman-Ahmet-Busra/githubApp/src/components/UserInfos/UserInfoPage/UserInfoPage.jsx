import style from "./UserInfo.module.css";
import { MdLocationOn } from "react-icons/md";
import { GrTwitter, GrGithub } from "react-icons/gr";
import { BiLink } from "react-icons/bi";
import { BsPersonHearts, BsPersonHeart, BsBuildings } from "react-icons/bs";
import PropTypes from "prop-types";

const UserInfoPage = ({ userData }) => {
  const { login, avatar_url, name, bio, location, twitter_username, followers, following, blog, html_url, company } = userData;


  if (!userData) {
    return null;
  }

  return (
    <div className={style.card}>
      <div className={style.dgrid}>
        <div className={style.span3}>
          <img
            src={avatar_url}
            alt={name}
            className={style.avatarImg}
          />
        </div>
        <div className={style.span6}>
          <h2>{name}</h2>
          {login && <h3 className={style.mt3}>@{login}</h3>}
          <p className={style.mt3}>{bio}</p>
        </div>
        <div className={style.span3}>
          <div>
            {location && (
              <p >
                <MdLocationOn className={style.iconFont} /> {location}
              </p>
            )}
          </div>
          {twitter_username && (
            <p>
              <GrTwitter className={style.iconFont} /> {twitter_username}
            </p>
          )}
          {followers && (
            <p>
              <BsPersonHearts className={style.iconFont} /> {followers}
            </p>
          )}
          {following && (
            <p>
              <BsPersonHeart className={style.iconFont} /> {following}
            </p>
          )}
        </div>
      </div>
      <div >
        {blog && (
          <div>
            <a href={blog} target="_blank" rel="noreferrer">
              <BiLink className={`${style.mt2} ${style.iconFont}`} /> {blog}
            </a>
          </div>
        )}
        {html_url && (
          <div>
            <a href={html_url} target="_blank" rel="noreferrer">
              <GrGithub className={`${style.mt2} ${style.iconFont}`} /> {html_url}
            </a>
          </div>
        )}
        {company && (
          <div>
            <BsBuildings className={`${style.mt2} ${style.iconFont}`} /> {company}
          </div>
        )}
      </div>
    </div>
  );
};

UserInfoPage.propTypes = {
  userData: PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,
    twitter_username: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    blog: PropTypes.string,
    html_url: PropTypes.string,
    company: PropTypes.string,
  }).isRequired,
};

export default UserInfoPage;
