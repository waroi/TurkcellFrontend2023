import UserAreaStyle from "../CustomStyle.module.css";

const UserArea = () => {
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className={`${UserAreaStyle.userArea} col-12 d-flex justify-content-between userArea`}>
                <div className='user-left col-6'>
                    <img src=""/>
                    <span className='span-follower'>Follower</span>
                    <span className='span-following'>Following</span>
                    <span className='span-repo'>Repos</span>
                </div>
                <div className='user-right col-6'>
                    <div className='user-username'>Username</div>
                    <div className='user-name'>Name</div>
                    <div className='user-address'>Address</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserArea