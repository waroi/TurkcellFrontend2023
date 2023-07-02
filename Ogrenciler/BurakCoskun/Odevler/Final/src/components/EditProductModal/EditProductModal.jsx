import PropTypes from "prop-types";
import { useState } from "react";
import { Products } from "../../services/api";
import { setProducts } from "../../redux/slices/productSlice";
import { useDispatch } from "react-redux";

const EditProductModal = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);
  const [image, setImage] = useState(product.image);
  const [category, setCategory] = useState(product.category);
  const [stock, setStock] = useState(product.rating.count);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = {
      title,
      price,
      description,
      image,
      category,
      rating: {
        rate: product.rating.rate,
        count: stock,
      },
    };
    await Products.editOne(product.id, updatedProduct);
    await Products.getAll().then((res) => dispatch(setProducts(res)));
  };

  return (
    <div
      className="modal fade"
      id="editModal"
      tabIndex="-1"
      aria-labelledby="editModalLabel"
      aria-hidden="true"
      data-bs-centered="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="fw-bold text-primary mb-2">Edit Product</h2>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stock" className="form-label">
                  Stock
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="stock"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="image"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => handleSubmit(e)}
              data-bs-dismiss="modal"
            >
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

EditProductModal.propTypes = {
  product: PropTypes.object.isRequired,
};

export default EditProductModal;
