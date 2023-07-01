import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../../redux/slices/userSlice"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import StyledAccountDropdown from "./StyledAccountDropdown"
import dots from "../../../assets/Dots.svg"
const AccountDropdown = () => {
    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    return (
        <StyledAccountDropdown className="dropdown">
            <div className="d-flex align-items-center gap-3 dropdownButton" data-bs-toggle="dropdown" aria-expanded="false">
                <img className="profileImage" src={user.imgURL} alt="userImage" />
                <p>{user.name} <img className="dots" src={dots} alt="dots" /></p>

            </div>
            <ul className="dropdown-menu">
                <li className="px-3"><ButtonPrimary
                    className="w-100"
                    onClick={() => {
                        dispatch(setUser(null))
                        localStorage.removeItem("userData")
                    }}
                >Logout</ButtonPrimary></li>
            </ul>
        </StyledAccountDropdown >
    )
}

export default AccountDropdown