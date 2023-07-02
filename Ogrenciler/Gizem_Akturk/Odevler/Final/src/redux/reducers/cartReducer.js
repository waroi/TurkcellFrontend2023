export const cartReducer = (state = { cart: {id:0,userId:0,products:[{productId:0,name:"",price:0,stock:0,quantity:0}]} }, action) => {
    const item = action.payload;
    const existItem = state.cart?.products?.find((x) => x.productId === item?.productId);

    switch (action.type) {
        case "ADD_PRODUCT_TO_CART":
            if (existItem) {
                // update quantity
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        products: state.cart.products.map((x) =>
                            x.productId === existItem.productId ? {...x, quantity: x.quantity + item.quantity} : x
                        ),
                    },
                };
            } else if (state.cart.products.length === 0) {
                // add product to cart
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        products: [item],
                    },
                };
            }
            else {
                // add product to cart
                return {
                    ...state,
                    cart: {
                        ...state.cart,
                        products: [...state.cart.products, item],
                    },
                };
            }
        case "REMOVE_PRODUCT_FROM_CART":
            return {
                ...state,
                cart: {
                    ...state.cart,
                    products: state.cart.products.filter((x) => x.productId !== action.payload),
                },
            };
        case "GET_CART":
            return {
                ...state,
                cart: action.payload,
            };
        case "CREATE_ORDER":
            return {
                cart: {
                    id: 0,
                    userId: 0,
                    products: [],
                },
            };

        default:
            return state;
    }
}
