import { useState } from "react";
import "./App.css";
import { yup } from "./components/yup";
import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <form onSubmit={formik.onSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            id="firstName"
            type="string"
            name="firstName"
            onChange={formik.handleChange}
          />
          <button type="submit">kaydet</button>
        </div>
      </form>
    </>
  );
}

export default App;
