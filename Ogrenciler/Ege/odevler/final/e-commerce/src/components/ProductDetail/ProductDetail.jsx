import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import Carousel from "./Carousel/Carousel"
import ProductInfo from "./ProductInfo/ProductInfo"
import RandomProducts from "./RandomProducts/RandomProducts"
import { ToastContainer, toast } from "react-toastify"
import { setCartLength } from "../../redux/slices/cartLengthSlice"
import PropTypes from "prop-types"

const ProductDetail = ({ id }) => {

    const [product, setProduct] = useState({});
    const user = useSelector((state) => state.user.user)
    const cartLength = useSelector(state => state.cartLength)
    const dispatch = useDispatch()
    const [randomProducts, setRandomProducts] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => setProduct(response.data))
    }, [id]);

    useEffect(() => {
        axios.get("http://localhost:3000/products")
            .then(response => {
                setRandomProducts(response.data.filter(responseProduct => responseProduct.id != product.id).sort(() => Math.random() - 0.5).slice(0, 8))
            })
    }, [product.id])

    const handleCartClick = () => {
        if (product.rating?.count > 0) {
            axios.get(`http://localhost:3000/carts/${user.id}`)
                .then((response) => {
                    const inCart = response.data.cart.find(cartItem => cartItem.productId == product.id)
                    if (inCart) {
                        if (inCart.demand < product.rating.count) {
                            toast.success("Added to cart again")
                            const newProduct = {
                                productId: inCart.productId,
                                title: inCart.title,
                                price: inCart.price,
                                image: inCart.image,
                                demand: inCart.demand + 1
                            }
                            const newCart = response.data.cart.map(cartItem => {
                                if (newProduct.productId == cartItem.productId) return newProduct
                                return cartItem

                            })
                            axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: newCart })
                        }
                        else toast.error("You have hit the stock limit")
                    } else {
                        toast.success("Added to cart")
                        dispatch(setCartLength(cartLength + 1))
                        const newProduct = {
                            productId: product.id,
                            title: product.title,
                            price: product.price,
                            image: product.image,
                            demand: 1
                        }
                        axios.put(`http://localhost:3000/carts/${user.id}`, { id: user.id, cart: [...response.data.cart, newProduct] })
                    }
                })
        }
    }


    return (
        <div className='container'>
            <div className="row justify-content-center mt-5">
                <div className="col-lg-6">
                    <Carousel img={product.image} />
                </div>
                <div className="col-lg-6">
                    <ProductInfo product={product} handleCartClick={handleCartClick} isAdmin={user.isAdmin} setProduct={setProduct} toast={toast} />
                </div>
            </div>
            <RandomProducts randomProducts={randomProducts} />
            <ToastContainer />
        </div>
    )
}

ProductDetail.propTypes = {
    id: PropTypes.string.isRequired
}

export default ProductDetail