import PropTypes from "prop-types";
import Styles from "./Profile.module.css";

const index = ({ user }) => {
  return (
    <div className={Styles.container}>
      <div className="row">
        <div className="col-md-6">
          <div className={Styles.profile}>
            <img src={user.avatar_url} alt="" className="img-fluid" />
            <h2>{user.name}</h2>
            <p>{user.bio ? user.bio : "Bio yok"}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className={Styles.profileInfo}>
            <div className={Styles.profileInfoItem}>
              <a className="btn btn-primary">
                <i className="fa fa-users"></i>
                <span>Takipçiler</span>
                <span className="badge badge-light">{user.followers}</span>
              </a>
              <a className="btn btn-info ms-3 text-white">
                <i className="fa fa-user-plus"></i>
                <span>Takip Edilenler</span>
                <span className="badge badge-light">{user.following}</span>
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
  );
};

index.propTypes = {
  user: PropTypes.object.isRequired,
};

export default index;
