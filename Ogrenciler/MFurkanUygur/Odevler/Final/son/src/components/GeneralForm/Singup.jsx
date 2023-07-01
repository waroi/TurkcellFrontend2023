import { Formik, Field, Form, ErrorMessage } from "formik";
import { SignupSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/usersData";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllUsers, postNewUser } from "../../request/userRequest";
import { postNewUserCart } from "../../request/cartsRequest";
import { setLoginUser } from "../../redux/slices/loggedUser";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Error from "./Error";


const UserForm = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
    // console.log(getUsers)
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
                        user.password.toLowerCase() == values.password.toLowerCase()
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
                            postNewUserCart(userCart).then(console.log("sepet oluşturuldu"))
                            dispatch(setLoginUser(values))

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

                        <button type="submit">Gönder</button>
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
        </div>
    );
};

export default UserForm;
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { SignupSchema } from "./schema";
// import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../../redux/slices/usersData";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { fetchAllUsers, postNewUser } from "../../request/userRequest";
// import { postNewUserCart } from "../../request/cartsRequest";
// import { setLoginUser } from "../../redux/slices/loggedUser";


// const UserForm = () => {

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     const getUsers = useSelector((state) => state.getUsersName.mainUsersArray);
//     // console.log(getUsers)
//     useEffect(() => {
//         fetchAllUsers().then((data) => dispatch(getUser(data)));
//     }, []);
//     return (
//         <div>
//             <h1>Kayıt Ol</h1>
//             <Formik
//                 initialValues={{
//                     id: self.crypto.randomUUID(),
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
//                     if (findUser) {
//                         alert("kullanıcı var git giriş yap")
//                         navigate("/login")
//                     } else {
//                         postNewUser(values).then(() => {
//                             fetchAllUsers().then((data) => dispatch(getUser(data)));
//                             const userCart = { id: values.id, name: values.username, cartItems: [] }
//                             postNewUserCart(userCart).then(console.log("sepet oluşturuldu"))
//                             dispatch(setLoginUser(values))

//                             navigate("/")
//                         });
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

//                     <button type="submit">Gönder</button>
//                 </Form>
//             </Formik>
//         </div>
//     );
// };

// export default UserForm;
