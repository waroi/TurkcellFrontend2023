import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from "react-redux"
import UpdateProduct from '../../components/UpdateProduct/UpdateProduct';

const ProductDetailView = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({});
    const user = useSelector((state) => state.user.user)

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => setProduct(response.data))
            .catch(err => console.log('Error fetching product data:', err))

    }, []);

    const handleCartClick = () => {
        if (product.rating?.count > 0) {
            console.log("Added to cart")
            axios.get(`http://localhost:3000/carts/${user.id}`)
                .then((response) => {
                    const inCart = response.data.cart.find(cartItem => cartItem.productId == product.id)
                    if (inCart) {
                        if (inCart.demand < product.rating.count) {
                            console.log("There is an item with the same id in the cart")
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
                        else console.log("You have hit the stock limit")
                    } else {
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
        <div>
            {(user.isAdmin && product) && <UpdateProduct product={product} setProduct={setProduct} />}
            <h1>{user.name}</h1>
            <h2>{product.title}</h2>
            <h2>Stock: {product.rating?.count} {product.rating?.rate} </h2>
            <button className={`${product.rating?.count == 0 && "disabled"} btn btn-success`} onClick={handleCartClick} >Add to Cart</button>
        </div>
    )
}

export default ProductDetailView