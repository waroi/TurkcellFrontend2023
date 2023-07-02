import { setLoginUser, updateIsAdmin } from "../../redux/slices/loggedUser";
import { fetchAllUsers, updateUser } from "../../request/userRequest";
import { postNewUserCart } from "../../request/cartsRequest";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/usersData";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import { LoginSchema } from "./schema";
import { useEffect } from "react";
import Error from "./Error";
import 'react-toastify/dist/ReactToastify.css';
import { DarkButton } from "../buttons/buttonStyle";


const Login = () => {
    const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllUsers().then((data) => dispatch(getUser(data)));
    }, []);

    return (
        <div className="mt-5 pt-5">
            <h2 className="text-center">Please Login...</h2>
            <Formik
                initialValues={{
                    username: "",
                    surname: "",
                    password: "",
                    confirmPassword: "",
                    isAdmin: false,
                    isLogin: true
                }}

                validationSchema={LoginSchema}
                onSubmit={(values, { resetForm }) => {
                    const findUser = getUsers.find((user) =>
                        user.username.toLowerCase() == values.username.toLowerCase() &&
                        user.surname.toLowerCase() == values.surname.toLowerCase() &&
                        user.password == values.password
                    )
                    if (findUser) {
                        updateUser(findUser?.id, findUser)
                        dispatch(setLoginUser(findUser))
                        dispatch(updateIsAdmin())
                        const userCart = { id: findUser?.id, name: findUser?.username, cartItems: [] }
                        findUser ? "" : postNewUserCart(userCart)
                        toast.success("Giriş başarılı!")
                        navigate("/")
                    } else {
                        !findUser && toast.error("Lütfen bilgilerinizi kontrol ediniz!", {
                            position: "bottom-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
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

                        <DarkButton className="mx-auto mt-3" type="submit">Giriş yap</DarkButton>
                    </Form>
                </div>
            </Formik>
            <ToastContainer
                position="bottom-right"
                autoClose={1050}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div >
    );
};

export default Login;
