import { useNavigate } from "react-router-dom";
import styles from "./productCard.module.css";

const ProductCard = ({ product, isSwiper = false }) => {
  const navigate = useNavigate();

  const { id, title, price, category, image, rating } = product;

  const starRating = (stars) => "★★★★★✩✩✩✩✩".slice(5 - stars, 10 - stars);
  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      className={`d-flex flex-column col-lg-3 col-md-4 col-6 ${
        styles["product-card"]
      }
       ${isSwiper && "w-100"} ${rating.count===0&&"opacity-50"}
       `}
    >
      <div
        className={`d-flex flex-column w-100 rounded ${styles["card-content"]}`}
      >
        <img
          src={image}
          alt="product image"
          className={`m-2 rounded p-4 ${styles["image"]}`}
        />
        <div className="my-2" style={{ height: "200px" }}>
          <p
            className={`border rounded p-1 m-2 bg-primary text-white category ${styles["category"]}`}
          >
            {category}
          </p>
          <p className={`m-2 short-paragraph ${styles["title"]}`}>{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center m-2 gap-2">
              <p className="m-0 text-warning">
                {starRating(Math.round(rating.rate))}
              </p>{" "}
              <p className="m-0 text-black">{rating.rate}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <p className={`m-2 ${rating.count===0&&"text-danger"}`}>{rating.count} Stock</p>
            <p className="m-2">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
