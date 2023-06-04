// import PropTypes from 'prop-types'
import { getUserReposFromDb } from '../../services/services';

import ActiveUser from '../ActiveUser/ActiveUser'

const UserList = ({ setUser, userRepos, setUserRepos }) => {
    let userList = JSON.parse(localStorage.getItem("userList"));

    const getUserRepos = async (userName) => {
        // const response = await fetch(`https://api.github.com/users/${username}/repos`);
        // const data = await response.json();
        let userRepos = await getUserReposFromDb(userName);
        console.log(userRepos);
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
// UserList.propTypes = {
//     user: PropTypes.object
// }