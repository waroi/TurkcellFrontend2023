import { useFormik } from "formik"
import { signUpSchema } from "../../schemas";
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import Form from "../../styledComponents/StyledForm";
import warningIcon from "../../assets/Circle_Warning.svg"
import ButtonPrimary from "../../styledComponents/ButtonPrimary";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import { ToastContainer, toast } from "react-toastify"
const SignUpForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const initialValues = {
        name: '',
        lastname: '',
        email: '',
        age: '',
        password: '',
        repeatPassword: '',
    };

    const onSubmit = (values) => {
        const userData = {
            id: self.crypto.randomUUID(),
            name: values.name,
            lastname: values.lastname,
            email: values.email,
            imgURL: values.profileImgUrl,
            age: values.age,
            password: values.password,
            isAdmin: false
        }
        axios.get('http://localhost:3000/users')
            .then(response => {
                const users = response.data;
                const existingUser = users.find(user => user.email === userData.email);

                if (existingUser) {
                    toast.error("Email already exists")
                } else {
                    axios.post('http://localhost:3000/users', userData)
                        .then(() => {
                            axios.post('http://localhost:3000/carts', { id: userData.id, cart: [] })
                            dispatch(setUser(userData))
                            localStorage.setItem("userData", JSON.stringify(userData))
                            navigate("/")
                        })
                }
            })

    };

    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit
    });

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                    />
                    {errors.name && <div className="error"> <img src={warningIcon}></img> {errors.name}</div>}
                </div>

                <div>
                    <label htmlFor="lastname">Last Name:</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        onChange={handleChange}
                        value={values.lastname}
                    />
                    {errors.lastname && <div className="error"> <img src={warningIcon}></img> {errors.lastname}</div>}
                </div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    {errors.email && <div className="error"> <img src={warningIcon}></img> {errors.email}</div>}
                </div>

                <div>
                    <label htmlFor="profileImgUrl">Profile Image URL:</label>
                    <input
                        type="text"
                        id="profileImgUrl"
                        name="profileImgUrl"
                        onChange={handleChange}
                        value={values.profileImgUrl}
                    />
                    {errors.profileImgUrl && <div className="error"> <img src={warningIcon}></img> {errors.profileImgUrl}</div>}
                </div>


                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        name="age"
                        onChange={handleChange}
                        value={values.age}
                    />
                    {errors.age && <div className="error"> <img src={warningIcon}></img> {errors.age}</div>}
                </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                    />
                    {errors.password && <div className="error"> <img src={warningIcon}></img> {errors.password}</div>}
                </div>

                <div>
                    <label htmlFor="repeatPassword">Repeat Password:</label>
                    <input
                        type="password"
                        id="repeatPassword"
                        name="repeatPassword"
                        onChange={handleChange}
                        value={values.repeatPassword}
                    />
                    {errors.repeatPassword && (
                        <div className="error"> <img src={warningIcon}></img> {errors.repeatPassword}</div>
                    )}
                </div>

                <ButtonPrimary type="submit">Submit</ButtonPrimary>
                <Link className="ms-3 toPage" to={"/login"}>Already have an account?</Link>
            </Form>
            <ToastContainer />
        </div >
    )
}

export default SignUpForm