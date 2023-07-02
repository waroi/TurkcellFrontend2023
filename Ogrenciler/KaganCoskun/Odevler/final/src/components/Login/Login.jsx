/* eslint-disable no-unused-vars */
import  {ErrorMessage, Form, Formik} from 'formik'
import { loginSchema } from '../../schemas'
import InputField from '../Shared/InputField'
import Button from '../Shared/Button'
import { Link, useNavigate } from 'react-router-dom'
import { login, setCookie } from '../../services/userControl'
import { useState } from 'react'
import { generateToken } from '../../services/jwt'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const navigate = useNavigate()

  const [error, setError] = useState("")

  return (
    <Formik
    validationSchema={loginSchema}
    initialValues={{
      email: '',
      password: ''
    }}
    onSubmit={async(values)=>{
      try {
        const user = await login(values)
        const {id,email,role} = user[0]
        const token =await generateToken(id,email,role)
        setCookie(token)
        toast.success('Giriş başarıyla yapıldı!', {
        position: toast.POSITION.BOTTOM_RIGHT})
        setTimeout(() => {
          navigate("/")
        }
        , 2000);
        

      } 
      catch (error) {
        setError(error.message)
      }
    }
    }
    
    >
      {({isValid,dirty})=>{
      return (
      <Form>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        <div className='my-3'>
          <InputField onFocus={()=>setError("")} name="email" placeholder="Email" />
          <ErrorMessage className='text-danger' name="email" component="small"/>
        </div>
        <div className='my-3'>
          <InputField onFocus={()=>setError("")} name="password" placeholder="Password" typeName="password" />
          <ErrorMessage className='text-danger' name="password" component="small"/>
        </div>
        <p className='py-2 text-center'>Not a Member Yet? <Link to={"/register"}>Register</Link> </p>
        <div className='d-flex justify-content-between'>
          <Button disabled={!isValid || !dirty} type='submit' isIconExist={true}>Login</Button>
          <p className='text-danger m-0'>{error}</p>
          </div>
      </Form> 
      )   }}
        
      
    </Formik>
  )
}

export default Login