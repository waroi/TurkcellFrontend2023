import PropTypes from "prop-types"
import { useFormik } from "formik"
import axios from "axios"
import { validationSchema } from "../../../schemas"
import Form from "../../../styledComponents/StyledForm"
import ButtonPrimary from "../../../styledComponents/ButtonPrimary"
import warningIcon from "../../../assets/Circle_Warning.svg"
import PreUpdateInfo from "../../../styledComponents/PreUpdateInfo"
const UpdateProduct = ({ product, setProduct, toast }) => {

    const initialValues = {
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rate: "",
        count: ""
    };

    const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            const productData = {
                id: product.id,
                title: values.title,
                price: values.price,
                description: values.description,
                category: values.category.toLowerCase(),
                image: values.image,
                rating: {
                    rate: values.rate,
                    count: values.count
                }
            }
            await axios.put(`http://localhost:3000/products/${product.id}`, productData);
            setProduct({ id: product.id, ...productData })
            resetForm()
            toast.success("Product updated")
        }
    });

    return (
        <div>

            <ButtonPrimary className="fw-bold" type="button" data-bs-toggle="modal" data-bs-target="#updateModal">
                Update Product
            </ButtonPrimary>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateModalLabel">Update Product</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <Form onSubmit={handleSubmit}>
                                        <div className="modal-body">
                                            <PreUpdateInfo>
                                                <p> <span>Id:</span> {product.id}</p>
                                                <p> <span>Title:</span> {product.title}</p>
                                                <p> <span>Price:</span> {product.price}</p>
                                                <p> <span>Description:</span> {product.description}</p>
                                                <p> <span>Category:</span> {product.category}</p>
                                                <p className="urlInfo"> <span>Image URL:</span> {product.image}</p>
                                                <p> <span>Rating Rate:</span> {product.rating?.rate}</p>
                                                <p> <span>Rating Count(Stock):</span> {product.rating?.count}</p>
                                            </PreUpdateInfo>
                                            <input
                                                type="text"
                                                name="title"
                                                value={values.title}
                                                onChange={handleChange}
                                                placeholder="Title"
                                            />
                                            {errors.title && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.title}</div>
                                            )}

                                            <input
                                                type="number"
                                                name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                placeholder="Price"
                                            />
                                            {errors.price && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.price}</div>
                                            )}

                                            <textarea
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                placeholder="Description"
                                                className={errors.description ? "error" : ""}
                                            ></textarea>
                                            {errors.description && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.description}</div>
                                            )}

                                            <input
                                                type="text"
                                                name="category"
                                                value={values.category}
                                                onChange={handleChange}
                                                placeholder="Category"
                                            />
                                            {errors.category && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.category}</div>
                                            )}

                                            <input
                                                type="text"
                                                name="image"
                                                value={values.image}
                                                onChange={handleChange}
                                                placeholder="Image URL"
                                            />
                                            {errors.image && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.image}</div>
                                            )}

                                            <input
                                                type="number"
                                                name="rate"
                                                value={values.rate}
                                                onChange={handleChange}
                                                placeholder="Rating"
                                            />
                                            {errors.rate && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.rate}</div>
                                            )}

                                            <input
                                                type="number"
                                                name="count"
                                                value={values.count}
                                                onChange={handleChange}
                                                placeholder="Rating Count"
                                            />
                                            {errors.count && (
                                                <div className="error mb-3"> <img src={warningIcon} alt="warning" /> {errors.count}</div>
                                            )}

                                        </div>
                                        <div className="modal-footer">
                                            <ButtonPrimary type="submit" >Save changes</ButtonPrimary>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

UpdateProduct.propTypes = {
    product: PropTypes.object.isRequired,
    setProduct: PropTypes.func.isRequired,
    toast: PropTypes.func.isRequired
}

export default UpdateProduct