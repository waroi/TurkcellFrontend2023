/* eslint-disable react/prop-types */

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import basketIcon from '../../assets/icon/cardWhite.png';
import editIcon from '../../assets/icon/edit.png';
import defaultImage from '../../assets/image/defaultImage.png'; // Import the default image
import { addItemToBasket, fetchBasket, updateItemInBasket } from '../../redux/features/basketSlice';
import { getProducts } from '../../redux/features/productSlice';
import '../../style/style.scss';
import request from '../../utils/request';
import './firstCardStyle.scss';

const FirstCard = ({ products, col }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.basket);
  const [isButtonDisabled, setButtonDisabled] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState({
    title: '',
    category: '',
    price: '',
    images: []
  });
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
  }, [dispatch]);

  useEffect(() => {
    if (user != null) {
      dispatch(fetchBasket(user.id));
    }
  }, [dispatch]);

  const handleTitleClick = (productId) => {
    window.scrollTo({ top: 0 });
    window.location.href = `/product/${productId}`;
  };

  const handleBasketClick = (product) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const newBasketItem = {
      userId: user.id,
      product: product,
      quantity: 1,
    };

    console.log('newBasketItem', newBasketItem);
    console.log('basket', basket);

    const existingBasketItem = basket.find((item) => item.product.id === product.id);

    if (existingBasketItem) {
      if (existingBasketItem.quantity >= product.rating.count) {
        toast.error('Insufficient stock. Cannot add to basket.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        });
        setButtonDisabled(prevState => ({
          ...prevState,
          [product.id]: true
        }));
        return;
      }
      const updatedBasketItem = {
        ...existingBasketItem,
        quantity: existingBasketItem.quantity + 1
      };
      console.log('existingBasketItem', existingBasketItem);
      dispatch(updateItemInBasket(updatedBasketItem, user.id));
    } else {
      dispatch(addItemToBasket(newBasketItem, user.id));
    }

    toast.success('Product added to basket', {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 2000
    });
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setEditedProduct(product);
    console.log('Selected product:', editedProduct);
  };

  const handleSaveClick = () => {
    // Burada ürün bilgilerini güncelleme işlemlerini yapabilirsiniz.
    // Örneğin, dispatch ile güncelleme işlemi yapılabilir.
    request.putRequest(`http://localhost:3000/products/${editedProduct.id}`, editedProduct);
    dispatch(getProducts());
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleAddImage = () => {
    setEditedProduct(prevState => ({
      ...prevState,
      images: [...prevState.images, '']
    }));
  };

  const handleRemoveImage = (index) => {
    setEditedProduct(prevState => {
      const images = [...prevState.images];
      images.splice(index, 1);
      return {
        ...prevState,
        images
      };
    });
  };

  const handleImageChange = (event, index) => {
    const { value } = event.target;
    setEditedProduct(prevState => {
      const images = [...prevState.images];
      images[index] = value;
      return {
        ...prevState,
        images
      };
    });
  };

  return (
    <>
      {products.map((product) => (
        <div className={`col-6 col-lg-${col}   mt-3`} key={product.id}>
          <ToastContainer />
          <div className="card rounded-3 border-0 shadow">
            <div className="p-3 bg-light">
              <div className="image-container">
                <img
                  className="card-img-top rounded-3 product-image"
                  src={product.images.length > 0 ? product.images[0] : defaultImage} // Use default image if there are no images
                  alt="Card image cap"
                />
                {user != null && (
                  <button
                    className={`btn cartButton ${isButtonDisabled[product.id] || product.rating.count <= 0 ? 'disabled' : ''}`}
                    onClick={() => handleBasketClick(product)}
                    disabled={isButtonDisabled[product.id] || product.rating.count <= 0}
                  >
                    {isButtonDisabled[product.id] || product.rating.count <= 0 ? 'Sold Out' : <img src={basketIcon} alt="" />}
                  </button>
                )}
                {user != null && user.email === 'admin@admin.com' && (
                  <button
                    className={`btn editButton`}
                    onClick={() => handleEditClick(product)}
                    data-toggle="modal" data-target="#exampleModal"
                  >
                    <img className='p-0' src={editIcon} alt="" />
                  </button>
                )}
              </div>
            </div>
            <div className="card-body bg-light rounded-3">
              <h5 className="card-title fs-6 fw-bold pe-auto">
                <a className="pe-auto" onClick={() => handleTitleClick(product.id)}>
                  {product.title.split(' ').slice(0, 4).join(' ')}
                </a>
              </h5>
              <p className="card-text m-0">{product.category}</p>
              <p href="#" className="fw-bold">
                ${product.price}
              </p>
            </div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <div className="modal" tabIndex="-1" role="dialog" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button type="button" className="close closeButtonModal" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={editedProduct.title}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    type="text"
                    className="form-control"
                    id="category"
                    name="category"
                    value={editedProduct.category}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
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
                  <label htmlFor="images">Images</label>
                  {editedProduct.images.map((image, index) => (
                    <div key={index} className="d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control me-2"
                        placeholder="Image URL"
                        value={image}
                        onChange={(event) => handleImageChange(event, index)}
                      />
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemoveImage(index)}
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="btn btn-secondary mt-2"
                    onClick={handleAddImage}
                  >
                    Add Image
                  </button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={handleSaveClick}>Save</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FirstCard;
