import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import cartIcon from '../../assets/icon/cart.png';
import deleteIcon from '../../assets/icon/delete.png';
import { fetchBasket, removeItemFromBasket, updateItemInBasket } from '../../redux/features/basketSlice';
import { updateProduct } from '../../redux/features/productSlice';
import request from '../../utils/request';
import './basketStyle.scss';

const Basket = () => {
  const dispatch = useDispatch();
  const baskets = useSelector((state) => state.basket.basket);
  const dropdownRef = useRef(null);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (user != null) {
      dispatch(fetchBasket(user.id));
    }
  }, []);

  const handleDelete = (item) => {
    dispatch(removeItemFromBasket(item.id, user.id));
  };

  const handleQuantityChange = (item, quantity) => {
    if (quantity === 0) {
      dispatch(removeItemFromBasket(item.id, user.id));
    } else {
      if (quantity > item.product.rating.count) {
        toast.error('Insufficient stock. Cannot add to basket.', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        });

        return;
      }
      const newItem = {
        ...item,
        quantity,
      }
      dispatch(updateItemInBasket(newItem, user.id));
    }
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  const handleDropdownButton = async () => {
    for (const item of baskets) {
      await checkStockAndUpdateBasket(item);
    }
  };

  const handleCheckout = async () => {
    for (const item of baskets) {
      await checkStockAndUpdateBasket(item, true);
    }
    toast.success('Checkout successful!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000
    });
  };

  const checkStockAndUpdateBasket = async (item, isCheckout = false) => {
    try {
      const response = await request.getRequest(`http://localhost:3000/products/${item.product.id}`);
      if (!response.rating || response.rating.count === 0) {
        dispatch(removeItemFromBasket(item.id, user.id));
        toast.error(`Insufficient stock. Product with ${item.title} has been removed from the basket.`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        });
        return;
      }

      if (response.rating.count < item.quantity) {
        dispatch(updateItemInBasket({
          ...item,
          quantity: response.rating.count
        }, user.id));
        toast.error(`Insufficient stock. Quantity of product with ${item.title} has been adjusted.`, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000
        });
      } else if (isCheckout) {
        const product = {
          ...item.product,
          rating: {
            ...item.product.rating,
            count: item.product.rating?.count ? item.product.rating.count - item.quantity : 0
          }
        };
        dispatch(updateProduct(product));
        dispatch(removeItemFromBasket(item.id, user.id));
      }
    } catch (error) {
      console.log(error);
      // Handle error case
    }
  };

  const uniqueProductCount = baskets.length;

  const cartIconStyle = {
    position: 'relative',
    display: 'inline-block',
  };

  const badgeStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const totalPrice = baskets.reduce((total, item) => total + item.quantity * item.product.price, 0).toFixed(2);

  return (
    <div className="dropdown sorting-button" ref={dropdownRef}>
      <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" onClick={handleDropdownButton}>
        <div style={cartIconStyle}>
          <img src={cartIcon} alt="" />
          {uniqueProductCount > 0 && <div style={badgeStyle}>{uniqueProductCount}</div>}
        </div>
      </button>
      <ul className="dropdown-menu basketMenu p-3 dropdown-menu-end basketDropdown" onClick={handleDropdownClick}>
        <li className="basketHeading">
          <div className="card mb-3">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <div className='basketTitle'>
                    <h5 className="mb-0 fw-bold text-center">Product Detail</h5>
                  </div>
                  <div className="ms-3 basketTitle">
                    <h5 className="mb-0 fw-bold text-center">Title</h5>
                  </div>
                  <div className="ms-4 basketQuantity">
                    <h5 className="mb-0 fw-bold text-center">Quantity</h5>
                  </div>
                  <div className="basketPrice">
                    <h5 className="mb-0 fw-bold text-center">Price</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
        {baskets.map((item) => (
          <li key={item.product.id} className="d-flex align-items-center">
            <div className="card mb-3">
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div className="d-flex flex-row align-items-center">
                    <div>
                      <img
                        src={item.product.images[0]}
                        className="rounded-3 basketImages"
                        alt="Shopping item"
                      />
                    </div>
                    <div className="ms-3 basketTitle">
                      <h5 className="mb-0 text-center">{item.product.title}</h5>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-row align-items-center justify-content-center basketQuantity ms-4">
                      <button
                        className="btn quantityButton"
                        onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className="quantityInput"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                      />
                      <button
                        className="btn quantityButton"
                        onClick={() => handleQuantityChange(item, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    <div className="basketPrice">
                      <h5 className="mb-0 text-center">${item.product.price}</h5>
                    </div>
                    <div className="deleteButton">
                      <button className="btn " onClick={() => handleDelete(item)}>
                        <img src={deleteIcon} alt="" />
                      </button>
                    </div>
                    <a href="#!" style={{ color: '#cecece' }}>
                      <i className="fas fa-trash-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
        <div className="card">
          <div className="card-body">
            <div className="basketTotal d-flex flex-row justify-content-between align-items-center ">
              <h5 className="mb-0 fw-bold text-center basketCheckout">Total</h5>
              <h5 className="mb-0 basketCheckout fw-bold">${totalPrice}</h5>
            </div>
          </div>
        </div>
        <div className="text-end w-100">
          <button className="btn btn-dark my-2" onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </ul>


    </div>
  );
};

export default Basket;
