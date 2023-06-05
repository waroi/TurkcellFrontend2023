import PropTypes from "prop-types";
import Styles from "./Profile.module.css";

const index = ({ user }) => {
  return (
    <div className={Styles.container}>
    <div >
      <div className=
       {Styles.userArea}>
        <div className="row">
        <div className= "col-md-5">
          <div className={Styles.profile}>
            <img src={user.avatar_url} alt="" className="img-fluid" />
            <h4>{user.name}</h4>
            <p>{user.bio ? user.bio : "Bio yok"}</p>
          </div>
        </div>
        <div className="col-md-7">
          <div className={Styles.profileInfo}>
            <div className={Styles.profileInfoItem}>
              <a className="btn btn-sm btn-dark">
                <i className="fa fa-users me-2"></i>
                <span>Takipçiler</span>
                <span className={Styles.profile_btn}>{user.followers}</span>
              </a>
              <a className="btn btn-sm btn-info ms-3 text-white">
                <i className="fa fa-user-plus me-2"></i>
                <span>Takip Edilenler</span>
                <span className={Styles.profile_btn}>{user.following}</span>
              </a>
            </div>
            <hr />
            <div className={Styles.profileInfoItem}>
              <ul className="list-unstyled">
                <li>
                  <strong>Kullanıcı Adı: </strong>
                  {user.login}
                </li>
                <li>
                  <strong>Blog: </strong>
                  {user.blog ? user.blog : "Bilinmiyor"}
                </li>
                <li>
                  <strong>Location: </strong>
                  {user.location ? user.location : "Bilinmiyor"}
                </li>
                <li>
                  <strong>Email: </strong>
                  {user.email ? user.email : "Bilinmiyor"}
                </li>
                <li>
                  <strong>Üyelik Tarihi: </strong>
                  {user.created_at}
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};

index.propTypes = {
  user: PropTypes.object.isRequired,
};

export default index;
