import React from "react";
import { capitalizeWords } from "../../helpers/capitalize";

function EditModal({
  editProduct,
  setEditProduct,
  handleEditSubmit,
  categories,
}) {
  return (
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
              Edit Product
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="image">Image</label>
            <input
              type="url"
              className="form-control"
              value={editProduct?.image}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  image: e.target.value,
                })
              }
            />
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              value={editProduct?.title}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  title: e.target.value,
                })
              }
            />
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              value={editProduct?.price}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  price: e.target.value,
                })
              }
            />
            <label htmlFor="category">Category</label>
            <div className="w-100">
              <select
                name="category"
                id=""
                className="form-select"
                onChange={(e) =>
                  setEditProduct({
                    ...editProduct,
                    category: e.target.value,
                  })
                }
              >
                {Array.from(categories).map((category) => (
                  <option key={category} value={category}>
                    {capitalizeWords(category)}
                  </option>
                ))}
              </select>
            </div>
            <label htmlFor="rating-rate">Rating</label>
            <input
              type="number"
              className="form-control"
              min={0.1}
              max={5}
              step={0.1}
              value={editProduct?.rating.rate}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  rating: {
                    ...editProduct.rating,
                    rate: parseFloat(e.target.value),
                  },
                })
              }
            />
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              value={editProduct?.description}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  description: e.target.value,
                })
              }
            />
            <label htmlFor="">Review Count</label>
            <input
              type="number"
              className="form-control"
              value={editProduct?.rating.count}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  rating: {
                    ...editProduct.rating,
                    count: parseFloat(e.target.value),
                  },
                })
              }
            />
            <label htmlFor="">Stock</label>
            <input
              type="number"
              className="form-control"
              value={editProduct?.stock}
              onChange={(e) =>
                setEditProduct({
                  ...editProduct,
                  stock: parseFloat(e.target.value),
                })
              }
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleEditSubmit}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
