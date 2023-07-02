import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Facebook from '../../assets/icon/facebook-light.png';
import Instagram from '../../assets/icon/instagram-light.png';
import petIcon from '../../assets/icon/petIcon.png';
import Share from '../../assets/icon/share.png';
import Twitter from '../../assets/icon/twitter-light.png';
import Youtube from '../../assets/icon/youtube-light.png';
import Footer from '../../components/footer/footer';
import { addItemToBasket, updateItemInBasket } from '../../redux/features/basketSlice';
import '../../style/style.scss';
import request from '../../utils/request';
import ImageSliderView from '../../view/detail/ImageSliderView/imageSliderView';
import SeeMoreView from '../../view/detail/seeMoreView/seeMoreView';
import './productDetailStyle.scss';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const [isButtonDisabled, setButtonDisabled] = useState({});
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();



  useEffect(() => {
    request
      .getRequest(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  const handleBasketClick = () => {
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

  return (
    <div className="mt-5 py-5">
      {product && (
        <div className="container">
          <div className="row border py-5  rounded-5 mt-5">
            <div className="col-12 col-md-6 px-5 d-flex flex-column ">
              <div className="product-slider">
                <div id="carousel" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    {product.images.map((image, index) => (
                      <div
                        className={`item ${index === 0 ? "active" : ""}`}
                        key={index}
                      >
                        <img className="img-fluid" src={image} alt={product.title} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="clearfix">
                  <div
                    id="thumbcarousel"
                    className="carousel slide"
                    data-interval="false"
                  >
                    <div className="carousel-inner">
                      <div className="item active">
                        {product.images.map((image, index) => (
                          <div
                            data-target="#carousel"
                            data-slide-to={index}
                            className="thumb"
                            key={index}
                          >
                            <img
                              className="img-fluid"
                              src={image}
                              alt={product.title}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    <a
                      className="left carousel-control"
                      href="#thumbcarousel"
                      role="button"
                      data-slide="prev"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <a
                      className="right carousel-control"
                      href="#thumbcarousel"
                      role="button"
                      data-slide="next"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='d-flex align-items-center  mt-5 pet-area rounded-4  '><img src={petIcon} alt="" className='ms-4' />
                <p className='mb-0 ms-3'>Contribute to animal friends with this shopping | 100% Organic</p></div>
              <div className='d-flex align-items-center  mt-4  '><img src={Share} alt="" className='ms-4' />
                <h4 className='text-dark m-0 ms-3'>Share:</h4>
                <div className="d-flex gap-3 ms-3 align-items-center"><a href="#"><img src={Facebook} alt="facebook" /></a>
                  <a href="#"><img src={Twitter} alt="twitter" /></a>
                  <a href="#"><img src={Instagram} alt="instagram" /></a>
                  <a href="#"><img src={Youtube} alt="youtube" /></a></div>
              </div>
            </div>
            <div className="col-12 col-md-6 p-2 product-detail">
              <p className='product-id'>#{product.id}</p>
              <h1 className='product-title'>{product.title}</h1>
              <p className='product-price text-dark'>${product.price}</p>
              {user != null && (
                <div className="d-flex gap-4">
                  {product.rating.count > 0 || isButtonDisabled ? (
                    <button className="btn btn-light bg-light border-button" onClick={() => handleBasketClick(product)}>
                      Add to basket
                    </button>
                  ) : (
                    <button className="btn btn-light bg-light border-button" disabled>
                      Sold out
                    </button>
                  )}
                </div>
              )}
              <div className="row mt-3 table">
                <div className="d-flex justify-content-between border-bottom mt-2 ">
                  <div className="col-6">
                    <p className='detail-table-text'>Stock Number</p>
                  </div>
                  <div className='col-6 d-flex '> <p className='product-id ms-3 mt-0 product-id '>: #{product.id}</p></div>
                </div>
                <div className="d-flex justify-content-between border-bottom  mt-2">
                  <div className="col-6">
                    <p className='detail-table-text'>Explanation</p>
                  </div>
                  <div className='col-6 d-flex'> <p className='product-id ms-3 '>: {product.description}</p></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container">
        <ImageSliderView />
        <SeeMoreView />
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetailPage;
