
import PropTypes from 'prop-types';

const UserInfos = ({user}) => {
    try {
        // eslint-disable-next-line react/prop-types
        user.then(res=>console.log(res))
      } catch (error) {
        console.log(error)
        
      }
  return (
    <div>
        
    </div>
  )
}
UserInfos.propTypes = {
    user: PropTypes.array.isRequired
  };

export default UserInfos