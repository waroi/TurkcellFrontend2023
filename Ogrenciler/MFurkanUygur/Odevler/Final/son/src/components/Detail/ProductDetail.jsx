import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { fetchAllProduct } from "../../request/productRequest";
import RandomProduct from "./RandomProduct";
import Carousel from "./Carousel";
import { Adver, Advertisement, DetailContainer, AdverText, MMain, MOne, MTwo, Tone, Tthree, Ttwo } from "./detailStyle";
import heal from '../../assets/heal.png'
import garanti from '../../assets/garanti.png'
import { CardButton } from "../buttons/buttonStyle";
import add from '../../assets/add.png'
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest";
import { ToastContainer, toast } from "react-toastify";
import MyGallery from "./MyGallery";
import "react-image-gallery/styles/css/image-gallery.css";
const ProductDetail = () => {
    const { id } = useParams()
    const [item, setItem] = useState();
    const [allData, setAllData] = useState()
    const navigate = useNavigate()
    const fetchProductDetail = async () => {
        const response = await fetch(`http://localhost:3000/products/${id}`);
        const res = await response.json()
        return res
    }
    useEffect(() => {
        fetchProductDetail().then(data => setItem(data))
        fetchAllProduct().then(data => setAllData(data))
    }, [id])


    const ifUserLogged = () => {
        if (!sessionStorage.getItem('loggedUser')) {
            toast.error("Lütfen önce giriş yapınız!", {
                position: "bottom-right",
                autoClose: 1000,
                hideProgressBar: false,
                onClose: () => {
                    navigate("/signup");
                },
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            const userIsLog = JSON.parse(sessionStorage.getItem('loggedUser'))
            console.log("giriş yapan kullsanıcı", userIsLog)
            fetchPrivateCart(userIsLog.id).then((allCarts) => {
                console.log("currentUserBasket", allCarts)
                console.log("currentUserBasketItems", allCarts.cartItems)

                const existingItem = allCarts.cartItems.find((eachItem) => eachItem.id === item.id);

                if (existingItem) {
                    if (existingItem.stock > existingItem.count) {
                        existingItem.count += 1;

                        toast.warning("Ürün sayısını artırdınız")
                    }
                    else {
                        toast.error("Ürün stokta yok")
                    }
                }
                else {
                    const addCartItem = {
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        stock: item?.rating?.count,
                        count: 1
                    }
                    if (item.rating.count > 0) {
                        allCarts.cartItems = [...allCarts.cartItems, addCartItem]
                        toast.success("Yeni ürün eklediniz")
                    }
                    else {
                        toast.error('Ürün stokta yok!');
                    }

                }
                return addNewItemOnCart(userIsLog.id, allCarts)
            })
        }
    }

    const filteredArray = allData?.filter((data) => data.id != id);
    const randomFilteredArray = filteredArray?.sort(() => 0.5 - Math.random())
    // console.log(filteredArray)
    return (

        <div className="container mt-5 py-5">
            <DetailContainer >
                <div className="row">
                    <div className="col-lg-6 bg-dark">
                        {/* <Carousel item={item} /> */}
                        <MyGallery/>
                        <Advertisement>
                            <div className="row g-2">
                                <Adver className="col-6">
                                    <img src={heal} alt="" />
                                    <AdverText>100% health guarantee for pets</AdverText>
                                </Adver>

                                <Adver className="col-6" >
                                    <img src={garanti} alt="" />
                                    <AdverText>100% guarantee of pet identification</AdverText>
                                </Adver>
                            </div>
                        </Advertisement>
                    </div>
                    <div className="col-lg-6">
                        <Tone>SKU #1000078</Tone>
                        <Ttwo>{item?.title}</Ttwo>
                        <Tthree>{item?.price}$</Tthree>
                        <div className="d-flex">
                            <button>btn1</button>
                            <button>btn2</button>
                            <CardButton onClick={() => { ifUserLogged() }} disabled={item?.rating?.count == 0 ? true : false} className="btn btn-primary">
                                <img src={add} alt="" />
                            </CardButton>
                        </div>

                        <MMain className="d-flex">
                            <MOne>SKU</MOne>
                            <MTwo>: #1000078</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Gender</MOne>
                            <MTwo>: Female</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Age</MOne>
                            <MTwo>: 2 Moths</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Size</MOne>
                            <MTwo>: Small</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Color</MOne>
                            <MTwo>: Appricot & Tan</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Vaccinated</MOne>
                            <MTwo>: Yes</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Dewormed</MOne>
                            <MTwo>: Yes</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Cert</MOne>
                            <MTwo>: Yes(MKA)</MTwo>
                        </MMain>

                        <MMain className="d-flex">
                            <MOne>Microchip</MOne>
                            <MTwo>: Yes</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Location</MOne>
                            <MTwo>: Vietnam</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Published Date</MOne>
                            <MTwo>: 12-Oct-2022</MTwo>
                        </MMain>
                        <MMain className="d-flex">
                            <MOne>Additional Information</MOne>
                            <MTwo>: {item?.description}</MTwo>
                        </MMain>
                    </div>
                </div>
            </DetailContainer>
            <h6 className="text-start">Whats news</h6>
            <h6 className="text-start">See More Puppies</h6>
            <div className="row">
                {
                    randomFilteredArray?.slice(0, 8).map(item => {
                        return <div className="col-6 col-lg-3" key={item.id}><RandomProduct item={item} /></div>
                    })
                }
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={1250}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>

    )
}

export default ProductDetail