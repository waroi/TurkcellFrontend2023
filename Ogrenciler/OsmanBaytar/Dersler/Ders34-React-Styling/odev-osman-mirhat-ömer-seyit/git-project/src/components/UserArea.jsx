import UserAreaStyle from "../CustomStyle.module.css";

const UserArea = ({ data }) => {
    return (
        <>
            <div className='mt-5'>
                <div className=''>
                    <div className={`${UserAreaStyle.userArea} row justify-content-between userArea`}>
                        <div className='user-left col-lg-6'>
                            <img src={data.avatar_url} className="img-fluid rounded-4" />
                        </div>
                        <div className='user-right col-lg-6'>
                            <div className={UserAreaStyle.userInfoArea}>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Username: </span> {data.login}</div>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Name: </span> {data.name}</div>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Address: </span> {data.location}</div>
                            </div>
                            <div>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Followers: </span> {data.followers}</div>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Following: </span> {data.following}</div>
                                <div className={UserAreaStyle.userInfo}><span className={UserAreaStyle.headerText}>Repos: </span> {data.public_repos}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserArea