import style from './userRepoStyle.module.css';
import PropTypes from 'prop-types';
import {Share, Watch, StarEmpty, StarFull} from '../../utils/Icons';

const UserRepo = ({repo}) => {

 return <div className={style.repoDIV}>
  {repo.map((item, index) => {
   return (
    <a href={item.repoUrl} target='_blank' rel="noreferrer" className={style.card} key={index}>
     <h3>{item.repoName}</h3>
     <div className={style.countsDIV}>
     <div className={style.flex}>
       {item.stars > 0 
        ? 
         <span className={style.count}>
           
           <StarFull color={"#2A9D8F"} size={20} />
            <span className={style.starText}>
            {item.stars}
            </span>
         </span>
        : <span className={style.count}>
          <StarEmpty color={"#00000050"} size={20} />
           <span className={style.starText}>
            {item.stars}
            </span>
         </span> }
     </div>
     <div className={style.flex}>
       {item.watchers > 0 
        ? 
         <span className={style.count}>
          <Watch color={"#2A9D8F"} size={20} />
           {item.watchers}
         </span>
        : <span className={style.count}>
          <Watch color={"#00000050"} size={20} />
           
           {item.watchers}
         </span> }
     </div>
     <div className={style.flex}>
       {item.forks > 0 
        ? 
         <span className={style.count}>
          <Share color={"#2A9D8F"} size={16} />
           {item.forks}
         </span>
        : <span className={style.count}>
          <Share color={"#00000050"} size={16} />
           {item.forks}
         </span> }
     </div>
     </div>
    </a>
   )
  })}
 </div>;
};

UserRepo.propTypes = {
 repo: PropTypes.array.isRequired,
};


export default UserRepo;
