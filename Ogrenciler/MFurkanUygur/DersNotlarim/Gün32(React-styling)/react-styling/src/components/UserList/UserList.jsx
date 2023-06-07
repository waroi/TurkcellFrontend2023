// import PropTypes from 'prop-types'

import ActiveUser from '../ActiveUser/ActiveUser'

const UserList = ({ setUser, userRepos }) => {
    let userList = JSON.parse(localStorage.getItem("userList"));

    return (
        <div className="row">
            {
                userList.length > 0 &&
                userList.map((user) => {
                    return (

                        <div className="card col-4" onClick={() => {
                            console.log("first"),
                                setUser(user)
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