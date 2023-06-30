import { useState, useRef, useEffect } from "react";
import {
  ProductThreeItemsH2,
  ProductThreeItemsH3,
  ProductThreeItemsHeader,
  ProductThreeItemsSpan,
  ProductThreeItemsSort,
  ProductThreeItemsHeaderFilter,
} from "../../styles/ProductThreeItemsStyle";

const ProductThreeItems = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const sortButton = useRef();
  const [sortCount, setSortCount] = useState(0);
  const [filterCount, setFilterCount] = useState(0);

  function handleChangeSort() {
    setSortCount(sortCount + 1);
  }

  useEffect(() => {
    props.isSortValue(sortButton.current.value);
  }, [sortCount]);

  function handleMobileCheck() {
    setFilterCount(filterCount + 1);
  }

  useEffect(() => {
    if (filterCount % 2 == 0) {
      props.isFilter(false);
    } else {
      props.isFilter(true);
    }
  }, [filterCount]);

  useEffect(() => {
    if (window.innerWidth < 992) {
      props.isMobile(true);
    } else if (window.innerWidth > 992) {
      props.isMobile(false);
    }
  }, [window.innerWidth]);

  return (
    <div className="row mt-5">
      <div className="col-lg-3">
        <ProductThreeItemsH3>Filter</ProductThreeItemsH3>
      </div>
      <ProductThreeItemsHeader className="col-lg-9">
        <ProductThreeItemsHeaderFilter>
          <ProductThreeItemsH3>Products</ProductThreeItemsH3>
          <ProductThreeItemsSpan>20 Products</ProductThreeItemsSpan>
          <ProductThreeItemsH2 onClick={handleMobileCheck}>
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
    </div>
  );
};

export default ProductThreeItems;
