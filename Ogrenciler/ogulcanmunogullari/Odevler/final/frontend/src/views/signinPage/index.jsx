import { SigninPageContainer, BoxSizing, Flex, EyeDiv, LoginButton } from './style'
import BasicBox from '../../components/Elements/boxes/BasicBox'
import Eye from '../../assets/password_eye.png'
import BasicInput from '../../components/Elements/inputs/BasicInput'
import BasicButton from '../../components/Elements/buttons/BasicButton'
import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Slicers/userSlice'
import ToastText from '../../components/Elements/toast/ToastText'
import Toast from '../../components/Elements/toast/Toast'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import FetchTool from '../../utils/FetchTool'

const SigninPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [type, setType] = useState("password")
  const [loginButtonStatus, setLoginButtonStatus] = useState(false)
  const [toast, setToast] = useState({
    show: false,
    message: "",
    color: ""
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(16, 'Must be 16 characters or less')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      FetchTool.getUser(values.username)
        .then(
          (data) => {
            if (data == undefined) {
              setToast({
                show: true,
                message: "User not found",
                color: "red"
              })
              resetForm()
            }
            else if (data.password != values.password) {
              setToast({
                show: true,
                message: "Wrong password",
                color: "red"
              })
              resetForm()
            }
            else if (data.password == values.password) {
              dispatch(login(data))
              setToast({
                show: true,
                message: "Login successful, redirecting...",
                color: "green"
              })
              resetForm()
              setTimeout(() => {
                navigate("/")
              }, 3100);
            }
          }
        )
    },
  });

  useEffect(() => {
    if (toast.show) {
      setLoginButtonStatus(true)
      setTimeout(() => {
        setToast({
          show: false,
          message: "",
          color: ""
        })
        setLoginButtonStatus(false)
      }, 3000);
    }
  }, [toast])

  document.body.style.backgroundColor = "#FCEED5"

  return (
    <SigninPageContainer>
      <BoxSizing>
        <BasicBox bcolor={"#003459"}>
          <form >
            <Flex>
              <label htmlFor='username'>
                Username:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='username'
                  type="text"
                  name="username" placeholder="Username"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                />
              </BasicInput>
              {
                formik.touched.username && formik.errors.username && (
                  <ToastText color={"red"}>
                    {formik.errors.username}
                  </ToastText>
                )
              }
            </Flex>
            <Flex>
              <label htmlFor='password'>
                Password:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='password'
                  type={type}
                  name="password" placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <EyeDiv >
                  <img src={Eye} alt="password eye" onClick={() => setType(type == "password" ? "text" : "password")} />
                </EyeDiv>
              </BasicInput>
              {
                formik.touched.password && formik.errors.password && (
                  <ToastText color={"red"}>
                    {formik.errors.password}
                  </ToastText>
                )
              }
            </Flex>
          </form>
          <Flex>
            <LoginButton onClick={formik.handleSubmit} canclick={String(loginButtonStatus)}>
              <BasicButton >
                Login
              </BasicButton>
            </LoginButton>
            <Link to="/signup">
              <BasicButton color={"#002A48"} hover={"#00528C"}>
                To Register Page
              </BasicButton>
            </Link>
          </Flex>
        </BasicBox>
      </BoxSizing>
      {
        toast.show && (
          <Toast bcolor={toast.color}>
            <ToastText color={toast.color}>
              {toast.message}
            </ToastText>
          </Toast>
        )
      }
    </SigninPageContainer>
  )
}

export default SigninPage