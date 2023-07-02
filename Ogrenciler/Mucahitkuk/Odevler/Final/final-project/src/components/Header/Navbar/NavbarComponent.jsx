import { useNavigate,Link} from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Frame from "../../../assets/Frame.png";
import { loginUser, logoutUser  } from "../../../redux/actions/actions";
import { CustomSearch, MobileSearch, MobileSearchDiv, MobileSearchImage } from "./styled";
import mobileSearch from "../../../assets/mobileSearch.svg";
import LogoutButton from "../../Logout/LogoutButton";
import { PageButton, PageButtonTwo } from "../../HomeComponents/HeaderContent/styled";
import { Toast } from 'react-bootstrap';

const NavbarComponent = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showSearchToast, setShowSearchToast] = useState(false);
  const [searchToastMessage, setToastMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const submitSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.value.trim();
  
    if (currentUser) {
      if (searchTerm !== '') {
        navigate('/Product', { state: { search: searchTerm } });
      } else {
        navigate('/Product', { state: { search: null } }); // Pass null as the search term to indicate rendering all products
      }
    } else {
      setShowSearchToast(true);
      setToastMessage("Must log in to use search");
      setTimeout(() => {
        setShowSearchToast(false);
        navigate('/login');
      }, 2000)
    }
  };

  return (
    <>
      {["xl"].map((expand) => (
        <Navbar
          key={expand}
          expand={expand}
          className="bg-body-transparent mb-3"
          sticky="top"
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
                  id="search-input"
                  placeholder="Search something here!"
                  className="me-2"
                  aria-label="Search"
                  onChange={submitSearch}
                />
               {!currentUser ? (
                 <div className="d-flex justify-content-center align-items-center gap-2">
                 <PageButtonTwo>
                   <Link to="/signup">Join the community</Link>
                 </PageButtonTwo>
                 <PageButtonTwo>
                   <Link to="/login">Already have an account</Link>
                 </PageButtonTwo>
               </div>
           
          ) : (
            <div className="d-flex flex-xl-row flex-column  justify-content-center align-items-center gap-2">
            <PageButton>
              <Link to="/Cart">Check Cart</Link>
            </PageButton>
            <div>
            <img src={currentUser.profileImage} style={{width: "50px", borderRadius: "50%"}}></img>
            </div>
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
              type='search'
              placeholder="Search something here!"
              onChange={submitSearch}
              className={`${showSearch ? "visible" : "hidden"}`}
            />
          </MobileSearchDiv>
        </Navbar>
      ))}
          <div className='d-flex m-auto position-absolute justify-content-center mt-3 w-100'>
      <Toast className='bg-danger m-auto' show={showSearchToast} onClose={() => setShowSearchToast(false)}>
          <Toast.Header>
            <strong className="me-auto">Notice</strong>
          </Toast.Header>
          <Toast.Body className='text-white'>{searchToastMessage}</Toast.Body>
        </Toast>
        </div>
    </>
  );
};

export default NavbarComponent;
