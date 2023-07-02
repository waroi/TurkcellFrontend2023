import React from "react";
import styles from "./DetailCard.module.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { handleCard } from "../../redux/slices/cardSlice";
import { ToastContainer,toast } from "react-toastify";
const DetailPageCard = ({ item }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.users).currentlyLoggedIn;
  const cardData = {
    "userid": userData.id,
    "itemid": item.id,
    "count": 1,
    "image": item.image,
    "title":item.title,
    "price": item.price
  }

  async function handleClick(){
    dispatch(handleCard(cardData));
    toast.success("Products Added To Card", {
      autoClose: 2000,
    });
  }
  return (
    <div className={`col-6 col-lg-3 ${styles.cardContent}`}>
      <ToastContainer/>
      <div
        className={`${styles.homeCard} card h-100 border-0  d-flex  justify-content-around`}
      >
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
            stock: {item.rating.count}
            <i className="fa-solid fa-circle text-black opacity-25 px-2 fa-2xs"></i>
            rating: {item.rating.count}
          </p>
          <p className={`card-text`}>{item.price} $</p>
        </div>
        <div className="d-flex  align-items-center justify-content-center px-2 pb-3">
          <Link
            to={`/products/${item.id}`}
            className={`btn btn-secondary rounded-pill display-10 me-2 w-50 ${styles.text}`}>
            Explore
          </Link>
          <div
          onClick={() => handleClick()}
            className={`btn btn-primary rounded-pill display-10 w-50 ${styles.text}`}>
            Add To Card
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPageCard;
