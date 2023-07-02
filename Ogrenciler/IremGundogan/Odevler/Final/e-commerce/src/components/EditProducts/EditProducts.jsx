import PropTypes from "prop-types";
import { useEffect } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { validationSchema } from "../../schemas/index";
import Form from "../SignUpForm/SignUpStyle";
import ButtonSecondry from "../ButtonSecondry/ButtonSecondaryStyle";

const EditProduct = ({ product, setProduct, toast }) => {
  const { values, handleChange, handleSubmit, errors, resetForm, setValues } =
    useFormik({
      initialValues: {
        title: "",
        price: "",
        description: "",
        category: "",
        image: "",
        rating: {
          rate: "",
          count: "",
        },
      },
      validationSchema,
      onSubmit: async (values) => {
        await axios.put(`http://localhost:3000/products/${product.id}`, values);
        setProduct({ id: product.id, ...values });
        resetForm();
        toast.success("Product has been edited");
      },
    });

  useEffect(() => {
    setValues({
      title: product.title || "",
      price: product.price || "",
      description: product.description || "",
      category: product.category || "",
      image: product.image || "",
      rating: {
        rate: product.rating?.rate || "",
        count: product.rating?.count || "",
      },
    });
  }, [product, setValues]);

  return (
    <div>
      <ButtonSecondry
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#editModal"
        className="editProduct"
      >
        Edit Product
      </ButtonSecondry>

      <div
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        aria-labelledby="editModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="editModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Form onSubmit={handleSubmit}>
                    <div className="modal-body p-0 m-0">
                      <h5>Title</h5>
                      <input
                        type="text"
                        name="title"
                        value={values.title}
                        onChange={handleChange}
                        placeholder="Title"
                      />
                      {errors.title && (
                        <div className="error"> {errors.title}</div>
                      )}
                      <h5>Price</h5>
                      <input
                        type="number"
                        name="price"
                        value={values.price}
                        onChange={handleChange}
                        placeholder="Price"
                      />
                      {errors.price && (
                        <div className="error"> {errors.price}</div>
                      )}
                      <h5>Description</h5>
                      <textarea
                        name="description"
                        value={values.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className={`h-auto ${
                          errors.description ? "error" : ""
                        }`}
                      ></textarea>
                      {errors.description && (
                        <div className="error"> {errors.description}</div>
                      )}
                      <h5>Category</h5>
                      <input
                        type="text"
                        name="category"
                        value={values.category.toLowerCase()}
                        onChange={handleChange}
                        placeholder="Category"
                      />
                      {errors.category && (
                        <div className="error"> {errors.category}</div>
                      )}
                      <h5>Image Url</h5>
                      <input
                        type="url"
                        name="image"
                        value={values.image}
                        onChange={handleChange}
                        placeholder="Image URL"
                      />
                      {errors.image && (
                        <div className="error"> {errors.image}</div>
                      )}
                      <h5>Rating Rate</h5>
                      <input
                        type="number"
                        name="rating.rate"
                        value={values.rating.rate}
                        onChange={handleChange}
                        placeholder="Rating"
                      />
                      {errors["rating.rate"] && (
                        <div className="error"> {errors["rating.rate"]}</div>
                      )}
                      <h5>Stock Count</h5>
                      <input
                        type="number"
                        name="rating.count"
                        value={values.rating?.count}
                        onChange={handleChange}
                        placeholder="Stock Count"
                      />
                      {errors["rating.count"] && (
                        <div className="error"> {errors["rating.count"]}</div>
                      )}
                    </div>
                    <div className="modal-footer">
                      <ButtonSecondry
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                      >
                        Save changes
                      </ButtonSecondry>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

EditProduct.propTypes = {
  product: PropTypes.object.isRequired,
  setProduct: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};

export default EditProduct;
