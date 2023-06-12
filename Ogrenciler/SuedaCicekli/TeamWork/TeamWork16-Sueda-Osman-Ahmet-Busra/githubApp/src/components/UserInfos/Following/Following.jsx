import style from "../Followers/Followers.module.css"
import PropTypes from "prop-types"

const Following = ({ following }) => {
  return (
    <div>
      {following.map((following) => (
       <div style={{marginTop:"1em"}} key={following.id}>
        
        
       <div className={style.followerFlex} >

        
         <img className={style.followerAvatar}  src={following.avatar_url} />
         <div style={{display:"flex",alignItems:"center"}}>
         <h3>{following.login}</h3>

        
         </div>
         
       </div>
       <hr />
       </div>
      ))}
    </div>
  );
};
Following.propTypes = {
  following: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string,
     
      
    })
  ).isRequired,
};

export default Following;
