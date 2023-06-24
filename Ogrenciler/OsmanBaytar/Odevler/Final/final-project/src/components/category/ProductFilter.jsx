import {
  ProductFilterContainer,
  ProductFilterBox,
  ProductFilterTitle,
  ProductFilterCheckbox,
  ProductFilterLabel,
  ProductFilterNumber,
  ProductFilterInput,
} from "../../styles/ProductFilter";

const ProductFilter = () => {
  return (
    <div>
      <ProductFilterContainer>
        <ProductFilterBox>
          <ProductFilterTitle>Category</ProductFilterTitle>
          <div className="mt-3">
            <span>
              <ProductFilterCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>men's clothing</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>jewelery</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterLabel>electronics</ProductFilterLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterCheckbox type="checkbox" />
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
                <ProductFilterInput type="number" placeholder="Min" min={0} />
              </ProductFilterNumber>
            </span>
            <span>
              <ProductFilterNumber>
                <ProductFilterInput type="number" placeholder="Max" min={0} />
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
