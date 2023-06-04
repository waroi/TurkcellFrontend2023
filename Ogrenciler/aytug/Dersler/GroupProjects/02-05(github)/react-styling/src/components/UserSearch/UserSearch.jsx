import { getUserFromDb, getUserReposFromDb } from '../../services/services'
import { useState } from "react"
import ActiveUser from '../ActiveUser/ActiveUser'
import PropTypes from 'prop-types'


const UserSearch = ({ activeUser, setActiveUser, userRepos, setUserRepos, renderCheck, setRenderCheck }) => {

    const [userData, setUserData] = useState([]);
    // let localStorage = localStorage.getItem("userList") ? JSON.parse(localStorage.getItem("userList")) : localStorage.setItem("userList", [])
    // let localStorage=JSON.parse(localStorage.getItem("userList"));
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (!userList) {
        localStorage.setItem("userList", JSON.stringify([]))
    }
    const getUser = async () => {

        const mainInput = document.getElementById("mainInput")
        let activeUser = await getUserFromDb(mainInput.value)
        let userRepos = await getUserReposFromDb(mainInput.value)
        console.log(activeUser);

        if (activeUser.message != "Not Found") {
            userList.push(activeUser)
            setRenderCheck(!renderCheck)
            //BAKICAZ
            // userList.map(item => {
            //     console.log("itemid", item.id);
            //     console.log("userid", activeUser.id);
            //     // if (item.id != activeUser.id) {
            //     // }
            // })

            localStorage.setItem("userList", JSON.stringify(userList));
            setUserRepos(userRepos)
            setActiveUser(activeUser)
            setUserData([activeUser, ...userData])
        }
        else {
            alert("kullanıcı yok")//toast message ekle
        }
        console.log("userData LS", userData);
        mainInput.value = ""
    }

    return (
        <div>
            <h3>Kullanıcıları arayın</h3>
            <input className='form-control' type="text" placeholder='Github kullanıcı ismini giriniz...' id="mainInput" />
            <button className='btn btn-success' onClick={() => { getUser() }} >Ara</button>
            <div className='row'>
                {
                    (activeUser) &&
                    <ActiveUser userRepos={userRepos} activeUser={activeUser} setActiveUser={setActiveUser} />

                }

            </div>
        </div>
    )
}

export default UserSearch;

UserSearch.propTypes = {
    activeUser: PropTypes.object,
    setActiveUser: PropTypes.func,
    userRepos: PropTypes.array,
    setUserRepos: PropTypes.func,
    renderCheck: PropTypes.bool,
    setRenderCheck: PropTypes.func,
}