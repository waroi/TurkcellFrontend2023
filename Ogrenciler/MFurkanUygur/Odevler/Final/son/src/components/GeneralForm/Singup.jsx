import { fetchAllUsers, postNewUser } from "../../request/userRequest";
import { postNewUserCart } from "../../request/cartsRequest";
import { setLoginUser } from "../../redux/slices/loggedUser";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getUser } from "../../redux/slices/usersData";
import { DarkButton } from "../buttons/buttonStyle";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { SignupSchema } from "./schema";
import { useEffect } from "react";
import Error from "./Error";
import 'react-toastify/dist/ReactToastify.css';


const UserForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
    useEffect(() => {
        fetchAllUsers().then((data) => dispatch(getUser(data)));
    }, []);

    return (
        <div className="mt-5 pt-5">
            <h2 className="text-center">Please Signup...</h2>
            <Formik
                initialValues={{
                    id: self.crypto.randomUUID(),
                    username: "",
                    surname: "",
                    profile: "",
                    password: "",
                    confirmPassword: "",
                    isAdmin: false,
                    isLogin: true
                }}

                validationSchema={SignupSchema}
                onSubmit={(values, { resetForm }) => {
                    const findUser = getUsers.find((user) =>
                        user.username.toLowerCase() == values.username.toLowerCase() &&
                        user.surname.toLowerCase() == values.surname.toLowerCase() &&
                        user.password == values.password
                    )
                    if (findUser) {
                        toast.error("Bu isimde kullanıcı var!", {
                            position: "bottom-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            onClose: () => {
                                navigate("/login");
                            },
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    } else {
                        postNewUser(values).then(() => {
                            fetchAllUsers().then((data) => dispatch(getUser(data)));
                            const userCart = { id: values.id, name: values.username, cartItems: [] }
                            postNewUserCart(userCart)
                            dispatch(setLoginUser(values))
                            toast.success("Kayıt başarılı!")
                            navigate("/")
                        });
                    }
                    resetForm();
                }}
            >
                <div className="d-flex justify-content-center align-items-center ">
                    <Form className="border border-2 p-4 px-5 rounded-2">
                        <div className="d-flex flex-column">
                            <label htmlFor="username">Kullanıcı Adı:</label>
                            <Field type="text" id="username" name="username" className="form-control" />
                            <Error name="username" />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="surname">Soyadı:</label>
                            <Field type="text" id="surname" name="surname" className="form-control" />
                            <Error name="surname" />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="profile">Resim:</label>
                            <Field type="text" id="profile" name="profile" className="form-control" />
                            <Error name="profile" />
                        </div>
                        <div className="d-flex flex-column">
                            <label htmlFor="password">Parola:</label>
                            <Field type="password" id="password" name="password" className="form-control" />
                            <Error name="password" />
                        </div>

                        <div className="d-flex flex-column">
                            <label htmlFor="confirmPassword">Parola Doğrulama:</label>
                            <Field
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                className="form-control"
                            />
                            <Error name="confirmPassword" />
                        </div>

                        <DarkButton className="mx-auto mt-3" type="submit">Sign Up</DarkButton>
                    </Form>
                </div>
            </Formik>

        </div>
    );
};

export default UserForm;

