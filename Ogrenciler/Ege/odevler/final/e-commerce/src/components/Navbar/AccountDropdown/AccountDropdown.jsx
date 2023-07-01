import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../../../redux/slices/userSlice"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import StyledAccountDropdown from "./StyledAccountDropdown"
import caretDown from "../../../assets/Caret_Down_Dark.svg"
import { useState } from "react"
const AccountDropdown = () => {
    const user = useSelector(state => state.user.user)
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        dispatch(setUser(null));
        localStorage.removeItem("userData");
    };
    return (
        <StyledAccountDropdown >
            <div className="d-flex align-items-center gap-3 dropdownButton" onClick={handleToggle}>
                <img className="profileImage" src={user.imgURL} alt="userImage" />
                <p className="m-0 profileText d-flex align-items-center">
                    {user.name} <img className="caretDown" src={caretDown} alt="caretDown" />
                </p>
            </div>
            {isOpen && (
                <ul className="dropdownMenu">
                    <li className="px-3">
                        <ButtonPrimary className="w-100" onClick={handleLogout}>
                            Logout
                        </ButtonPrimary>
                    </li>
                </ul>
            )}
        </StyledAccountDropdown>
    )
}

export default AccountDropdown