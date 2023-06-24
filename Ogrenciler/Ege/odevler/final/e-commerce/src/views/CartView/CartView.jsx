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


    const handleBuy = async () => {
        if (cart.length > 0) {
            for (const cartProduct of cart) {
                const currProduct = await axios.get(`http://localhost:3000/products/${cartProduct.productId}`)
                console.log(currProduct)
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