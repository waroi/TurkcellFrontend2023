import db  from '../firebase/firebase';
import { collection, query, where, getDocs  } from "firebase/firestore"; 


// get all products
export const fetchAllProducts = async () => {
    try {
        const productsRef = collection(db, "products");
        const querySnapshot = await getDocs(productsRef);
        // return products
        return querySnapshot.docs;
    } catch (error) {
        console.log(error);
    }
}

export const fetchProductById = async (productId) => {
    try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("id", "==", parseInt(productId)));
        const querySnapshot = await getDocs(q);
        
        if (!querySnapshot.empty) {
            // return the first document that matches the query
            return querySnapshot.docs[0].data();
        } else {
            throw new Error(`No product found with id: ${productId}`);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const fetchProductsByCategory = async (category) => {
    try {
        console.log(category);
        const productsRef = collection(db, "products");
        if (category.toLowerCase() === "all") {
            const querySnapshot = await getDocs(productsRef);
            // return products
            return querySnapshot.docs;
        } 
        const q = query(productsRef, where("category", "==", category));
        const querySnapshot = await getDocs(q);
        // return products
        return querySnapshot.docs;
    } catch (error) {
        console.log(error);
    }
}

export const fetchProductsBySearch = async (search) => {
    try {
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("name", "==", search));
        const querySnapshot = await getDocs(q);
        // return products
        return querySnapshot.docs;
    } catch (error) {
        console.log(error);
    }
}