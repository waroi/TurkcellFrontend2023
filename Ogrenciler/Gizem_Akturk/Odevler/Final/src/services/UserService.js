import db  from '../firebase/firebase';
import { collection, addDoc, doc, getDoc,query, where, getDocs  } from "firebase/firestore"; 
import { createCart } from './CartService';
// add user
export const addUser = async (user) => {
    try {
        const docRef = await  addDoc(collection(db, "users"), {
            email: user.email,
            password: user.password
        });
        // create cart for user
        await createCart(docRef.id);
       return docRef.id;
    } catch (error) {
        console.log(error);
    }
}

// get user
export const getUser = async (id) => {
    try {
        const docRef = await getDoc(doc(db, "users", id));
        console.log("Document data:", docRef.data());
    } catch (error) {
        console.log(error);
    }
}

// get user by email
export const getUserByEmail = async (email) => {
    try {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", email));
        const querySnapshot = await getDocs(q);
        // return user
        return querySnapshot.docs[0];
    } catch (error) {
        console.log(error);
    }
}