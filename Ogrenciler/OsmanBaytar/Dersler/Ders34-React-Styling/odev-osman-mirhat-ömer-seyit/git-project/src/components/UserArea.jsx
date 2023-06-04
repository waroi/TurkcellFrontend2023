import UserAreaStyle from "../CustomStyle.module.css";

const UserArea = ({data}) => {
  return (
    <>
    <div className='container mt-5'>
        <div className='row'>
            <div className={`${UserAreaStyle.userArea} col-12 d-flex justify-content-between userArea`}>
                <div className='user-left col-6'>
                    <img src={data.avatar_url}/>
                    <div className='span-follower'>Followers: {data.followers}</div>
                    <div className='span-following'>Following: {data.following}</div>
                    <div className='span-repo'>Repos: {data.public_repos}</div>
                </div>
                <div className='user-right col-6'>
                    <div className='user-username'>Username: {data.login}</div>
                    <div className='user-name'>Name: {data.name}</div>
                    <div className='user-address'>Address: {data.location}</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default UserArea