import React from 'react'
import { useFormik } from 'formik'
const FormikForm = () => {
  const formik = useFormik({
    initialValues :{
      username :"",
      age:"",
      password:"",
      confirmpassword: "",
    }
    
  })
  return (
    <div>
 <form onSubmit={formik.handleSubmit}>
       <label htmlFor="username">Username</label>
       <input
         id="username"
         name="username"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.username}
       />
       <label htmlFor="age">Last Name</label>
       <input
         id="age"
         name="age"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.age}
       />
       <label htmlFor="password">Password</label>
       <input
         id="password"
         name="password"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.password}
       />
       <label htmlFor="confirmpassword">Confirm Password</label>
       <input
         id="confirmpassword"
         name="confirmpassword"
         type="password"
         onChange={formik.handleChange}
         value={formik.values.confirmpassword}
       />

       <button type="submit">Submit</button>
     </form>

    </div>
  )
}

export default FormikForm