import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../redux/slices/productSlice";
import { Link, useParams } from "react-router-dom";

const RandomProducts = () => {
  //   const dispatch = useDispatch();
  //   const products = useSelector((state) => state.products);
  const [randomProducts, setRandomProducts] = useState([]);
  const id = useParams();

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const getRandomProducts = () => {
    fetch("http://localhost:4000/products")
      .then((res) => res.json())
      .then((data) => {
        const randomProducts = shuffleArray(data).slice(0, 8);
        setRandomProducts(randomProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRandomProducts();
  }, [id]);
  return (
    <div className="row">
      {randomProducts.map((product) => {
        return (
          <Link
            className="card col-6"
            key={product.id}
            href={
              "http://localhost:4000/products/" +
              product.category.replace(/\s+/g, "-") / +product.id
            }
            to={`/products/${product.category.replace(/\s+/g, "-")}/${
              product.id
            }`}
          >
            <img src={product.image} alt="" width="100" height="100" />
            <h6>{product.title}</h6>
            <h5>${product.price}</h5>
          </Link>
        );
      })}
    </div>
  );
};

export default RandomProducts;
