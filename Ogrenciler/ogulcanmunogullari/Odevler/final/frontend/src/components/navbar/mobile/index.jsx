import { Nav, Hamburger, Closeburger, Logo, AsideLogo, SearchMobile, SearchMobileIcon, AsideMenu } from "./style"
import burger from "../../../assets/hamburger_icon.png"
import closeburger from "../../../assets/close_aside_black.png"
import searchIcon from "../../../assets/search_icon.png"
import mobileLogo from "../../../assets/mobile_logo.png"
import BasicButton from "../../Elements/buttons/BasicButton"
import { useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../../redux/Slicers/userSlice"
import FetchTool from "../../../utils/fetchTool"
import { useFormik } from "formik"
import * as Yup from 'yup';
import Toast from "../../Elements/toast/Toast"
import ToastText from "../../Elements/toast/ToastText"

const MobileNavbar = () => {
  const [hideSearchIcon, setHideSearchIcon] = useState(false)
  const [showAsideMenu, setShowAsideMenu] = useState(false)
  const searchMobileRef = useRef(null)
  const dispatch = useDispatch()
  const [toast, setToast] = useState({})
  const navigate = useNavigate()
  const user = useSelector(state => state.user)

  const formik = useFormik({
    initialValues: {
      text: '',
    },
    validationSchema: Yup.object({
      text: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required')
    }),
    onSubmit: (values, { resetForm }) => {
      FetchTool.searchProduct(values.text)
        .then(
          (data) => {
            if (data.length > 0) {
              setToast({
                show: true,
                message: "Navigating...",
                color: "green"
              })
              resetForm()
              setTimeout(() => {
                navigate("/product/" + data[0].id)
              }, 3100);
            } else {
              setToast({
                show: true,
                message: "Product not found",
                color: "red"
              })
              resetForm()
            }
          }
        )
    },
  });

  useEffect(() => {
    if (!toast.show) return
    setTimeout(() => {
      setToast({})
    }, 3000);
  }, [toast])

  return (
    <Nav $searchIcon={hideSearchIcon}>
      {
        toast.show && (
          <Toast bcolor={toast.color}>
            <ToastText color={toast.color}>
              {toast.message}
            </ToastText>
          </Toast>
        )
      }
      <Hamburger onClick={() => setShowAsideMenu(true)}>
        <img src={burger} alt="hamburger menu icon" />
      </Hamburger>
      <AsideMenu $show={showAsideMenu} $searchIcon={hideSearchIcon}>
        <ul>
          <li className="asideHeader">
            <AsideLogo>
              <img src={mobileLogo} alt="" />
            </AsideLogo>
            <Closeburger onClick={() => setShowAsideMenu(false)}>
              <img src={closeburger} alt="hamburger menu icon" />
            </Closeburger>
          </li>
          {user.name && <li>
            <div className="profileSection">
              <div className="profileIMG">
                <img src={user.img} alt="profile pic" />
              </div>
              <p>{user.name}</p>
            </div>
          </li>}


          <li>
            <Link to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/category"}>
              Category
            </Link>
          </li>
          <li>
            <Link to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link to={"/contact"}>
              Contact
            </Link>
          </li>
          {!user.name && <li>
            <Link to={"/signin"}>
              <BasicButton>
                Login
              </BasicButton>
            </Link>
          </li>}
          {!user.name && <li>
            <Link to={"/signup"}>
              <BasicButton>
                Register
              </BasicButton>
            </Link>
          </li>}
          {user.name && <li>
            <Link to={"/cart"}>
              <BasicButton>
                Cart: {user.cart.length > 0 ? user.cart.length : 0}
              </BasicButton>
            </Link>
          </li>}
          {user.name && <li>
            <Link to={"/"} onClick={() => dispatch(logout())}>
              <BasicButton color={"#850000"} hover={"#b60000"}>
                Logout
              </BasicButton>
            </Link>
          </li>}
        </ul>
      </AsideMenu>
      <Logo>
        <img src={mobileLogo} alt="" />
      </Logo>

      <form onSubmit={formik.handleSubmit} className="searchDIV">
        <SearchMobile
          ref={searchMobileRef}
          onFocus={() => setHideSearchIcon(true)}
          onBlur={() => setHideSearchIcon(false)}
          autoComplete="off"
          onChange={formik.handleChange}
          value={formik.values.text}
          name='text'
          id='text'
          type="search"
          placeholder="Searh something"
          $searchIcon={hideSearchIcon}
        />

        <SearchMobileIcon
          onClick={() => searchMobileRef.current.focus()}
          $searchIcon={hideSearchIcon}>
          <img src={searchIcon} alt="search icon" />
        </SearchMobileIcon>
      </form>

    </Nav>
  )
}

export default MobileNavbar