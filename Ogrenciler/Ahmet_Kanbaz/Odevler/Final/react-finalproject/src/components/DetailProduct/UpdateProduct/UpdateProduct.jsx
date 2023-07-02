import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import updateProductSchema from "../../../schemas/updateProductSchema";
import FormError from "../../../common/FormError/FormError";
import Button from "../../../common/Button/Button";
import {updateProduct, updateSingleProductInAllProducts} from '../../../utils/puts'
import { useDispatch } from "react-redux";
import { fetchDetailProduct } from "../../../utils/request";

function UpdateProduct({ detailProduct, handleClose, show }) {
  const dispatch = useDispatch();
  const productsCategories = [
    "Electronics",
    "Jewelery",
    "Men's clothing",
    "Women's clothing",
  ];
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    touched,
    errors,
    isSubmitting,
  } = useFormik({
    initialValues: {
      modalProductName: detailProduct.title,
      modalProductDescription: detailProduct.description,
      modalProductImage: detailProduct.image,
      modalProductPrice: detailProduct.price,
      modalProductStock: detailProduct.rating.count,
      modalProductRate: detailProduct.rating.rate,
      modalProductCategory: detailProduct.category,
    },
    validationSchema: updateProductSchema,
    onSubmit: async (values, bag) => {
      const updatedProduct = {
        id: detailProduct.id,
        title: values.modalProductName,
        description: values.modalProductDescription,
        image: values.modalProductImage,
        price: values.modalProductPrice,
        rating: {
          count: values.modalProductStock,
          rate: values.modalProductRate,
        },
        category: values.modalProductCategory,
      };
      const response = await updateProduct(updatedProduct)
      detailProduct = response;
      dispatch(updateSingleProductInAllProducts(updatedProduct))
      dispatch(fetchDetailProduct(response.id));
      handleClose()
      bag.resetForm();
    },
  });
  return (
    <>
      <Modal show={show} onHide={handleClose} centered scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
            <div className="position-relative">
              <label htmlFor="modalProductName">Name:</label>
              <input
                type="text"
                className="form-control shadow-none border-secondary"
                id="modalProductName"
                name="modalProductName"
                defaultValue={detailProduct.title}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {touched.modalProductName && errors.modalProductName && (
                <FormError message={errors.modalProductName} />
              )}
            </div>
            <div className="position-relative">
              <label htmlFor="modalProductDescription">Description:</label>
              <textarea
                type="text"
                className="form-control shadow-none border-secondary"
                id="modalProductDescription"
                name="modalProductDescription"
                defaultValue={detailProduct.description}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {touched.modalProductDescription &&
                errors.modalProductDescription && (
                  <FormError message={errors.modalProductDescription} />
                )}
            </div>
            <div className="position-relative">
              <label htmlFor="modalProductImage">Image Url:</label>
              <input
                type="url"
                className="form-control shadow-none border-secondary"
                id="modalProductImage"
                name="modalProductImage"
                defaultValue={detailProduct.image}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
              />
              {touched.modalProductImage && errors.modalProductImage && (
                <FormError message={errors.modalProductImage} />
              )}
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <label htmlFor="modalProductPrice">Price:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductPrice"
                    name="modalProductPrice"
                    defaultValue={detailProduct.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                  {touched.modalProductPrice && errors.modalProductPrice && (
                    <FormError message={errors.modalProductPrice} />
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <label htmlFor="modalProductStock">Stock Count:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductStock"
                    name="modalProductStock"
                    defaultValue={detailProduct.rating?.count}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                  {touched.modalProductStock && errors.modalProductStock && (
                    <FormError message={errors.modalProductStock} />
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <label htmlFor="modalProductRate">Rate:</label>
                  <input
                    type="text"
                    className="form-control shadow-none border-secondary"
                    id="modalProductRate"
                    name="modalProductRate"
                    defaultValue={detailProduct.rating?.rate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  />
                  {touched.modalProductRate && errors.modalProductRate && (
                    <FormError message={errors.modalProductRate} />
                  )}
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="position-relative">
                  <label htmlFor="modalProductCategory">Category:</label>
                  <select
                    className="form-control shadow-none border-secondary"
                    id="modalProductCategory"
                    name="modalProductCategory"
                    defaultValue={detailProduct.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                  >
                    <option value={detailProduct.category}>
                      {detailProduct.category.charAt(0).toUpperCase() +
                        detailProduct.category.substring(1)}
                    </option>
                    {productsCategories.map(
                      (category, i) =>
                        category.toLowerCase() !=
                          detailProduct.category.toLowerCase() && (
                          <option key={i}>{category}</option>
                        )
                    )}
                  </select>
                  {touched.modalProductCategory && errors.modalProductCategory && (
                    <FormError message={errors.modalProductCategory} />
                  )}
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-lg-end justify-content-center sticky-bottom bg-white border-top pt-3">
              <Button
                buttonText="Save Changes"
                padding=".42rem 1.4rem"
                color="#FDFDFD"
                backgroundcolor="#003459"
                fontSize=".91rem"
                disabled={isSubmitting}
                className="fw-bold"
              />
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

UpdateProduct.propTypes = {
  detailProduct: PropTypes.object,
  handleClose: PropTypes.func,
  show: PropTypes.bool,
};

export default UpdateProduct;
