import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import StButton from "../Button/Button";
const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const user = useSelector((state) => state.root.user);
  const [categories, setCategories] = useState([]);

  const [editedProduct, setEditedProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    count: 0,
    image: "",
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const products = await response.json();
        const uniqueCategories = [
          ...new Set(products.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
        setProducts(products);
      } catch (error) {
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  const openEditModal = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditProductId(productId);
    setEditedProduct(productToEdit);
  };

  const closeEditModal = () => {
    setEditProductId(null);
    setEditedProduct({
      title: "",
      price: 0,
      description: "",
      category: "",
      count: 0,
      image: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value.trim() !== "" ? parseInt(value) : 0;
    if (isNaN(parsedValue)) {
      toast.error("Please enter a valid number for count.");
      return;
    }
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      rating: {
        ...prevProduct.rating,
        count: parseInt(value),
      },
    }));
  };

  const handleEditProduct = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/products/${editProductId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...editedProduct,
            rating: {
              ...editedProduct.rating,
              count: editedProduct.rating.count,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update product on the server.");
      }

      const productsResponse = await fetch("http://localhost:3000/products");
      const updatedProducts = await productsResponse.json();
      setProducts(updatedProducts);
      toast.success("Product updated successfully");
      closeEditModal();
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

  const renderEditButton = (product) => {
    if (
      user === "admin" &&
      location.pathname === `/home/admin/products/${product.id}`
    ) {
      return (
        <StButton
          onClick={() => openEditModal(product.id)}
          text="edit"
          type="dark-blue"
        />
      );
    }
    return null;
  };

  const handleCategoryChange = (e) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      category: e.target.value,
    }));
  };
  return (
    <div className="pt-5">
      <ToastContainer />
      {products.map((product) => (
        <div key={product.id}>{renderEditButton(product)}</div>
      ))}
      {editProductId && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <StButton
                  text="X"
                  type="button"
                  className="close"
                  onClick={closeEditModal}
                ></StButton>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={editedProduct.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={editedProduct.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={editedProduct.description}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <select
                      className="form-control"
                      id="category"
                      value={editedProduct.category}
                      onChange={handleCategoryChange}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="count">Stock:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="count"
                      name="count"
                      min={0}
                      value={editedProduct.rating.count}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeEditModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEditProduct}
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
