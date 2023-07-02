import Register from "../../components/Register/Register"
import loginImg from "../../assets/login.png"

const RegisterView = () => {
  return (
    <div className="row justify-content-center align-items-center g-5">
      
     <div className="col-lg-6 col-sm-12">
     <div className=" rounded-3 border-primary p-3">
       <h2 className="text-center">Register</h2>
         <Register/>
     </div>
       </div>
     <div className="col-5 d-lg-block d-none"> 
     <img className="img-fluid rounded-3" src={loginImg} alt="" />
     </div>
    </div>
  )
}

export default RegisterView