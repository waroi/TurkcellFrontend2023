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

    const handleBuy = () => {
        console.log("Buy complete")
        if (cart.length > 0) {
            cart.map(cartItem => {
                axios.get(`http://localhost:3000/products/${cartItem.productId}`)
                    .then(response => {
                        const newData = { ...response.data, rating: { rate: response.data.rating.rate, count: response.data.rating.count - cartItem.demand } }

                        axios.put(`http://localhost:3000/products/${cartItem.productId}`, newData)
                    })
                    .then(() => {
                        setCart([])
                        axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: [] })
                    })
            })
        }
    }
    return (
        <div>
            {
                cart.length > 0
                    ? cart.map((el, i) => (<CartItem key={i} cartItem={el} />))
                    : <h2>Cart is empty</h2>
            }
            <CartBuy disabled={cart.length == 0} handleBuy={handleBuy} />
        </div>
    )
}

export default CartView