import { useSelector } from "react-redux";
import { useEffect, useState } from "react"
import axios from "axios"
const CartView = () => {
    const user = useSelector((state) => state.user.user)
    const [cart, setCart] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/carts/${user.id}`)
            .then(response => setCart(response.data.cart))

    }, [user.id])
    return (
        <div>
            {
                cart.length > 0
                    ? cart?.map((el, i) => (<p key={i} >{el.title}</p>))
                    : <h2>Cart is empty</h2>
            }
        </div>
    )
}

export default CartView