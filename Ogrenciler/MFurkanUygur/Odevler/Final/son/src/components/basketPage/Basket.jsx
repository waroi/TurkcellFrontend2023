import { useEffect, useState } from "react"
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest"
import BasketItem from "./BasketItem"
import { fetchAllProduct, updateMainProduct } from "../../request/productRequest"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { CardButton } from "../buttons/buttonStyle"

const Basket = () => {
    const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
    const [basket, setBasket] = useState([])
    useEffect(() => {
        fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))
    }, [])

    // const buyItems = () => {
    //     fetchAllProduct()
    //         .then(products => {

    //             products.map(product => {
    //                 console.log(basket.filter(basketItem => basketItem.id = product.id))
    //             })

    //             // const updatedCartItems = products.map(product => {
    //             //     const existingItem = products.find(item => item.id === product.id);
    //             //     console.log(existingItem)
    //             //     // if (existingItem) {
    //             //     //     const purchasedAmount = existingItem.count;
    //             //     //     const updatedCount = product.count - purchasedAmount;
    //             //     //     return {
    //             //     //         ...product,
    //             //     //         count: updatedCount >= 0 ? updatedCount : 0
    //             //     //     };
    //             //     // }

    //             //     return product;
    //             // });

    //             // const updatedCart = {
    //             //     id: userIsLog.id,
    //             //     name: userIsLog.name,
    //             //     cartItems: updatedCartItems
    //             // };
    //             // console.log(first)
    //             // return fetch(`http://localhost:3000/products/${userIsLog.id}`, {
    //             //     method: 'PUT',
    //             //     headers: {
    //             //         'Content-Type': 'application/json'
    //             //     },
    //             //     body: JSON.stringify(updatedCart)
    //             // });
    //         })
    //         .then(() => {
    //             console.log("Ürünler satın alındı");
    //             setBasket([]);
    //         })
    //         .catch(error => {
    //             console.error('Hata:', error);
    //         });
    // }
    const buyItems = () => {
        //tüm ürünleri fetch ile aldım
        fetchAllProduct()
            .then(products => {
                // Sepetteki ürünleri fetch ile aldım
                fetchPrivateCart(userIsLog.id)
                    .then(carts => {
                        // Sepetteki ürünleri döngü ile gez
                        carts.cartItems.forEach(basketItem => {
                            // Ürünü bul
                            const product = products.find(product => product.id === basketItem.id);

                            // Ürünün sayısını güncelle
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

                                // Güncellenmiş ürünü fetch ile kaydet
                                updateMainProduct(product.id, updatedProduct)
                            }

                        });

                        // Sepeti boşaltmak için fetch işlemi yap
                        const updatedUserCart = {
                            id: userIsLog.id,
                            name: userIsLog.name,
                            cartItems: []
                        };
                        addNewItemOnCart(userIsLog.id, updatedUserCart).then(() => setBasket([])
                        )
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
    return (
        <div className="container  pt-5">
            <div className="row mt-5 mb-5">
                {
                    basket?.length == 0 ? <h2 className="text-center my-5 py-5">Cart is empty...</h2> :
                        basket?.map((item) => {
                            return <div className="col-6 col-lg-3" key={item.id}><BasketItem  item={item} basket={basket} setBasket={setBasket} /></div>
                        })
                }
            </div>
            {
                basket?.length > 0 ? <div className="d-flex justify-content-center"><CardButton onClick={() => { buyItems() }}>Satın al</CardButton> </div>: <div className="d-flex  justify-content-center align-item-center"><Link to="/"><CardButton >Alışverişe başla</CardButton></Link></div>
            }

            <ToastContainer
                position="bottom-right"
                autoClose={1050}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    )
}

export default Basket