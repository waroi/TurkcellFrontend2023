import PropTypes from "prop-types"
import { useFormik } from "formik"
import axios from "axios"
import { validationSchema } from "../../schemas"
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
                        <form onSubmit={handleSubmit}>
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
                                    className={errors.title ? "error" : ""}
                                />
                                {errors.title && (
                                    <div className="error-message">{errors.title}</div>
                                )}

                                <input
                                    type="number"
                                    name="price"
                                    value={values.price}
                                    onChange={handleChange}
                                    placeholder="Price"
                                    className={errors.price ? "error" : ""}
                                />
                                {errors.price && (
                                    <div className="error-message">{errors.price}</div>
                                )}

                                <textarea
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    placeholder="Description"
                                    className={errors.description ? "error" : ""}
                                ></textarea>
                                {errors.description && (
                                    <div className="error-message">{errors.description}</div>
                                )}

                                <input
                                    type="text"
                                    name="category"
                                    value={values.category}
                                    onChange={handleChange}
                                    placeholder="Category"
                                    className={errors.category ? "error" : ""}
                                />
                                {errors.category && (
                                    <div className="error-message">{errors.category}</div>
                                )}

                                <input
                                    type="text"
                                    name="image"
                                    value={values.image}
                                    onChange={handleChange}
                                    placeholder="Image URL"
                                    className={errors.image ? "error" : ""}
                                />
                                {errors.image && (
                                    <div className="error-message">{errors.image}</div>
                                )}

                                <input
                                    type="number"
                                    name="rating.rate"
                                    value={values.rating.rate}
                                    onChange={handleChange}
                                    placeholder="Rating"
                                    className={errors["rating.rate"] ? "error" : ""}
                                />
                                {errors["rating.rate"] && (
                                    <div className="error-message">{errors["rating.rate"]}</div>
                                )}

                                <input
                                    type="number"
                                    name="rating.count"
                                    value={values.rating.count}
                                    onChange={handleChange}
                                    placeholder="Rating Count"
                                    className={errors["rating.count"] ? "error" : ""}
                                />
                                {errors["rating.count"] && (
                                    <div className="error-message">{errors["rating.count"]}</div>
                                )}

                            </div>
                            <div className="modal-footer">

                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </form>
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