import PropTypes from 'prop-types'
import { getUserReposFromDb } from '../../services/services';


const UserList = ({ setUser, setUserRepos }) => {
    let userList = JSON.parse(localStorage.getItem("userList"));

    const getUserRepos = async (userName) => {
        let userRepos = await getUserReposFromDb(userName);
        return setUserRepos(userRepos);
    }

    return (
        <div className="row">
            {
                userList.length > 0 &&
                userList.map((user) => {
                    return (

                        <div className="card col-4" onClick={async () => {
                                await getUserRepos(user.login).then(()=>setUser(user));
                        }} key={user.id}>
                            <img src={user.avatar_url} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{user.name}</h5>
                                <p className="card-text">{user.bio}</p>
                            </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default UserList
UserList.propTypes = {
    user: PropTypes.object,
    setUser: PropTypes.func,
    userRepos: PropTypes.array,
    setUserRepos: PropTypes.func,
}