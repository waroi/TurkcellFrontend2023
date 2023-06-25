import { useDispatch } from "react-redux"
import { setUser } from "../../../redux/slices/userSlice"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
const AccountDropdown = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <ButtonPrimary onClick={() => {
                dispatch(setUser(null))
                localStorage.removeItem("userData")
            }}>
                Logout
            </ButtonPrimary>
        </div>
    )
}

export default AccountDropdown