import React from "react";
import styles from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCard, handleCard } from "../../redux/slices/cardSlice";
import { ToastContainer,toast } from "react-toastify";
import { getProducts } from "../../redux/slices/productSlice";
import { getCardData, getData } from "../../redux/helpers";
const ProductPageCard = ({ item }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users).currentlyLoggedIn
  const currentCard = useSelector((state) => state.cards).items
  const currentUserBasket = currentCard.find((data) => data.id == currentUser.id);
  const currentBasketData = currentUserBasket?.usercard.find((product) => product.itemid == item.id);

  const cardData = {
    "userid": currentUser.id,
    "itemid": item.id,
    "count": 1,
    "productCount" : 1,
    "image": item.image,
    "title":item.title,
    "price": item.price
  }
async function handleClick(){
  let data = await getData();
  let currCardData = await getCardData();
  await dispatch(getCard(currCardData))
  await  dispatch(handleCard(cardData));
  toast.success("Products Added To Card", {
    autoClose: 2000,
  });
  await dispatch(getProducts(data));
  currentBasketData?.count > item?.rating.count   && toast.error("Not Enought Stock!", {
    autoClose: 2000,
  });
}
  return (
    <div className="col-6 col-lg-4">
      <ToastContainer />
    <div className={`${styles.cardContent} h-100`}>
      <div className={`${styles.homeCard} card h-100 border-0  d-flex  justify-content-around`}>
        <img src={item.image} className={`${styles.img}`} alt="..." />
        <div className="card-body d-flex flex-column justify-content-end">
          <h5 className="card-title text-info fs-6 fw-semibold">
            {item.title.length > 30
              ? `${item.title.slice(0, 30)}...`
              : item.title}
          </h5>
          <p className={`card-text ${styles.text}`}>
            category: <span className="fw-semibold">{item.category}</span>
          </p>
          <p className={`card-text ${styles.text}`}>
            stock: {item.rating.count}{" "}
            <i className="fa-solid fa-circle text-black opacity-25 px-2 fa-2xs"></i>
            rating: {item.rating.count}
          </p>
          <p className={`card-text`}>{item.price} $</p>
        </div>
        <div className="d-flex  align-items-center justify-content-center px-2 pb-3">
          <Link to={`/products/${item.id}`} className={`btn btn-secondary rounded-pill display-10 me-2 w-50 ${styles.text}`}>Explore Product</Link>
          <button disabled={item.rating.count <= 0 || currentBasketData?.count > item.rating.count -1} onClick={() => handleClick()} className={`btn btn-primary rounded-pill display-10 w-50 ${styles.text}`}>{item?.rating.count == 0 ? "Stocks Out" : "Add To Card"} </button>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default ProductPageCard;
