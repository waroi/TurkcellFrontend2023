import { fetchAllProduct, updateMainProduct } from "../../request/productRequest"
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest"
import { updateCount } from "../../redux/slices/countBasket"
import { toast } from "react-toastify"
import { CardButton } from "../buttons/buttonStyle"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import BasketItem from "./BasketItem"
import 'react-toastify/dist/ReactToastify.css';

const Basket = () => {
    const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
    const [basket, setBasket] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        fetchAllProduct().then(data => setAllProducts(data))
        fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))
    }, [])



    const buyItems = () => {
        basket.forEach((item) => {
            const product = allProducts.find((p) => p.id === item.id);

            if (product && item.count > product.rating.count) {
                if (item.count > product.stock) {
                    toast.error(`Sepetteki ${product.title} ürünü, stokta yeterli sayıda bulunmamaktadır. Dikkat ediniz.`, {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                } else {
                    toast.error(`Sepetteki ${product.title} ürünü, stokta yeterli sayıda bulunmamaktadır. Dikkat ediniz.`, {
                        position: "bottom-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            }
            else {

                fetchAllProduct()
                    .then(products => {
                        fetchPrivateCart(userIsLog.id)
                            .then(carts => {
                                carts.cartItems.forEach(basketItem => {
                                    const product = products.find(product => product.id === basketItem.id);

                                    if (product) {
                                        const updatedProduct = {
                                            id: product.id,
                                            title: product.title,
                                            price: product.price,
                                            description: product.description,
                                            category: product.category,
                                            image: product.image,
                                            rating: {
                                                rate: product.rating.rate,
                                                count: product.rating.count - basketItem.count
                                            }
                                        };

                                        updateMainProduct(product.id, updatedProduct)
                                    }

                                });

                                const updatedUserCart = {
                                    id: userIsLog.id,
                                    name: userIsLog.name,
                                    cartItems: []
                                };
                                addNewItemOnCart(userIsLog.id, updatedUserCart).then(() => {
                                    setBasket([])
                                    dispatch(updateCount(updatedUserCart?.cartItems?.length))
                                })
                            })
                            .catch(error => {
                                toast.error(error)
                            });
                    })
                    .catch(error => {
                        toast.error(error)

                    });
                toast.success("Ürünler satın alındı")
            }
        });
    }
    return (
        <div className="container  pt-5">
            <div className="row mt-5 mb-5">
                {
                    basket?.length == 0 ? <h2 className="text-center my-5 py-5">Cart is empty...</h2> :
                        basket?.map((item) => {
                            return <div className="col-6 col-lg-3" key={item.id}><BasketItem item={item} basket={basket} setBasket={setBasket} /></div>
                        })
                }
            </div>
            {
                basket?.length > 0 ? <div className="d-flex justify-content-center"><CardButton className="px-4 py-2" onClick={() => { buyItems() }}>Satın al</CardButton> </div> : <div className="d-flex  justify-content-center align-item-center"><Link to="/"><CardButton className="px-4 py-2" >Alışverişe başla</CardButton></Link></div>
            }
        </div>
    )
}

export default Basket