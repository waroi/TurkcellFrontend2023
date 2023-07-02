import { fetchAllProducts, fetchProductById, fetchProductsByCategory, fetchProductsBySearch } from "../../services/productService";


export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const products = await fetchAllProducts();
            const productsInfo = products.map((product) => {
                return {
                    id: product.id,
                    ...product.data(),
                };
            });
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: productsInfo,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchProductsByCategoryAction = (category) => {
    return async (dispatch) => {
        try {
            const products = await fetchProductsByCategory(category);
            const productsInfo = products.map((product) => {
                return {
                    id: product.id,
                    ...product.data(),
                };
            });
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: productsInfo,
            });
        } catch (error) {
            console.log(error);
        }
    }
}
export const fetchProductsByPriceRangeAndCategoryAction = (min, max, category) => {
    return async (dispatch) => {
        try {
            if (min === "") min = 0;
            if (max === "") max = 100000;
            max = parseInt(max);
            console.log(min, max, category);
            const products = await fetchProductsByCategory(category);
            const productsInfo = products.map((product) => {
                return {
                    id: product.id,
                    ...product.data(),
                };
            });

            const filteredProducts = productsInfo.filter((product) => {
                return product.price >= min && product.price <= max;
            });
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: filteredProducts,
            });
        } catch (error) {
            console.log(error);
        }
    }
}


export const fetchProductsBySearchAction = (search) => {
    return async (dispatch) => {
        try {
            const products = await fetchProductsBySearch(search);
            console.log(products);
            const productsInfo = products.map((product) => {
                return {
                    id: product.id,
                    ...product.data(),
                };
            });
            dispatch({
                type: 'FETCH_PRODUCTS',
                payload: productsInfo,
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getProduct = (id) => {
    return async (dispatch) => {
        try {
            const product = await fetchProductById(id);
            console.log(product)
            dispatch({
                type: 'GET_PRODUCT',
                payload: product,
            });
        } catch (error) {
            console.log(error);
        }
    }
}