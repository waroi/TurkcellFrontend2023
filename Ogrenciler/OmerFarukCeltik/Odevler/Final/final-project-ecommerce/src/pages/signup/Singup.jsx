import React from 'react'
import { useFormik } from 'formik'
import { CustomInput } from './styled'
import { SignupSchema } from '../../schemas'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from "react-toastify";
import { registerUser } from '../../redux/slices/usersSlice'
const Singup = () => {
  const userData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUsers = () =>
  toast.error("email or username already registered!", {
    autoClose: 2000,
  });
  async function sendUsers(values){
    await dispatch(registerUser(values));
    await toast.success("Registeration completed!", {
      autoClose: 2000,
    });
   await setTimeout(()=> {
    navigate("/");
   },1000);
  } 
  const onSubmit = async (values, actions) => {
   userData.items.length > 0 && userData.items.find((item) => item.email == values.email || item.username == values.username) ? handleUsers() : sendUsers(values) ;
  
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      image:"../../../images/avatar.png",
      id:Date.now(),
      isAdmin: false,
      isLoggedIn:true
    },
    validationSchema: SignupSchema,onSubmit
    
  })
  return (
    <div>
      <div className="container">
      <ToastContainer />
        <div className="py-120 row justify-content-center">
          <div className='col-10 col-lg-5 rounded-5 bg-secondary mt-5 p-175 py-5 shadow'>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column align-items-center'>
              <h3 className='h3 mb-4'>Sign Up</h3>
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
              <label className='mt-4' htmlFor="username">Email:</label>
              <CustomInput
                id="username"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder='Please Enter Email...'
                className={`${formik.errors.email ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                {formik.errors.email && <div className='text-danger error'>{formik.errors.email}</div>}

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
              <label className='mt-4' htmlFor="confirmPassword">Confirm Password:</label>
              <CustomInput
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                placeholder='Confirm Your Password'
                className={`${formik.errors.confirmPassword ? "border-1 border-danger" : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                <label className='mt-4' htmlFor="confirmPassword">Avatar Url:</label>
              <CustomInput
                id="image"
                name="image"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.image}
                placeholder='Confirm Your Password'
                className={` : ""} w-100 rounded-pill mt-2 shadow-sm`}
                />
                <div className='font-italic text-muted fs-6 w-100 mt-2'>If you didn't add avatar, system automaticly add base avatar.</div>
                <p className='mt-4'>Have you an account? You can <Link to="/login" className='text-primary'>Login</Link> from this link.</p>

                <button disabled={formik.isSubmitting} className='mt-4 btn btn-primary rounded-pill py-2 px-175' type="submit"> 
                { formik.isSubmitting  ?
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

export default Singup