import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ product }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [description, setDescription] = useState(product.description);

  const handleUpdate = () => {
    const updatedProduct = {
      ...product,
      title: title,
      price: price,
      description: description,
    };

    fetch(`http://localhost:3001/products/${product.id}`, updatedProduct)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Ürün Güncelleme</h2>
      <form>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="button" onClick={handleUpdate}>
          Güncelle
        </button>
      </form>
    </div>
  );
};

Modal.propTypes = {
  product: PropTypes.object,
};

export default Modal;
