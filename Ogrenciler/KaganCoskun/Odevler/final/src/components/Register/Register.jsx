/* eslint-disable no-unused-vars */
import  {ErrorMessage, Form, Formik} from 'formik'
import { registerSchema } from '../../schemas'
import InputField from '../Shared/InputField'
import Button from '../Shared/Button'
import { Link,useNavigate } from 'react-router-dom'
import { register, setCookie } from '../../services/userControl'
import { useState } from 'react'
import { generateToken } from '../../services/jwt'
import { ToastContainer, toast } from 'react-toastify'
import { createBasket } from '../../services/basket'

const Register = () => {
const navigate = useNavigate()
  const [isUserExist, setIsUserExist] = useState("")


  return (
    <Formik
    validationSchema={registerSchema}
    initialValues={{
      email: '',
      password: '',
      confirmPassword: ''
    }}
    onSubmit={async(values)=> {
      try {
        const user=await register(values)
        const {id,email,role} = user
        const token =await generateToken(id,email,role)
        setCookie(token)
        toast.success('Giriş başarıyla yapıldı!', {
        position: toast.POSITION.BOTTOM_RIGHT})
        createBasket(id)
        setTimeout(() => {
          navigate("/")
        }
        , 2000);
        
      } 
      catch (error) {
        setIsUserExist(error.message)
      }
      }}
    
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
          <InputField onFocus={()=>setIsUserExist("")} name="email" placeholder="Email" />
          <ErrorMessage className='text-danger' name="email" component="small"/>
        </div>
        <div className='my-3'>
          <InputField name="password" placeholder="Password" typeName="password" />
          <ErrorMessage className='text-danger' name="password" component="small"/>
        </div>
        <div className='my-3'>
          <InputField name="confirmPassword" placeholder="Confirm Password" typeName="password" />
          <ErrorMessage className='text-danger' name="confirmPassword" component="small"/>
        </div>
        <p className='py-2 text-center'>Already have an account? <Link to={"/login"}>Login</Link> </p>
        <div className='d-flex align-items-center justify-content-between'>
          <Button disabled={!isValid || !dirty} type='submit' isIconExist={true}>Register</Button>
        <p className='text-danger text-center m-0'>{isUserExist}</p>

          </div>
      </Form> 
      )   }}
        
      
    </Formik>
  )
}

export default Register