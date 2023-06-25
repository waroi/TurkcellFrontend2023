import PropTypes from "prop-types"
import { useFormik } from "formik"
import axios from "axios"
import { validationSchema } from "../../schemas"
import Form from "../../styledComponents/StyledForm"
import ButtonPrimary from "../../styledComponents/ButtonPrimary"
import warningIcon from "../../assets/Circle_Warning.svg"
const UpdateProduct = ({ product, setProduct }) => {

    const initialValues = {
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
            rate: "",
            count: ""
        }
    };

    const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            await axios.put(`http://localhost:3000/products/${product.id}`, values);
            setProduct({ id: product.id, ...values })
            resetForm()
        }
    });

    return (
        <div>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal">
                update product
            </button>

            <div className="modal fade" id="updateModal" tabIndex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="updateModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="previousInfo">
                                    <p>Id: {product.id}</p>
                                    <p>Title: {product.title}</p>
                                    <p>Price: {product.price}</p>
                                    <p>Description: {product.description}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Image URL: {product.image}</p>
                                    <p>Rating Rate: {product.rating?.rate}</p>
                                    <p>Rating Count: {product.rating?.count}</p>
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    value={values.title}
                                    onChange={handleChange}
                                    placeholder="Title"
                                />
                                {errors.title && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors.title}</div>
                                )}

                                <input
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                />
                                {errors.price && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors.price}</div>
                                )}

                                <textarea
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    className={errors.description ? "error" : ""}
                                ></textarea>
                                {errors.description && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors.description}</div>
                                )}

                                <input
                                    type="text"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    placeholder="Category"
                                />
                                {errors.category && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors.category}</div>
                                )}

                                <input
                                    type="text"
                                    name="image"
                                    value={values.image}
                                    onChange={handleChange}
                                    placeholder="Image URL"
                                />
                                {errors.image && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors.image}</div>
                                )}

                                <input
                                    type="number"
                                    name="rating.rate"
                                    value={values.rating.rate}
                                    onChange={handleChange}
                                    placeholder="Rating"
                                />
                                {errors["rating.rate"] && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors["rating.rate"]}</div>
                                )}

                                <input
                                    type="number"
                                    name="rating.count"
                                    value={values.rating.count}
                                    onChange={handleChange}
                                    placeholder="Rating Count"
                                />
                                {errors["rating.count"] && (
                                    <div className="error"> <img src={warningIcon} alt="warning" /> {errors["rating.count"]}</div>
                                )}

                            </div>
                            <div className="modal-footer">

                                <ButtonPrimary type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</ButtonPrimary>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>


        </div>
    )
}

UpdateProduct.propTypes = {
    product: PropTypes.object.isRequired,
    setProduct: PropTypes.func.isRequired
}

export default UpdateProduct