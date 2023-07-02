import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../../redux/Slicers/userSlice"
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BasicButton from '../../Elements/buttons/BasicButton'
import ToastText from '../../Elements/toast/ToastText'
import Toast from '../../Elements/toast/Toast'
import FetchTool from '../../../utils/fetchTool'
import { Nav, List, ProfileAside, Container } from './style'
import Logo from '../../../assets/computer_logo.png'
import SearchLogo from '../../../assets/search_icon_computer.png'

const ComputerNavbar = () => {
  const [profileAside, setProfileAside] = useState(false)
  const [toast, setToast] = useState({})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const handleLogout = () => {
    dispatch(logout())
    setProfileAside(false)
  }

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
    <Nav>
      {
        toast.show && (
          <Toast bcolor={toast.color}>
            <ToastText color={toast.color}>
              {toast.message}
            </ToastText>
          </Toast>
        )
      }
      <Container>
        <div>
          <img src={Logo} alt="" />
        </div>
        <List>
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
        </List>
        <form onSubmit={formik.handleSubmit} className='searchDIVC'>
          <div className='searchLogo'>
            <img src={SearchLogo} alt="" />
          </div>
          <input
            autoComplete="off"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.text}
            name='text'
            id='text'
            type="search"
            placeholder="Search something here!" />
        </form>
        {
          !user.name ? (
            <Link to={"/signin"}>
              <BasicButton>
                Login
              </BasicButton>
            </Link>) : (
            <Link to={"/cart"}>
              <BasicButton>
                Cart: {user.cart.length > 0 ? user.cart.length : 0}
              </BasicButton>
            </Link>
          )
        }
        {
          !user.name ? (
            <Link to={"/signup"}>
              <BasicButton>
                Register
              </BasicButton>
            </Link>) : (
            <div className='profileDIV'
              onClick={() => setProfileAside(prev => !prev)}>
              <img src={user.img} alt="profile pic" />
            </div>
          )
        }
        {
          profileAside && (
            <ProfileAside>
              <div className='profileName'>
                <p>
                  {user.name}
                </p>
              </div>
              <Link to={"/"} onClick={handleLogout}>
                <BasicButton color={"#850000"} hover={"#b60000"}>
                  Logout
                </BasicButton>
              </Link>
            </ProfileAside>
          )
        }
      </Container>
    </Nav>
  )
}

export default ComputerNavbar