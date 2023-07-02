import { ProductCard, ProductImg, ProductPrice, ProductSpecs, ProductSpecsTitle, ProductTitle } from "./styledOneProduct";
import { addNewItemOnCart, fetchPrivateCart } from "../../request/cartsRequest";
import { fetchOneProduct, updateMainProduct } from "../../request/productRequest";
import { CardButton, CardButtonGroup } from "../buttons/buttonStyle";
import { updateCount } from "../../redux/slices/countBasket";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { EditSchema } from "../GeneralForm/schema";
import { Rating } from '@smastrom/react-rating'
import { Field, Form, Formik } from "formik";
import { toast } from 'react-toastify';
import { useState } from "react";
import PropTypes from 'prop-types'
import Error from "../GeneralForm/Error";
import inspect from '../../assets/inspect.png'
import add from '../../assets/add.png'
import edit from '../../assets/edit.png'
import 'react-toastify/dist/ReactToastify.css';
import '@smastrom/react-rating/style.css'


const OneProduct = ({ item }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentItem, setCurrentItem] = useState(item)
    const userIsAdmin = useSelector((state) => state?.setLoggedUser?.isAdminLog)


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

            fetchPrivateCart(userIsLog.id).then((allCarts) => {

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
                        stock: item.rating.count,
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

    const categoryOptions = [
        { value: "", label: "Choose a category..." },
        { value: "Men's Clothing", label: "Men's Clothing" },
        { value: "Jewelery", label: "Jewelery" },
        { value: "Electronics", label: "Electronics" },
        { value: "Women's Clothing", label: "Women's Clothing" },
    ];
    return (
        <div >
            <ProductCard className="card my-2 w-100">
                <ProductImg src={`${currentItem.image}`} className="card-img-top img-fluid" alt={`${currentItem.title}`} />
                <div className="card-body my-0 py-0 w-100">
                    <ProductTitle className="card-title text-start m-0 p-0">{currentItem.title}</ProductTitle>
                    <div className="d-flex justify-content-between ">

                        <div className="d-flex align-items-center">
                            <ProductSpecsTitle>Rate: </ProductSpecsTitle>
                            <Rating style={{ maxWidth: 50 }} value={currentItem.rating.rate} readOnly />
                        </div>
                        <div className="d-flex ">
                            <ProductSpecsTitle>Category: </ProductSpecsTitle>
                            <ProductSpecs> {currentItem.category}</ProductSpecs>
                        </div>


                    </div>
                    <ProductPrice className="text-start my-0 py-0">{currentItem.price} $</ProductPrice>
                    {
                        userIsAdmin ?
                            <>
                                <CardButtonGroup>
                                    <CardButton type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${typeof currentItem + currentItem.id}`}>
                                        <img src={edit} alt="" />
                                    </CardButton>
                                    <div className="modal fade" id={`${typeof currentItem + currentItem.id}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={`${currentItem.id}Label`} aria-hidden="true">
                                        <div className="modal-dialog modal-lg">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id={`${currentItem.id}Label`}>Edit</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <h5>Varsayılan bilgiler</h5>
                                                            <div className="d-flex flex-column">
                                                                <label htmlFor="title" className="text-start fw-semibold">Title</label>
                                                                <input className="form-control" type="text" value={currentItem.title} name="title" disabled />
                                                                <label htmlFor="price" className="text-start fw-semibold">Price</label>
                                                                <input className="form-control" type="text" value={currentItem.price} name="price" disabled />
                                                                <label htmlFor="desc" className="text-start fw-semibold" >Description</label>
                                                                <textarea type="text" value={currentItem.description} name="desc" disabled />
                                                                <label htmlFor="category" className="text-start fw-semibold">Category</label>
                                                                <input className="form-control" type="text" value={currentItem.category} name="category" disabled />
                                                                <label htmlFor="img" className="text-start fw-semibold">Image</label>
                                                                <input className="form-control" type="text" value={currentItem.image} name="img" disabled />
                                                                <label htmlFor="rate" className="text-start fw-semibold">Rate</label>
                                                                <input className="form-control" type="text" value={currentItem.rating?.rate} name="rate" disabled />
                                                                <label htmlFor="count" className="text-start fw-semibold">Count</label>
                                                                <input className="form-control" type="text" value={currentItem.rating?.count} name="count" disabled />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <h5>Güncellenecek bilgiler</h5>
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
                                                                            fetchOneProduct(item.id).then(data => setCurrentItem(data))
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
                                                                        <CardButton type="submit"> Update</CardButton>
                                                                        <CardButton type="button" data-bs-dismiss="modal">Close</CardButton>
                                                                    </div>
                                                                </Form>
                                                            </Formik>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <CardButton> <Link to={`${item.id}`}><img src={inspect} alt="" /></Link></CardButton>
                                    <CardButton onClick={() => { ifUserLogged() }} disabled={currentItem.rating.count == 0 ? true : false} className="btn btn-primary">
                                        <img src={add} alt="" />
                                    </CardButton>
                                </CardButtonGroup>
                            </> :
                            <>
                                <CardButtonGroup>
                                    <CardButton> <Link to={`${item.id}`}><img src={inspect} alt="" /></Link></CardButton>
                                    <CardButton onClick={() => { ifUserLogged() }} disabled={currentItem.rating.count == 0 ? true : false} className="btn btn-primary">
                                        <img src={add} alt="" />
                                    </CardButton>
                                </CardButtonGroup>
                            </>
                    }
                </div>
            </ProductCard>
        </div >
    )
}

export default OneProduct

OneProduct.propTypes = {
    item: PropTypes.object
}