import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import axios from "axios"

const CartItem = ({ cartItem, setCart }) => {
    const user = useSelector((state) => state.user.user)

    const deleteCartItem = async () => {

        const cartResponse = await axios.get(`http://localhost:3000/carts/${user.id}`)
        const cart = cartResponse.data.cart
        const newCart = cart.filter(inCart => inCart.productId != cartItem.productId)
        setCart(newCart)
        axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: newCart })
    }

    const incrementCart = async () => {
        console.log("clicked")
        const productResponse = await axios.get(`http://localhost:3000/products/${cartItem.productId}`)
        const product = productResponse.data;
        const cartResponse = await axios.get(`http://localhost:3000/carts/${user.id}`)
        const cart = cartResponse.data.cart

        if (cartItem.demand < product.rating.count) {
            const newProduct = {
                productId: cartItem.productId,
                title: cartItem.title,
                price: cartItem.price,
                image: cartItem.image,
                demand: cartItem.demand + 1
            }

            const newCart = cart.map(cartItem => {
                if (newProduct.productId == cartItem.productId) return newProduct
                return cartItem
            })
            setCart(newCart)
            await axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: newCart })
        }
        else console.log("You have hit the stock limit")
    }
    const decrementCart = async () => {
        console.log("clicked")
        const cartResponse = await axios.get(`http://localhost:3000/carts/${user.id}`)
        const cart = cartResponse.data.cart

        if (cartItem.demand > 1) {
            const newProduct = {
                productId: cartItem.productId,
                title: cartItem.title,
                price: cartItem.price,
                image: cartItem.image,
                demand: cartItem.demand - 1
            }

            const newCart = cart.map(cartItem => {
                if (newProduct.productId == cartItem.productId) return newProduct
                return cartItem
            })
            setCart(newCart)
            await axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: newCart })
        }
        else {
            const newCart = cart.filter(inCart => inCart.productId != cartItem.productId)
            setCart(newCart)
            await axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: newCart })

        }
    }
    return (
        <div className="d-flex justify-content-evenly align-items-center">
            <div className="info">
                <p>{cartItem.title} - {cartItem.price}</p>
            </div>
            <div className="amount d-flex justify-content-evenly align-items-center">
                <button onClick={decrementCart} className="decrement">-</button>
                <p>Demand:{cartItem.demand}</p>
                <button onClick={incrementCart} className="increment">+</button>
            </div>
            <button onClick={deleteCartItem} >Delete Item</button>
        </div>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
    setCart: PropTypes.func.isRequired
}

export default CartItem