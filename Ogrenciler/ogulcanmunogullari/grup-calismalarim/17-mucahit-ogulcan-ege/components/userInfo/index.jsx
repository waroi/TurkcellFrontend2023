import PropTypes from 'prop-types';
const UserInfo = ({ userInfo }) => {
 return (
  <>
   {/* {userInfo?.map((item, index) => {
    return <p key={index}>{item}</p>;
   })} */}
  </>
 );
};

UserInfo.propTypes = {
 user: PropTypes.shape({
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  blog: PropTypes.string,
  company: PropTypes.string,
  created_at: PropTypes.string.isRequired,
  email: PropTypes.string,
  events_url: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  followers_url: PropTypes.string.isRequired,
  following: PropTypes.number.isRequired,
  following_url: PropTypes.string.isRequired,
  gists_url: PropTypes.string.isRequired,
  gravatar_id: PropTypes.string,
  hireable: PropTypes.bool,
  html_url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  location: PropTypes.string,
  login: PropTypes.string.isRequired,
  name: PropTypes.string,
  node_id: PropTypes.string.isRequired,
  organizations_url: PropTypes.string.isRequired,
  public_gists: PropTypes.number.isRequired,
  public_repos: PropTypes.number.isRequired,
  received_events_url: PropTypes.string.isRequired,
  repos_url: PropTypes.string.isRequired,
  site_admin: PropTypes.bool.isRequired,
  starred_url: PropTypes.string.isRequired,
  subscriptions_url: PropTypes.string.isRequired,
  twitter_username: PropTypes.string,
  type: PropTypes.string.isRequired,
  updated_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
 }).isRequired,
};

export default UserInfo;
