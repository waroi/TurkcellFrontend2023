import style from './userInfoStyle.module.css';
import PropTypes from 'prop-types';
import { Joined, Repos, Followers, Location, Blog, Bio, IdCard } from '../../utils/Icons';

const UserInfo = ({userInfo}) => {
 const { avatar_url, bio, blog, followers, following, email, created_at, location, login, name, public_repos  } = userInfo;
 return (
  <div className={style.container}>
   <img style={style} src={avatar_url} alt="profil resim" />
   <h2 style={style}>{name}</h2>
  
   <ul className={style}>
    {login && <li className={style}> <IdCard color={"#2A9D8F"} size={16} /> {login}</li>}
    {bio && <li className={style}> <Bio color={"#2A9D8F"} size={16}/> {bio}</li>}
    {location && <li className={style}><Location color={"#2A9D8F"} size={16}/> {location}</li>}
    {email && <li className={style}>{email}</li>}
    {blog && <li className={style.link}>
     <a href={blog}><Blog color={"#2A9D8F"} size={16}/> Blog</a>
     </li>}
    {created_at && <li className={style}><Joined color={"#2A9D8F"} size={16}/> {created_at.slice(0,10).split("-").reverse().join("/")}</li>}
   <li className={style}><Repos color={"#2A9D8F"} size={16}/> {public_repos} Repositories</li>
    <li className={style}><Followers color={"#2A9D8F"} size={16}/> {followers} Followers</li>
    <li className={style}><Followers color={"#2A9D8F"} size={16}/> {following} Following</li>
   </ul>
  </div>
 );
};

UserInfo.propTypes = {
 userInfo: PropTypes.shape({
 avatar_url: PropTypes.string,
 bio: PropTypes.string,
 blog: PropTypes.string,
 followers: PropTypes.number,
 following: PropTypes.number,
 email: PropTypes.string,
 created_at: PropTypes.string,
 location: PropTypes.string,
 login: PropTypes.string,
 name: PropTypes.string,
 public_repos: PropTypes.number,})
};

export default UserInfo;
