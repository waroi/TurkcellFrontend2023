import ProfileStyle from "./SearchProfile.module.css";
import { AiFillHome } from "react-icons/ai";

function SearchProfile({
  name,
  picture,
  follower,
  following,
  repo_number,
  location,
  accountUrl,
}) {
  return (
    <div className={ProfileStyle.profileDiv}>
      <div className={ProfileStyle.profilePictureDiv}>
        {picture != "" && (
          <img src={picture} alt="images" className={ProfileStyle.profilePic} />
        )}
        {picture == "" && (
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="images"
            className={ProfileStyle.profilePic}
          />
        )}
      </div>
      <div className={ProfileStyle.profileState}>
        <p className={ProfileStyle.pText}>
          {location && <AiFillHome />}
          {location}
        </p>
        <h1 className={ProfileStyle.nameH1}>{name}</h1>
        <h3 className={ProfileStyle.h3}>Takipçiler</h3>
        <p className={ProfileStyle.pText}>{follower}</p>
        <h3 className={ProfileStyle.h3}>Takip Edilen</h3>
        <p className={ProfileStyle.pText}>{following}</p>
        <h3 className={ProfileStyle.h3}>Repo Sayısı</h3>
        <p className={ProfileStyle.pText}>{repo_number}</p>
        <button className={ProfileStyle.accountButton}>
          <a href={accountUrl} target="_blank">
            Profile Git
          </a>
        </button>
      </div>
    </div>
  );
}

export default SearchProfile;
