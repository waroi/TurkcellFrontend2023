import ProfileStyle from "./SearchProfile.module.css";

function SearchProfile({ name, picture, follower, following, repo_number }) {
  return (
    <div className={ProfileStyle.profileDiv}>
      <div className="profilePicture">
        {picture != "" && (
          <img src={picture} alt="images" className={ProfileStyle.img} />
        )}
        {picture == "" && (
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="images"
            className={ProfileStyle.img}
          />
        )}
      </div>
      <div className="profileState">
        <h1 className={ProfileStyle.h1}>{name}</h1>
        <h3 className={ProfileStyle.h3}>Takipçiler</h3>
        <p className={ProfileStyle.p}>{follower}</p>
        <h3 className={ProfileStyle.h3}>Takip Edilen</h3>
        <p className={ProfileStyle.p}>{following}</p>
        <h3 className={ProfileStyle.h3}>Repo Sayısı</h3>
        <p className={ProfileStyle.p}>{repo_number}</p>
      </div>
    </div>
  );
}

export default SearchProfile;
