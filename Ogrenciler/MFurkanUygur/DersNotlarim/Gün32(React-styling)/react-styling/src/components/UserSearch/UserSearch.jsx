import getUserFromDb from '../../services/services'
import { useState } from "react"
import ActiveUser from '../ActiveUser/ActiveUser'

const UserSearch = () => {
    const [user, setUser] = useState()

    const getUser = async () => {
        const mainInput = document.getElementById("mainInput")
        let user = await getUserFromDb(mainInput.value)
        console.log(user);
        setUser(user)
        mainInput.value = ""

    }

    return (
        <div>
            <h3>Kullanıcıları arayın</h3>
            <input className='form-control' type="text" placeholder='Github kullanıcı ismini giriniz...' id="mainInput" />
            <button className='btn btn-success' onClick={() => { getUser() }} >Ara</button>
            <div className='row'>
                <ActiveUser user={user ? user : {}} />

            </div>
        </div>
    )
}

export default UserSearch