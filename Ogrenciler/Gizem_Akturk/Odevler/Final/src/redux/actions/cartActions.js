import { fetchProductById } from "../../services/productService";
import { addProductToCart, updateCart , removeProductFromCart} from "../../services/CartService";
import { addDoc, collection, updateDoc, doc } from "@firebase/firestore";
import db  from '../../firebase/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addProductToCartAction = (productId, quantity) => {
    return async (dispatch, getState) => {
        try {
            const data = await fetchProductById(productId);

            dispatch({
                type: 'ADD_PRODUCT_TO_CART',
                payload: {
                    productId: parseInt(productId),
                    name: data.name,
                    price: data.price,
                    stock: data.stock,
                    quantity,
                }
            });

            // add product to cart in firebase
            await addProductToCart(getState().cart.cart.id, parseInt(productId),data.name, data.price, data.stock, quantity);

    localStorage.setItem('cart', JSON.stringify(getState().cart.cart));

            toast.success("Product added to cart", {
                position: toast.POSITION.TOP_RIGHT
            });

        } catch (error) {
            console.log(error);
        }
    }
}

export const getCartAction = () => {
    return async (dispatch) => {
        try {
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : null;
            console.log(cart);
            dispatch({
                type: 'GET_CART',
                payload: cart
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateCartAction = (cart) => {
    return async (dispatch) => {
        try {
            // update cart in firebase
            await updateCart(cart.id, cart.products);            
            dispatch({
                type: 'GET_CART',
                payload: cart
            });

            localStorage.setItem('cart', JSON.stringify(cart))
            
            toast.success("Cart updated", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const removeProductFromCartAction = (productId) => {
    return async (dispatch, getState) => {
        try {
            console.log(productId);
            // remove product from cart in firebase
            await removeProductFromCart(getState().cart.cart.id, productId);
            dispatch({
                type: 'REMOVE_PRODUCT_FROM_CART',
                payload: productId
            });

            localStorage.setItem('cart', JSON.stringify(getState().cart.cart))

            toast.success("Product removed from cart", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
        }
    }
}

// order actions
export const createOrderAction = () => {
    return async (dispatch, getState) => {
        try {
            // check products stock
            const products = getState().cart.cart.products;
            for (const product of products) {
                const data = await fetchProductById(product.productId);
                if(data.stock < product.quantity) {
                    alert(`Sorry, ${product.name} has only ${data.stock} items in stock.`);
                    return;
                }
            }

            const totalPrice = getState().cart.cart.products.reduce((total, product) => total + product.price * product.quantity, 0);
            // create order in firebase
            const order = {
                userId: getState().cart.cart.userId,
                products: getState().cart.cart.products,
                totalPrice: totalPrice,
                createdAt: new Date().toISOString()
            }
            console.log(order);
            // add order to firebase
            await addDoc(collection(db, "orders"), order);
            // delete cart from local storage
            const newcart = {
                id : getState().cart.cart.id,
                userId : getState().cart.cart.userId,
                products : []
            }
            await updateDoc(doc(db, "carts", getState().cart.cart.id), newcart);
            localStorage.setItem('cart', JSON.stringify(newcart))
            // dispatch action
            dispatch({
                type: 'CREATE_ORDER',
                payload: order
            });

            toast.success("Order created", {
                position: toast.POSITION.TOP_RIGHT
            });
        } catch (error) {
            console.log(error);
        }
    }
}