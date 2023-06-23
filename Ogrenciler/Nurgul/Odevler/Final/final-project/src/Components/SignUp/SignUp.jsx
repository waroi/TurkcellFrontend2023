import { useFormik } from "formik";
import { signUpSchema } from "../../schemas";
import axios from "axios";
import { Container, Form } from "../Style/styled-form";

const SignUp = () => {
  const initialValues = {
    name: "",
    lastname: "",
    email: "",
    image: "",
    age: "",
    password: "",
    repeatPassword: "",
  };

  const onSubmit = (values, { resetForm }) => {
    const userData = {
      id: self.crypto.randomUUID(),
      name: values.name,
      lastname: values.lastname,
      email: values.email,
      image: values.image,
      age: values.age,
      password: values.password,
      Admin: false,
      cart: [],
    };
    console.log(userData);
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const users = response.data;
        const existingUser = users.find(
          (user) => user.email === userData.email
        );

        if (existingUser) {
          console.log("Email already exists:", existingUser.email);
        } else {
          axios
            .post("http://localhost:3000/users", userData)
            .then((response) => {
              console.log("Data has been successfully pushed:", response.data);
            })
            .catch((error) => {
              console.error("An error occurred:", error);
            });
        }
      })
      .catch((error) => {
        console.error("An error occurred while fetching users:", error);
      });
    resetForm();
  };

  const { handleChange, handleSubmit, values, errors, resetForm } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit,
  });

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            value={values.name}
          />
          {errors.name && <div className="error">{errors.name}</div>}
        </div>

        <div>
          <label htmlFor="lastname">Last Name:</label>
          <br />
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            value={values.lastname}
          />
          {errors.lastname && <div className="error">{errors.lastname}</div>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>

        <div>
          <label htmlFor="image">Profile Image URL:</label>
          <br />
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleChange}
            value={values.image}
          />
          {errors.image && <div className="error">{errors.image}</div>}
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <br />
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            value={values.age}
          />
          {errors.age && <div className="error">{errors.age}</div>}
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={values.password}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>

        <div>
          <label htmlFor="repeatPassword">Repeat Password:</label>
          <br />
          <input
            type="password"
            id="repeatPassword"
            name="repeatPassword"
            onChange={handleChange}
            value={values.repeatPassword}
          />
          {errors.repeatPassword && (
            <div className="error">{errors.repeatPassword}</div>
          )}
        </div>

        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </Container>
  );
};

export default SignUp;
