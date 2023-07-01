import { Formik, Field, Form, ErrorMessage } from "formik";
import { LoginSchema, SignupSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/usersData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers, updateUser } from "../../request/userRequest";
import { postNewUserCart } from "../../request/cartsRequest";
import { setLoginUser, updateIsAdmin } from "../../redux/slices/loggedUser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Error";


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const loggedUserData = useRef();
    // console.log(loggedUserData.current)
    const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
    // console.log(getUsers)

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
                        user.password.toLowerCase() == values.password.toLowerCase()
                    )
                    console.log(findUser.isLogin, "login değeri")
                    if (findUser) {
                        console.log(!findUser.isLogin, "login değeri")
                        updateUser(findUser.id, findUser)
                        dispatch(setLoginUser(findUser))
                        dispatch(updateIsAdmin())
                        const userCart = { id: findUser.id, name: findUser.username, cartItems: [] }
                        findUser ? "" : postNewUserCart(userCart)

                        navigate("/")
                    } else {
                        console.log("hata")
                        toast.error("Bilgilerinizi kontrol edin!")
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

                        <button type="submit">Giriş yap</button>
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
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { SignupSchema } from "./schema";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../../redux/slices/usersData";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchAllUsers, updateUser } from "../../request/userRequest";
// import { postNewUserCart } from "../../request/cartsRequest";
// import { setLoginUser, updateIsAdmin } from "../../redux/slices/loggedUser";


// const Login = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     // const loggedUserData = useRef();
//     // console.log(loggedUserData.current)
//     const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
//     // console.log(getUsers)

//     useEffect(() => {
//         fetchAllUsers().then((data) => dispatch(getUser(data)));
//     }, []);

//     return (
//         <div>
//             <h1>Giriş Yap</h1>
//             <Formik
//                 initialValues={{
//                     username: "",
//                     surname: "",
//                     password: "",
//                     confirmPassword: "",
//                     isAdmin: false,
//                     isLogin: true
//                 }}

//                 validationSchema={SignupSchema}
//                 onSubmit={(values, { resetForm }) => {
//                     const findUser = getUsers.find((user) =>
//                         user.username.toLowerCase() == values.username.toLowerCase() &&
//                         user.surname.toLowerCase() == values.surname.toLowerCase() &&
//                         user.password.toLowerCase() == values.password.toLowerCase()
//                     )
//                     console.log(findUser.isLogin, "login değeri")
//                     if (findUser) {
//                         console.log(!findUser.isLogin, "login değeri")
//                         updateUser(findUser.id, findUser)
//                         dispatch(setLoginUser(findUser))
//                         dispatch(updateIsAdmin())
//                         const userCart = { id: findUser.id, name: findUser.username, cartItems: [] }
//                         findUser ? console.log("spete ulaştık") : postNewUserCart(userCart).then(console.log("sepet oldu"))

//                         navigate("/")
//                     } else {
//                         alert("bilgiler yanlış girdin")
//                     }
//                     resetForm();

//                 }}
//             >
//                 <Form>
//                     <div>
//                         <label htmlFor="username">Kullanıcı Adı:</label>
//                         <Field type="text" id="username" name="username" />
//                         <ErrorMessage name="username" component="div" />
//                     </div>

//                     <div>
//                         <label htmlFor="surname">Soyadı:</label>
//                         <Field type="text" id="surname" name="surname" />
//                         <ErrorMessage name="surname" component="div" />
//                     </div>

//                     <div>
//                         <label htmlFor="password">Parola:</label>
//                         <Field type="password" id="password" name="password" />
//                         <ErrorMessage name="password" component="div" />
//                     </div>

//                     <div>
//                         <label htmlFor="confirmPassword">Parola Doğrulama:</label>
//                         <Field
//                             type="password"
//                             id="confirmPassword"
//                             name="confirmPassword"
//                         />
//                         <ErrorMessage name="confirmPassword" component="div" />
//                     </div>

//                     <button type="submit">Giriş yap</button>
//                 </Form>
//             </Formik>
//         </div >
//     );
// };

// export default Login;
