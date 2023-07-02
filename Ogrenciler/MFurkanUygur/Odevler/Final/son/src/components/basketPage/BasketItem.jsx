
import { ProductCard, ProductImg, ProductPrice, ProductSpecs, ProductSpecsTitle, ProductTitle } from "../AllProducts/styledOneProduct"
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest"
import { fetchAllProduct } from "../../request/productRequest";
import { updateCount } from "../../redux/slices/countBasket";
import { toast } from 'react-toastify';
import { CardButton } from "../buttons/buttonStyle"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import carrow from '../../assets/carrow.png'
import darrow from '../../assets/darrow.png'
import uarrow from '../../assets/uarrow.png'
import PropTypes from 'prop-types'
import 'react-toastify/dist/ReactToastify.css';

const BasketItem = ({ item, basket, setBasket }) => {
    const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
    const dispatch = useDispatch()
    const [allProducts, setAllProducts] = useState()
    const latestStock = allProducts?.find(product => product.id == item.id)

    useEffect(() => {
        fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))
        fetchAllProduct().then(data => setAllProducts(data))
    }, [])

    const incrementItem = () => {
        const existingItem = basket.find((temp) => temp.id === item.id);

        if (existingItem && latestStock && item.stock > existingItem.count && latestStock.rating.count > existingItem.count) {
            existingItem.count++;

            const updatedCart = {
                id: userIsLog.id,
                name: userIsLog.name,
                cartItems: [...basket]
            };

            addNewItemOnCart(userIsLog.id, updatedCart)
                .then(() => {
                    fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))

                    toast.success("Ürün miktarı arttı")
                })
                .catch((error) => {
                    toast.warning(error)
                });
        } else {
            toast.warning("Yetersiz Stok")
        }
    }

    const decrementItem = () => {
        const existingItem = basket.find((temp) => temp.id === item.id);

        if (existingItem && existingItem.count > 0) {
            existingItem.count--;

            const updatedCart = {
                id: userIsLog.id,
                name: userIsLog.name,
                cartItems: [...basket]
            };

            if (existingItem.count === 0) {
                const updatedCartItems = updatedCart.cartItems.filter((cartItem) => cartItem.id !== item.id);
                updatedCart.cartItems = updatedCartItems;
            }

            addNewItemOnCart(userIsLog.id, updatedCart)
                .then(() => {
                    fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))
                    toast.warning("Ürün miktarı azaldı")

                    if (existingItem.count === 0) {
                        fetchPrivateCart(userIsLog.id).then(data => {
                            setBasket(data.cartItems)
                            dispatch(updateCount(data?.cartItems?.length))
                        })
                    }
                })
                .catch((error) => {
                    toast.warning(error)
                });
        } else {
            toast.error("Yetersiz Stok")
        }
    };


    const inputItem = (e) => {
        const newCount = parseInt(e.target.value);

        if (isNaN(newCount) || newCount < 0 || newCount > item.stock || (latestStock && newCount > latestStock.rating.count)) {
            toast.error("Geçersiz ürün miktarı")
            return;
        }

        const updatedCartItems = basket.map((cartItem) => {
            if (cartItem.id === item.id) {
                return {
                    ...cartItem,
                    count: newCount
                };
            } else {
                return cartItem;
            }
        });

        const updatedCart = {
            id: userIsLog.id,
            name: userIsLog.name,
            cartItems: updatedCartItems
        };

        addNewItemOnCart(userIsLog.id, updatedCart)
            .then(() => {
                fetchPrivateCart(userIsLog.id).then(data => setBasket(data.cartItems))
                toast.success("Ürün miktarı değiştirildi")
            })
            .catch((error) => {
                toast.error("Hata:", error);
            });
    };

    const deleteCartItem = () => {
        const updatedCartItems = basket.filter((cartItem) => cartItem.id !== item.id);

        const updatedCart = {
            id: userIsLog.id,
            name: userIsLog.name,
            cartItems: updatedCartItems
        };

        addNewItemOnCart(userIsLog.id, updatedCart)
            .then(() => {
                fetchPrivateCart(userIsLog.id).then(data => {
                    setBasket(data.cartItems)
                    dispatch(updateCount(data?.cartItems?.length))

                })

                toast.error("Ürün sepetten çıkarıldı")
                item.count = 0;
            })
            .catch((error) => {
                toast.error("Hata:", error);
            });
    };

    return (
        <div>
            <ProductCard className="card">
                <ProductImg src={`${item.image}`} className="card-img-top img-fluid" alt={`${item.title}`} />
                <div className="card-body w-100">
                    <ProductTitle className="card-title text-start">{item.title}</ProductTitle>
                    <div className="d-flex justify-content-between  ">
                        <div className="d-flex ">
                            <ProductSpecsTitle>Anlık Adet: </ProductSpecsTitle>
                            <ProductSpecs> {item.count}</ProductSpecs>
                        </div>
                        <div className="d-flex ">
                            <ProductSpecsTitle>Stok: </ProductSpecsTitle>
                            <ProductSpecs> {latestStock?.rating.count}</ProductSpecs>
                        </div>
                        <ProductPrice className="text-start my-0 py-0">{item.price} $</ProductPrice>
                    </div>
                    <input type="text" className="w-100" onChange={(e) => { inputItem(e) }} value={item.count} />
                    <div className="d-flex justify-content-around">
                        <CardButton className="btn btn-danger" onClick={() => { decrementItem() }}>
                            <img src={darrow} alt="" />
                        </CardButton>
                        <CardButton className="btn btn-warning" onClick={() => { deleteCartItem() }}>
                            <img src={carrow} alt="" />
                        </CardButton>
                        <CardButton className="btn btn-primary" onClick={() => { incrementItem() }}>
                            <img src={uarrow} alt="" />
                        </CardButton>
                    </div>
                </div>
            </ProductCard>
        </div>
    )
}

export default BasketItem

BasketItem.propTypes = {
    item: PropTypes.object,
    basket: PropTypes.array,
    setBasket: PropTypes.func
}
