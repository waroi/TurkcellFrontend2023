import { useFormik } from "formik";
import { basicSchema } from "../schemas";
import "../styles/SignUpForm.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUsers } from "../redux/slices/usersSlice";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

function SignUpForm() {
  const currentName = useRef("");
  const currentSurname = useRef("");
  const currentUsername = useRef("");
  const currentEmail = useRef("");
  const currentPassword = useRef("");

  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);

  const asyncFunction = async () => {
    const a = await users;
    console.log(a);
  };

  const handleAddUsers = () => {
    dispatch(
      addUsers({
        id: users.length + 1,
        name: currentName.current.name,
        surname: currentSurname.current.surname,
        username: currentUsername.current.username,
        email: currentEmail.current.email,
        password: currentPassword.current.password,
        is_admin: false,
      })
    );
  };

  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <form onSubmit={handleSubmit} className="signUpForm">
      <div className="inputDiv">
        <label>Name</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          ref={currentName}
          id="name"
          placeholder="Type a name"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div className="inputDiv">
        <label>Surname</label>
        <input
          type="text"
          value={values.surname}
          onChange={handleChange}
          ref={currentSurname}
          id="surname"
          placeholder="Type a surname"
          className={errors.surname ? "input-error" : ""}
        />
        {errors.surname && <p className="error">{errors.surname}</p>}
      </div>
      <div className="inputDiv">
        <label>Username</label>
        <input
          type="text"
          value={values.username}
          onChange={handleChange}
          ref={currentUsername}
          id="username"
          placeholder="Type a username"
          className={errors.username ? "input-error" : ""}
        />
        {errors.username && <p className="error">{errors.username}</p>}
      </div>
      <div className="inputDiv">
        <label>Email</label>
        <input
          type="email"
          value={values.email}
          onChange={handleChange}
          ref={currentEmail}
          id="email"
          placeholder="Type an email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div className="inputDiv">
        <label>Password</label>
        <input
          type="password"
          value={values.password}
          onChange={handleChange}
          ref={currentPassword}
          id="password"
          placeholder="Type a password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div className="inputDiv">
        <label>Confirm Password</label>
        <input
          type="password"
          value={values.confirmPassword}
          onChange={handleChange}
          id="confirmPassword"
          placeholder="Confirm your password"
          className={errors.confirmPassword ? "input-error" : ""}
        />
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} onClick={handleAddUsers}>
        Sign Up
      </button>
    </form>
  );
}

export default SignUpForm;
