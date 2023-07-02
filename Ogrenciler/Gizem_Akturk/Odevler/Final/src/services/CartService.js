import db  from '../firebase/firebase';
import { collection, addDoc, doc, getDoc,query, where, getDocs, updateDoc  } from "firebase/firestore"; 
// create a new cart with user id
export const createCart = async (userId) => {
    try {
        const docRef = await addDoc(collection(db, "carts"), {
            userId: userId,
            products: []
        });
        return docRef.id;
    } catch (error) {
        console.log(error);
    }
}

// get cart by user id
export const getCartByUserId = async (userId) => {
    try {
        const cartsRef = collection(db, "carts");
        const q = query(cartsRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        // return cart
        return querySnapshot.docs[0];
    } catch (error) {
        console.log(error);
    }
}

// add product to cart if product has enough stock
export const addProductToCart = async (cartId, productId, name, price, stock, quantity) => {
    try {
        const cartRef = doc(db, "carts", cartId);
        const docRef = await getDoc(cartRef);
        const cart = docRef.data();
        console.log(cart);
        const products = cart.products;
        // check if product already in cart
        const index = products.findIndex(product => product.productId === productId);
        // if product already in cart
        if(index !== -1) {
            // update quantity
            products[index].quantity += quantity;
        } else {
            // add product to cart
            products.push({
                productId: productId,
                name: name,
                price: price,
                stock: stock,
                quantity: quantity
            });
        }
        console.log(products);
        // update cart
        await updateDoc(cartRef, {
            products: products
        });
        
    } catch (error) {
        console.log(error);
    }
}

// remove product from cart and update quantity
export const removeProductFromCart = async (cartId, productId) => {
    try {
        const cartRef = doc(db, "carts", cartId);
        const docRef = await getDoc(cartRef);
        const cart = docRef.data();
        const products = cart.products;
        // check if product already in cart
        const index = products.findIndex(product => product.productId === productId);
        // if product already in cart
        if(index !== -1) {
                products.splice(index, 1);
            
        }
        
        // update cart
        await updateDoc(cartRef, {
            products: products
        });
    } catch (error) {
        console.log(error);
    }
}

// get cart by cart id
export const getCart = async (cartId) => {
    try {
        const cartRef = doc(db, "carts", cartId);
        const docRef = await getDoc(cartRef);
        return docRef.data();
    } catch (error) {
        console.log(error);
    }
}   

// update cart
export const updateCart = async (cartId, products) => {
    try {
        const cartRef = doc(db, "carts", cartId);
        await updateDoc(cartRef, {
            products: products
        });
    } catch (error) {
        console.log(error);
    }
}