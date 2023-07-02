import { SignupPageContainer, BoxSizing, Flex, EyeDiv, RegisterButton } from './style'
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
import { useRef } from 'react'
import FetchTool from '../../utils/FetchTool'

const SignupPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [type, setType] = useState("password")
  const [type2, setType2] = useState("password")
  const [loginButtonStatus, setLoginButtonStatus] = useState("false")
  const [toast, setToast] = useState({
    show: false,
    message: "",
    color: ""
  })
  const formRef = useRef(null)
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      password: '',
      rePassword: '',
      email: '',
      picture: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be 2 characters or more')
        .required('Required'),
      username: Yup.string()
        .min(3, 'Must be 3 characters or more')
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(16, 'Must be 16 characters or less')
        .required('Required'),
      rePassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      picture: Yup.string()
        .url('Invalid url')
        .required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      FetchTool.getUser(values.username)
        .then(
          (data) => {
            if (data) {
              if (data.username == values.username) {
                setToast({
                  show: true,
                  message: "Username already exists",
                  color: "red"
                })
                resetForm()
              } else if (data.email == values.email) {
                setToast({
                  show: true,
                  message: "Email already exists",
                  color: "red"
                })
                resetForm()
              }
            } else {
              FetchTool.postUser({
                id: crypto.randomUUID(10),
                name: values.name,
                username: values.username,
                password: values.password,
                email: values.email,
                isAdmin: false,
                img: values.picture,
                cart: []
              })
                .then(
                  (data) => {
                    dispatch(login(data))
                    setToast({
                      show: true,
                      message: "User created successfully",
                      color: "green"
                    })
                    resetForm()
                    setTimeout(() => {
                      navigate('/')
                    }, 3100);
                  }
                )
            }

          }
        )
    },
  });

  useEffect(() => {
    if (toast.show) {
      setLoginButtonStatus("true")
      setTimeout(() => {
        setToast({
          show: false,
          message: "",
          color: ""
        })
        setLoginButtonStatus("false")
      }, 3000);
    }
  }, [toast])

  document.body.style.backgroundColor = "#FCEED5"

  return (
    <SignupPageContainer>
      <BoxSizing>
        <BasicBox bcolor={"#003459"}>
          <form ref={formRef} >
            <Flex>
              <label htmlFor='name'>
                Name:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='name'
                  type="text"
                  name="name" placeholder="Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
              </BasicInput>
              {
                formik.touched.name && formik.errors.name && (
                  <ToastText color={"red"}>
                    {formik.errors.name}
                  </ToastText>
                )
              }
            </Flex>
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
            <Flex>
              <label htmlFor='rePassword'>
                Re-Password:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='rePassword'
                  type={type2}
                  name="rePassword" placeholder="Re-Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.rePassword}
                />
                <EyeDiv >
                  <img src={Eye} alt="password eye" onClick={() => setType2(type2 == "password" ? "text" : "password")} />
                </EyeDiv>
              </BasicInput>
              {
                formik.touched.rePassword && formik.errors.rePassword && (
                  <ToastText color={"red"}>
                    {formik.errors.rePassword}
                  </ToastText>
                )
              }
            </Flex>
            <Flex>
              <label htmlFor='email'>
                Email:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='email'
                  type="email"
                  name="email" placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                />
              </BasicInput>
              {
                formik.touched.email && formik.errors.email && (
                  <ToastText color={"red"}>
                    {formik.errors.email}
                  </ToastText>
                )
              }
            </Flex>
            <Flex>
              <label htmlFor='picture'>
                Picture Url:
              </label>
              <BasicInput>
                <input
                  autoComplete="off"
                  id='picture'
                  type="url"
                  name="picture" placeholder="Picture"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.picture}
                />
              </BasicInput>
              {
                formik.touched.picture && formik.errors.picture && (
                  <ToastText color={"red"}>
                    {formik.errors.picture}
                  </ToastText>
                )
              }
            </Flex>
          </form>
          <Flex>
            <RegisterButton onClick={formik.handleSubmit} canclick={loginButtonStatus}>
              <BasicButton color={"#002A48"} hover={"#00528C"}>
                Register
              </BasicButton>
            </RegisterButton>
            <Link to="/signin">
              <BasicButton >
                To Login Page
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
    </SignupPageContainer>
  )
}




export default SignupPage