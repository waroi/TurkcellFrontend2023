import style from './UserInfo.module.css'


const UserInfoPage = ({ userData }) => {
  return (
    // <div>
    //   <img src={userData.avatar_url} />
    //   <h2>{userData.name}</h2>
    //   <h3>{userData.login}</h3>
    //   <p>{userData.bio}</p>
    //   <p>{userData.location}</p>
    //   <p>{userData.company}</p>
    //   <p>{userData.email}</p>
    //   <p>{userData.blog}</p>
    //   <p>{userData.twitter_username}</p>
    //   <p>{userData.public_repos}</p>
    //   <p>{userData.public_gists}</p>
    //   <p>{userData.followers}</p>
    //   <p>{userData.following}</p>
    // </div>
    <div className={style.card}>
      <div className={style.dgrid}>
        <div className={style.span3}>
          <img src={userData.avatar_url}
            alt={userData.name}
            className={style.avatarImg}
          />
        </div>
        <div className={style.span7}>
          <h2>{userData.name}</h2>
          <h3 className={style.mt3}>{userData.login}</h3>
          <p className={style.mt3}>{userData.bio}</p>
        </div>
        <div className={style.span2}>
          <div><p>{userData.location}</p></div>
          <p>{userData.twitter_username}</p>
          <p>{userData.followers}</p>
          <p>{userData.following}</p>

        </div>
      </div>
      <div className={style.grid}>
        <div >{userData.blog}</div>
        <div>{userData.html_url}</div>
        <div>{userData.company}</div>
      </div>
    </div >
  );
};

export default UserInfoPage;
