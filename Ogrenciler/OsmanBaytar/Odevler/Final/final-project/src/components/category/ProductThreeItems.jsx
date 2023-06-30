import { useState, useRef, useEffect } from "react";
import {
  ProductThreeItemsH2,
  ProductThreeItemsH3,
  ProductThreeItemsHeader,
  ProductThreeItemsSpan,
  ProductThreeItemsSort,
  ProductThreeItemsHeaderFilter,
  ProductThreeItemsMobileH3,
  ProductThreeItemsMobileSpan,
} from "../../styles/ProductThreeItemsStyle";
import ProductFilterMobile from "./ProductFilterMobile";

const ProductThreeItems = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const sortButton = useRef();
  const [sortCount, setSortCount] = useState(0);

  function handleChangeSort(e) {
    setSortCount(sortCount + 1);
  }

  useEffect(() => {
    props.isSortValue(sortButton.current.value);
  }, [sortCount]);

  return (
    <div className="row mt-5">
      <div className="col-lg-3">
        <ProductThreeItemsH3>Filter</ProductThreeItemsH3>
      </div>
      <ProductThreeItemsHeader className="col-lg-9">
        <ProductThreeItemsHeaderFilter>
          <ProductThreeItemsH3>Products</ProductThreeItemsH3>
          <ProductThreeItemsSpan>20 Products</ProductThreeItemsSpan>
          <ProductThreeItemsH2 onClick={() => setIsMobile(!isMobile)}>
            <span className="me-1">
              <i className="fa-solid fa-filter"></i>
            </span>
            Filter
          </ProductThreeItemsH2>
        </ProductThreeItemsHeaderFilter>
        <ProductThreeItemsSort ref={sortButton} onClick={handleChangeSort}>
          <option value="default">Default</option>
          <option value="title-a-z">Title (a-z)</option>
          <option value="title-z-a">Title (z-a)</option>
          <option value="price-low-high">Price (low to high)</option>
          <option value="price-high-low">Price (high to low)</option>
          <option value="rating-high-low">Rating (high to low)</option>
          <option value="rating-low-high">Rating (low to high)</option>
        </ProductThreeItemsSort>
      </ProductThreeItemsHeader>
      {isMobile && <ProductFilterMobile />}
      <div className="mt-3">
        <ProductThreeItemsMobileH3>Products</ProductThreeItemsMobileH3>
        <ProductThreeItemsMobileSpan>20 Products</ProductThreeItemsMobileSpan>
      </div>
    </div>
  );
};

export default ProductThreeItems;
