import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { capitalizeWords } from "../../helpers/capitalize";

const RandomProducts = () => {
  const [randomProducts, setRandomProducts] = useState([]);
  const id = useParams();

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    const shuffledArraywoutDisplayingProduct = shuffledArray.splice(
      id.id - 1,
      1
    );

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
        const shuffledProducts = shuffleArray(data);
        const randomProducts = shuffledProducts.slice(0, 8);
        setRandomProducts(randomProducts);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRandomProducts();
  }, [id]);

  const StyledRandomProdTitle = styled.h2`
    color: var(--primary-color-dark-blue, #003459);
    font-size: 24px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
  `;
  const StyledRandomProdCard = styled.div`
    border-radius: 12px;
    background: var(--neutral-color-00, #fdfdfd);
    box-shadow: 0px 4px 28px -2px rgba(0, 0, 0, 0.08);
  `;
  const ProductCardImage = styled.img`
    height: 169px;
    width: 169px;
    margin: auto 0;
  `;
  const RandomProductTitle = styled.h5`
    color: var(--neutral-color-100, #00171f);
    font-size: 16px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
  const RandomProductPrice = styled.h5`
    color: var(--neutral-color-100, #00171f);
    font-size: 14px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
  `;

  const RandomProductAtt = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
  `;

  const RandomProductAttRes = styled.div`
    color: var(--neutral-color-60, #667479);
    font-size: 12px;
    font-family: SVN-Gilroy;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
  `;

  return (
    <div>
      <StyledRandomProdTitle>See More Products</StyledRandomProdTitle>
      <StyledRandomProdCard className="row container row justify-content-between gap-4">
        {randomProducts.map((product) => {
          return (
            <Link
              className="card col-5 col-md-4 col-lg-3 text-decoration-none"
              key={product.id}
              to={`/products/${product.category.replace(/\s+/g, "-")}/${
                product.id
              }`}
            >
              <img src={product.image} alt="" width="100%" height="100" />
              <RandomProductTitle>{product.title}</RandomProductTitle>
              <div>
                <div className="d-flex gap-1 mb-1">
                  <RandomProductAtt>Category:</RandomProductAtt>
                  <RandomProductAttRes>
                    {capitalizeWords(product.category)}
                  </RandomProductAttRes>
                </div>
                <div className="d-flex gap-1 mb-2">
                  <RandomProductAtt>Rating:</RandomProductAtt>
                  <Rating
                    style={{ maxWidth: 50 }}
                    value={product.rating.rate}
                    readOnly
                  />
                </div>
              </div>
              <RandomProductPrice>${product.price}</RandomProductPrice>
            </Link>
          );
        })}
      </StyledRandomProdCard>
    </div>
  );
};

export default RandomProducts;
