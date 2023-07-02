import {
  ProductFilterContainer,
  ProductFilterBox,
  ProductFilterTitle,
  ProductFilterCheckbox,
  ProductFilterLabel,
  ProductFilterNumber,
  ProductFilterInput,
} from "../../styles/ProductFilter";
import { useState } from "react";

const ProductFilter = (props) => {
  const [mensClothingCount, setMensClothingCount] = useState(0);
  const [jeweleryCount, setJeweleryCount] = useState(0);
  const [electronicsCount, setElectronicsCount] = useState(0);
  const [womensClothingCount, setWomensClothingCount] = useState(0);

  function handleClickMensClothing() {
    if (mensClothingCount % 2 == 0) {
      setMensClothingCount(mensClothingCount + 1);
      props.isMensClothing(true);
    } else {
      setMensClothingCount(mensClothingCount + 1);
      props.isMensClothing(false);
    }
  }

  function handleClickJewelery() {
    if (jeweleryCount % 2 == 0) {
      setJeweleryCount(jeweleryCount + 1);
      props.isJewelery(true);
    } else {
      setJeweleryCount(jeweleryCount + 1);
      props.isJewelery(false);
    }
  }

  function handleClickElectronics() {
    if (electronicsCount % 2 == 0) {
      setElectronicsCount(electronicsCount + 1);
      props.isElectronics(true);
    } else {
      setElectronicsCount(electronicsCount + 1);
      props.isElectronics(false);
    }
  }

  function handleClickWomensClothing() {
    if (womensClothingCount % 2 == 0) {
      setWomensClothingCount(womensClothingCount + 1);
      props.isWomensClothing(true);
    } else {
      setWomensClothingCount(womensClothingCount + 1);
      props.isWomensClothing(false);
    }
  }

  function handleChangeMinPrice(e) {
    props.isMinPrice(e.target.value);
  }
  function handleChangeMaxPrice(e) {
    props.isMaxPrice(e.target.value);
  }
  function handleChangeMinRate(e) {
    props.isMinRate(e.target.value);
  }
  function handleChangeMaxRate(e) {
    props.isMaxRate(e.target.value);
  }

  return (
    <div>
      <ProductFilterContainer>
        <ProductFilterBox>
          <ProductFilterTitle>Category</ProductFilterTitle>
          <div className="mt-3">
            <span>
              <ProductFilterCheckbox
                onClick={handleClickMensClothing}
                type="checkbox"
              />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>men's clothing</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox
                onClick={handleClickJewelery}
                type="checkbox"
              />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>jewelery</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox
                onClick={handleClickElectronics}
                type="checkbox"
              />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>electronics</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox
                onClick={handleClickWomensClothing}
                type="checkbox"
              />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>women's clothing</ProductFilterLabel>
            </span>
          </div>
        </ProductFilterBox>
        <ProductFilterBox>
          <ProductFilterTitle>Price</ProductFilterTitle>
          <div>
            <span>
              <ProductFilterNumber>
                <ProductFilterInput
                  onChange={handleChangeMinPrice}
                  type="number"
                  placeholder="Min"
                  min={0}
                  max={999.99}
                />
              </ProductFilterNumber>
            </span>
            <span>
              <ProductFilterNumber>
                <ProductFilterInput
                  onChange={handleChangeMaxPrice}
                  type="number"
                  placeholder="Max"
                  min={0}
                  max={999.99}
                />
              </ProductFilterNumber>
            </span>
          </div>
        </ProductFilterBox>
        <ProductFilterBox>
          <ProductFilterTitle>Rate</ProductFilterTitle>
          <div>
            <span>
              <ProductFilterNumber>
                <ProductFilterInput
                  type="number"
                  placeholder="Min"
                  onChange={handleChangeMinRate}
                  min={0}
                  max={5}
                  step={0.1}
                />
              </ProductFilterNumber>
            </span>
            <span>
              <ProductFilterNumber>
                <ProductFilterInput
                  type="number"
                  placeholder="Max"
                  onChange={handleChangeMaxRate}
                  min={0}
                  max={5}
                  step={0.1}
                />
              </ProductFilterNumber>
            </span>
          </div>
        </ProductFilterBox>
      </ProductFilterContainer>
    </div>
  );
};

export default ProductFilter;
