import style from "./Followers.module.css"
import PropTypes from "prop-types"

const Followers = ({ followers }) => {


  return (
    <div>
      
   
     
      {followers.map((followers) => (
        
        // eslint-disable-next-line react/jsx-key
        <div style={{marginTop:"1em"}} key={followers.id}>
        
        
        <div className={style.followerFlex} >

         
          <img className={style.followerAvatar}  src={followers.avatar_url} />
          <div style={{display:"flex",alignItems:"center"}}>
          <h3>{followers.login}</h3>
         
          </div>
          
        </div>
        <hr />
        </div>
        
      ))}
      
    </div>
  );
};
Followers.propTypes = {
  followers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string,  
    })
  ).isRequired,
};

export default Followers;
