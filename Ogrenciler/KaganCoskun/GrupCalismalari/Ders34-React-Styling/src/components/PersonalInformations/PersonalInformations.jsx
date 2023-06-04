import styles from "./style.module.css"
import ProfilInfoBadge from '../ProfilInfoBadge/ProfilInfoBadge'
import LastSearches from '../LastSearches/LastSearches'

const PersonalInformations = ({ user,fetchUser }) => {
  return (
    <div className={styles.personalInformations}>
      
      <div className={styles.rightSide}>
        <img className={styles.gitImage} src={user?.avatar_url} alt="" />
        <div className={styles.profilInfoBadge}>
          <ProfilInfoBadge number={user?.followers} text={"Followers"} />
          <ProfilInfoBadge number={user?.following} text={"Following"} />
          <ProfilInfoBadge number={user?.public_repos} text={"Repos"} />
        </div>
        {user && <LastSearches fetchUser={fetchUser} />}

      </div>
    </div>
  )
}

export default PersonalInformations