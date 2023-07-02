import { Adver, Advertisement, DetailContainer, AdverText, MMain, MOne, MTwo, Tone, Tthree, Ttwo } from "./detailStyle";
import { fetchAllProduct, fetchOneProduct, updateMainProduct } from "../../request/productRequest";
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest";
import { CardButton, ChatMonito, ContactUs } from "../buttons/buttonStyle";
import { updateCount } from "../../redux/slices/countBasket";
import { useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { EditSchema } from "../GeneralForm/schema";
import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import RandomProduct from "./RandomProduct";
import garanti from '../../assets/garanti.png'
import Error from "../GeneralForm/Error";
import heal from '../../assets/heal.png'
import edit from '../../assets/edit.png'
import chat from '../../assets/chat.png'
import add from '../../assets/add.png'
import Carousel from "./Carousel";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetail = () => {
    const { id } = useParams()
    const [item, setItem] = useState();
    const [allData, setAllData] = useState()
    const navigate = useNavigate()
    const dispatch = useDispatch();

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
        if (!sessionStorage?.getItem('loggedUser')) {
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
            fetchPrivateCart(userIsLog.id).then((allCarts) => {
                const existingItem = allCarts?.cartItems?.find((eachItem) => eachItem.id === item.id);
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
                        dispatch(updateCount(allCarts?.cartItems?.length))
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
    const categoryOptions = [
        { value: "", label: "Choose a category..." },
        { value: "Men's Clothing", label: "Men's Clothing" },
        { value: "Jewelery", label: "Jewelery" },
        { value: "Electronics", label: "Electronics" },
        { value: "Women's Clothing", label: "Women's Clothing" },
    ];
    return (
        <div className="container mt-5 py-5">
            <DetailContainer >
                <div className="row">
                    <div className="col-lg-6">
                        <Carousel item={item} />
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
                        <div className="d-flex align-items-center flex-wrap justify-content-evenly">
                            <ContactUs>Contact Us</ContactUs>
                            <ChatMonito className="mx-1">
                                <img src={chat} alt="" />
                                Chat With Monito
                            </ChatMonito>
                            <CardButton onClick={() => { ifUserLogged() }} disabled={item?.rating?.count == 0 ? true : false} className="mx-1 p-2">
                                <img src={add} alt="" />
                            </CardButton>
                            <CardButton className=" mx-1 p-2" type="button" data-bs-toggle="modal" data-bs-target={`#${typeof item + item?.id}`}>
                                <img src={edit} alt="" />
                            </CardButton>
                            <div className="modal fade" id={`${typeof item + item?.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${item?.id}Label`} aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id={`${item?.id}Label`}>Edit</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <h5>Default Info</h5>
                                                    <div className="d-flex flex-column">
                                                        <label htmlFor="title" className="text-start fw-semibold">Title</label>
                                                        <input className="form-control" type="text" value={item?.title} name="title" disabled />
                                                        <label htmlFor="price" className="text-start fw-semibold">Price</label>
                                                        <input className="form-control" type="text" value={item?.price} name="price" disabled />
                                                        <label htmlFor="desc" className="text-start fw-semibold" >Description</label>
                                                        <textarea type="text" value={item?.description} name="desc" disabled />
                                                        <label htmlFor="category" className="text-start fw-semibold">Category</label>
                                                        <input className="form-control" type="text" value={item?.category} name="category" disabled />
                                                        <label htmlFor="img" className="text-start fw-semibold">Image</label>
                                                        <input className="form-control" type="text" value={item?.image} name="img" disabled />
                                                        <label htmlFor="rate" className="text-start fw-semibold">Rate</label>
                                                        <input className="form-control" type="text" value={item?.rating?.rate} name="rate" disabled />
                                                        <label htmlFor="count" className="text-start fw-semibold">Count</label>
                                                        <input className="form-control" type="text" value={item?.rating?.count} name="count" disabled />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <h5>Update Info</h5>
                                                    <Formik
                                                        initialValues={{
                                                            editTitle: "",
                                                            editAmount: "",
                                                            editDesc: "",
                                                            editCat: "",
                                                            editImg: "",
                                                            editRate: "",
                                                            editCount: ""
                                                        }}

                                                        validationSchema={EditSchema}
                                                        onSubmit={(values, { resetForm }) => {
                                                            console.log(values)
                                                            const formData = {
                                                                id: item.id,
                                                                title: values.editTitle,
                                                                price: values.editAmount,
                                                                description: values.editDesc,
                                                                category: values.editCat,
                                                                image: values.editImg,
                                                                rating: {
                                                                    rate: values.editRate,
                                                                    count: values.editCount,
                                                                }

                                                            };
                                                            updateMainProduct(item.id, formData)
                                                                .then(() => {
                                                                    fetchOneProduct(item.id).then(data => setItem(data))
                                                                    toast.success("Ürün güncellendi")
                                                                })
                                                            resetForm();

                                                        }}
                                                    >
                                                        <Form>
                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editTitle" >Title:</label>
                                                                <Field type="text" id="editTitle" name="editTitle" className="form-control" />
                                                                <Error name="editTitle" />
                                                            </div>

                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editAmount">Price:</label>
                                                                <Field type="text" id="editAmount" name="editAmount" className="form-control" />
                                                                <Error name="editAmount" />
                                                            </div>

                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editDesc">Description:</label>
                                                                <Field as="textarea" id="editDesc" name="editDesc" className="form-control" />
                                                                <Error name="editDesc" component="div" />
                                                            </div>

                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editCat">Category:</label>
                                                                <Field
                                                                    as="select"
                                                                    id="editCat"
                                                                    name="editCat"
                                                                    className="form-select"
                                                                >
                                                                    {categoryOptions.map((option) => (
                                                                        <option key={option.value} value={option.value}>
                                                                            {option.label}
                                                                        </option>
                                                                    ))}
                                                                </Field >
                                                                <Error name="editCat" component="div" />
                                                            </div>
                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editImg">Image:</label>
                                                                <Field type="text" id="editImg" name="editImg" className="form-control" />
                                                                <Error name="editImg" component="div" />
                                                            </div>
                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editRate">Rate:</label>
                                                                <Field type="text" id="editRate" name="editRate" className="form-control" />
                                                                <Error name="editRate" component="div" />
                                                            </div>
                                                            <div className="text-start fw-semibold">
                                                                <label htmlFor="editCount">Count:</label>
                                                                <Field type="text" id="editCount" name="editCount" className="form-control" />
                                                                <Error name="editCount" component="div" />
                                                            </div>
                                                            <div className="d-flex justify-content-around">
                                                                <CardButton type="submit" className="px-3"> Update</CardButton>
                                                                <CardButton type="button" data-bs-dismiss="modal" className="px-3">Close</CardButton>
                                                            </div>
                                                        </Form>
                                                    </Formik>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        </div>
    )
}

export default ProductDetail