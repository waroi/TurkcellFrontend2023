import { useEffect } from 'react'
import { CustomInput } from './styled';
import { useFormik } from 'formik';
import { LoginSchema } from '../../schemas';
import { Link, json, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import { loginUser } from '../../redux/slices/usersSlice'
import { getUserData } from '../../redux/helpers';
import { getUsers } from '../../redux/slices/usersSlice';
const Login = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  async function handleUsers(value) {
    value == "1" && toast.error("Password not confirmed", {
      autoClose: 2000,
    });
    value == "2" && toast.error("User not found!", {
      autoClose: 2000,
    });
  }
  useEffect(() => {
    async function fetchData() {
      const usersData = await getUserData(); 
      await dispatch(getUsers(usersData));
    }
    fetchData();
  }, [])
  async function sendUsers(values) {
    localStorage.setItem("users", JSON.stringify(values))
    await dispatch(loginUser(values));
    await toast.success("Logged in.", {
      autoClose: 2000,
    });
    await setTimeout(() => {
      navigate("/");
    }, 1000);
  }
  const onSubmit = async (values, actions) => {
    const findedUser = userData.items.find((item) => item.username == values.username);
    !findedUser && handleUsers("2")
    userData.items.length > 0 && findedUser.password == values.password ? sendUsers(findedUser) : handleUsers("1");

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema, onSubmit

  })
  return (
    <div>
      <ToastContainer />
      <div className="container">
        <div className="py-120 row justify-content-center">
          <div className='col-10 col-lg-5 rounded-5 bg-secondary mt-120 p-175 py-5 shadow'>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column align-items-center'>
              <h3 className='h3 mb-4'>Login</h3>
              <label htmlFor="username">Username:</label>
              <CustomInput
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
                placeholder='Please Enter a Username...'
                className={`${formik.errors.username ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
              />
              {formik.errors.username && <div className='text-danger error'>{formik.errors.username}</div>}

              <label className='mt-4' htmlFor="password">Password:</label>
              <CustomInput
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder='Please Enter Password'
                className={`${formik.errors.password ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
              />
              {formik.errors.password && <div className='text-danger error'>{formik.errors.password}</div>}
              <p className='mt-4'>Have you an account? You can <Link to="/signup" className='text-primary'>Sign Up</Link> from this link.</p>

              <button disabled={formik.isSubmitting} className='mt-4 btn btn-primary rounded-pill py-2 px-175' type="submit">
                {formik.isSubmitting ?
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div> : "Submit"
                }
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login