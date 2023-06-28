import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { editProductSchema } from "../../schemas";

function EditProductModal({ isOpen, handleClose, handleUpdate, product }) {
  const [updatedProduct, setUpdatedProduct] = useState(product || {});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdatedProduct(product);
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prevState) => {
      if (name === "rate") {
        return {
          ...prevState,
          rating: {
            ...prevState.rating,
            rate: value,
          },
        };
      }
      if (name === "stock") {
        return {
          ...prevState,
          rating: {
            ...prevState.rating,
            count: value,
          },
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await editProductSchema.validate(updatedProduct, { abortEarly: false });
      await handleUpdate(updatedProduct);
      setUpdatedProduct(product);
      handleClose();
      window.location.reload();
    } catch (error) {
      if (error.name === "ValidationError") {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <Modal show={isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formImage">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={updatedProduct.image || ""}
              onChange={handleChange}
              isInvalid={!!errors.image}
            />
            {errors.image && (
              <Form.Control.Feedback type="invalid">
                {errors.image}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={updatedProduct.title || ""}
              onChange={handleChange}
              isInvalid={!!errors.title}
            />
            {errors.title && (
              <Form.Control.Feedback type="invalid">
                {errors.title}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formPrice">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={updatedProduct.price || ""}
              onChange={handleChange}
              isInvalid={!!errors.price}
            />
            {errors.price && (
              <Form.Control.Feedback type="invalid">
                {errors.price}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={updatedProduct.category || ""}
              onChange={handleChange}
              isInvalid={!!errors.category}
            />
            {errors.category && (
              <Form.Control.Feedback type="invalid">
                {errors.category}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              name="rate"
              max="5"
              min="0"
              step="0.01"
              value={parseFloat(updatedProduct.rating?.rate).toString() || ""}
              onChange={handleChange}
              isInvalid={!!errors.rate}
            />
            {errors.rate && (
              <Form.Control.Feedback type="invalid">
                {errors.rate}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formStock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              name="stock"
              value={updatedProduct.rating?.count || ""}
              onChange={handleChange}
              isInvalid={!!errors.stock}
            />
            {errors.stock && (
              <Form.Control.Feedback type="invalid">
                {errors.stock}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={updatedProduct.description || ""}
              onChange={handleChange}
              isInvalid={!!errors.description}
            />
            {errors.description && (
              <Form.Control.Feedback type="invalid">
                {errors.description}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group className="d-flex justify-content-center mt-2">
            <Button className="btn-nav" type="submit">
              Save Changes
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

EditProductModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired,
};

export default EditProductModal;
