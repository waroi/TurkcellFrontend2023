import React from "react";
import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const GeneralForm = () => {
  const { errors } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
  });
  return (
    <form>
      <div className="inputDiv">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Mail adresinizi giriniz"
          className={errors.email ? "input-error" : ""}
        />
      </div>
    </form>
  );
};

export default GeneralForm;
