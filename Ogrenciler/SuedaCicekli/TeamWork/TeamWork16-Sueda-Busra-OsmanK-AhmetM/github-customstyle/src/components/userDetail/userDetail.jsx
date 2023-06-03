import styles from './userDetail.module.css';
import mainStyles from '../../appCustom.module.css'; //grid için

const UserDetail = ({ user }) => {
  console.log("detail", user);

  if (!user) {
    return <p>Kullanıcı bulunamadı.</p>;
  }

  return (
    <div>
      <p>Navbar</p>
      <div className={`${mainStyles.dgrid} ${styles.card}`}>
        <div className={styles.profile}>
          <img className={styles.profileImg} src={user.avatar_url} alt="" />
        </div>
        <div className={styles.userInfo}>
          <h3>{user.name}</h3>
          <p>@{user.login}</p>
          <p>{user.bio}</p>
        </div>
        <div className={styles.userLınks}>
          <p>{user.location}</p>
          <p>{user.blog}</p>
          <p> {user.followers}</p>
          <p> {user.following}</p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
