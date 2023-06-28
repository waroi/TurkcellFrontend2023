import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import axios from "axios"
import { useFormik } from "formik";
import * as Yup from "yup";
import Form from "../../styledComponents/StyledForm"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import ButtonOutline from "../../styledComponents/ButtonOutline"
import StyledCartItem from "./StyledCartItem";
import deleteIcon from "../../assets/Close_Circle.svg"
import plusIcon from "../../assets/Add_Plus_Circle.svg"
import minusIcon from "../../assets/Remove_Minus_Circle.svg"

const CartItem = ({ cartItem, setCart }) => {
    const user = useSelector((state) => state.user.user)

    const formSchema = Yup.object().shape({
        demand: Yup.number().required("Demand is required").min(1, "Demand must be at least 1"),
    });

    const onSubmit = async (values) => {
        const newDemand = parseInt(values.demand, 10);

        if (newDemand >= 1) {
            const productResponse = await axios.get(
                `http://localhost:3000/products/${cartItem.productId}`
            );
            const product = productResponse.data;
            const cartResponse = await axios.get(
                `http://localhost:3000/carts/${user.id}`
            );
            const cart = cartResponse.data.cart;

            if (newDemand <= product.rating.count) {
                const newProduct = {
                    productId: cartItem.productId,
                    title: cartItem.title,
                    price: cartItem.price,
                    image: cartItem.image,
                    demand: newDemand,
                };

                const newCart = cart.map((cartItem) =>
                    cartItem.productId === newProduct.productId
                        ? newProduct
                        : cartItem
                );
                setCart(newCart);
                await axios.put(`http://localhost:3000/carts/${user.id}`, {
                    id: user.id,
                    cart: newCart,
                });
            } else {
                console.log("The demand exceeds the available stock.");
            }
        } else {
            console.log("The demand must be at least 1.");
        }
    }

    const { values, handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            demand: cartItem.demand,
        },
        validationSchema: formSchema,
        onSubmit
    });

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
        values.demand++
        if (cartItem.demand < product.rating.count) {
            const newProduct = {
                productId: cartItem.productId,
                title: cartItem.title,
                price: cartItem.price,
                image: cartItem.image,
                demand: values.demand
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
        values.demand--
        const cartResponse = await axios.get(`http://localhost:3000/carts/${user.id}`)
        const cart = cartResponse.data.cart

        if (cartItem.demand > 1) {
            const newProduct = {
                productId: cartItem.productId,
                title: cartItem.title,
                price: cartItem.price,
                image: cartItem.image,
                demand: values.demand
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
        <StyledCartItem className="col-lg-6 d-flex flex-column justify-content-center p-3">
            <div className="info d-flex align-items-center gap-5">
                <img src={cartItem.image} alt="" />
                <div className="cartItemText">
                    <p className="title">{cartItem.title}</p>
                    <p className="price">{cartItem.price}$</p>
                </div>
            </div>
            <div className="amount d-flex gap-5 align-items-center">
                <ButtonOutline onClick={decrementCart} className="decrement">
                    <img src={minusIcon} alt="minus" />
                </ButtonOutline>
                <Form onSubmit={handleSubmit}>
                    <input
                        type="number"
                        name="demand"
                        id="demand"
                        value={values.demand}
                        onChange={handleChange}
                    />
                    {errors.demand && <div className="error">{errors.demand}</div>}
                </Form>
                <ButtonOutline onClick={incrementCart} className="increment">
                    <img src={plusIcon} alt="plus" />
                </ButtonOutline>
            </div>
            <ButtonPrimary onClick={deleteCartItem} className="delete">
                <img src={deleteIcon} alt="delete" />
            </ButtonPrimary>
        </StyledCartItem>
    )
}

CartItem.propTypes = {
    cartItem: PropTypes.object.isRequired,
    setCart: PropTypes.func.isRequired
}

export default CartItem