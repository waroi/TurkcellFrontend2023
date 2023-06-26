import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Frame from "../../../assets/Frame.png";
import { loginUser, logoutUser  } from "../../../redux/actions/actions";
import { Link } from "react-router-dom";
import { CustomSearch, MobileSearch, MobileSearchDiv, MobileSearchImage } from "./styled";
import { StyledButton } from "../../SignUp/styled";
import mobileSearch from "../../../assets/mobileSearch.svg";
import LogoutButton from "../../Logout/LogoutButton";

const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      dispatch(loginUser(JSON.parse(storedUser)));
    }
  }, [dispatch]);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  const handleSearchClick = () => {
    setShowSearch((prevState) => !prevState);
  };

  console.log(currentUser);

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-transparent mb-3"
        >
          <Container fluid className="mt-3">
            <Navbar.Brand className="d-none d-sm-flex" to="#">
              <Link to="/">
                <img src={Frame} alt="Frame" />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
              className="bg-body-primary"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-body-primary">
                <Nav className="flex-grow-1 pe-3 justify-content-evenly align-items-center">
                  <Link style={{ color: "#003459" }} to="/">
                    Home
                  </Link>
                  <Link style={{ color: "#003459" }} to="/Product">
                    Category
                  </Link>
                  <Link style={{ color: "#003459" }} to="/404">
                    About
                  </Link>
                  <Link style={{ color: "#003459" }} to="/404">
                    Contact
                  </Link>
                </Nav>
                <CustomSearch
                  type="search"
                  placeholder="Search something here!"
                  className="me-2"
                  aria-label="Search"
                />
               {!currentUser ? (
                 <div className="d-flex justify-content-center align-items-center gap-2">
                 <StyledButton>
                   <Link to="/signup">Join the community</Link>
                 </StyledButton>
                 <StyledButton>
                   <Link to="/login">Already have an account</Link>
                 </StyledButton>
               </div>
           
          ) : (
            <div className="d-flex flex-xl-row flex-column  justify-content-center align-items-center gap-2">
            <StyledButton>
              <Link to="/Cart">Check Cart</Link>
            </StyledButton>
            <NavDropdown
            className="d-flex align-items-center border-white"
            src={Frame}
            id={`offcanvasNavbarDropdown-expand-${expand}`}
            title={currentUser.username}
          >
              <LogoutButton style={{width: "100% !important"}}  onClick={handleLogout} />
          </NavDropdown>
          </div>
          )}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <MobileSearchImage onClick={handleSearchClick} src={mobileSearch} />
          </Container>
          <MobileSearchDiv>
            <MobileSearch
              placeholder="Search something here!"
              onChange={() => {
                console.log("changed");
              }}
              className={`${showSearch ? "visible" : "hidden"}`}
            />
          </MobileSearchDiv>
        </Navbar>
      ))}
    </>
  );
};

export default NavbarComponent;
