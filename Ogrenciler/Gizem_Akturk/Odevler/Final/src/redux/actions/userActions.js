import { getUserByEmail, addUser } from '../../services/UserService';
import { getCartByUserId } from "../../services/CartService";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const login = (user) => {
    return async (dispatch) => {
        try {
            // login user
            const userRef = await getUserByEmail(user.email);
            // if user exists
            if (userRef) {
                const userDoc = userRef.data();
                // check if password matches
                if (userDoc.password === user.password) {
                    const userInfo = {
                        userId: userRef.id,
                        name: userDoc.name,
                        email: userDoc.email
                    };
                    // login user
                    dispatch({
                        type: 'LOGIN',
                        payload: userInfo
                    });
                    // get cart for user
                    const cartDocFromDB = await getCartByUserId(userInfo.userId);
                    const cartFromDB = cartDocFromDB.data();
                    if (cartFromDB) {

                        const cartInfo = {
                            id: cartDocFromDB.id,
                            ...cartFromDB,
                        };

                        localStorage.setItem('cart', JSON.stringify(cartInfo));
                    }
                    localStorage.setItem("userInfo", JSON.stringify(userInfo));

                    toast.success("Login Successful", {
                        position: toast.POSITION.TOP_RIGHT
                    });

                } else {
                    toast.error("Invalid Password", {
                        position: toast.POSITION.TOP_RIGHT
                    });

                }
            } else {
                toast.error("Invalid Email", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        } catch (error) {
            toast.error("Something went wrong! Try again!" + error, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error);
        }
    }
}

export const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("cart");
    toast.success("Logout Successful", {
        position: toast.POSITION.TOP_RIGHT
    });
    return {
        type: 'LOGOUT',
    };
}

export const register = (user) => {
    return async (dispatch) => {
        try {
            // register user
            const userRef = await getUserByEmail(user.email);
            // if user does not exist
            if (!userRef) {
                // register user
                const id = await addUser(user);
                const userInfo = {
                    userId: id,
                    name: user.name,
                    email: user.email
                };
                // login user
                dispatch({
                    type: 'LOGIN',
                    payload: userInfo
                });
                // get cart for user
                const cartDocFromDB = await getCartByUserId(userInfo.userId);
                const cartFromDB = cartDocFromDB.data();
                if (cartFromDB) {

                    const cartInfo = {
                        id: cartDocFromDB.id,
                        ...cartFromDB,
                    };

                    localStorage.setItem('cart', JSON.stringify(cartInfo));
                }
                localStorage.setItem("userInfo", JSON.stringify(userInfo));

                toast.success("Registration Successful", {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                toast.error("Email already exists", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        } catch (error) {
            toast.error("Something went wrong! Try again!" + error, {
                position: toast.POSITION.TOP_RIGHT
            });
            console.log(error);
        }
    }
}