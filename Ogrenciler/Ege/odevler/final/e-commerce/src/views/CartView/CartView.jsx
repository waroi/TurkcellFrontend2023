import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import axios from "axios"
import CartItem from "../../components/CartItem/CartItem";
import CartBuy from "../../components/CartBuy/CartBuy";
const CartView = () => {
    const user = useSelector((state) => state.user.user)
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/carts/${user.id}`)
            .then(response => setCart(response.data.cart))

    }, [user.id])

    useEffect(() => { updateCart() }, [])

    const updateCart = async () => {
        const productResponse = await axios.get('http://localhost:3000/products');
        const products = productResponse.data;

        const cartResponse = await axios.get(`http://localhost:3000/carts/${user.id}`);
        const cartData = cartResponse.data.cart;

        const updatedCart = cartData.map(cartItem => {
            const product = products.find(product => product.id === cartItem.productId)
            if (product) {
                const updatedStock = Math.min(product.rating.count, cartItem.demand)
                return { ...cartItem, demand: updatedStock }
            }

            return cartItem
        })

        setCart(updatedCart.filter(cartItem => cartItem.demand > 0))
        await axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: updatedCart.filter(cartItem => cartItem.demand > 0) })
    }

    const handleBuy = async () => {
        const productResponse = await axios.get('http://localhost:3000/products');
        const products = productResponse.data;

        const shouldUpdate = cart.some(cartItem => products.find(product => product.id == cartItem.productId).rating.count < cartItem.demand)

        if (shouldUpdate) {
            console.log("There is an update in your cart")
            updateCart()
        }

        else {
            for (const cartProduct of cart) {
                const currProduct = await axios.get(`http://localhost:3000/products/${cartProduct.productId}`)
                const newData = {
                    ...currProduct.data,
                    rating: {
                        rate: currProduct.data.rating.rate,
                        count: currProduct.data.rating.count - cartProduct.demand
                    }
                }
                await axios.put(`http://localhost:3000/products/${cartProduct.productId}`, newData)
                setCart([])
                await axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: [] })
            }
        }
    }

    return (
        <div className="container">
            <div className="row ">

                {
                    cart.length > 0
                        ? cart.map((el, i) => (<CartItem key={i} cartItem={el} setCart={setCart} />))
                        : <h2>Cart is empty</h2>
                }
            </div>
            <CartBuy disabled={cart.length == 0} handleBuy={handleBuy} />
        </div>
    )
}

export default CartView