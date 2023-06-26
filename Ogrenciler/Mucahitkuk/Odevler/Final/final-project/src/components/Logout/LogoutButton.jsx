import { useDispatch } from "react-redux";
import { logoutUser as logoutUserAction } from "../../redux/actions/actions";
import { StyledButton } from "../SignUp/styled";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    dispatch(logoutUserAction());
    console.log("Logged out successfully");
    window.location.reload();
  };

  return <StyledButton style={{width: "100%"}} onClick={handleLogout}>Logout</StyledButton>;
};

export default LogoutButton;
