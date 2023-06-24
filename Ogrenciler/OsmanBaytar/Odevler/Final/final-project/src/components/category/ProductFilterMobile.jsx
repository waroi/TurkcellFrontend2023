import {
  ProductFilterMobileContainer,
  ProductFilterMobileBox,
  ProductFilterMobileTitle,
  ProductFilterMobileCheckbox,
  ProductFilterMobileLabel,
  ProductFilterMobileNumber,
  ProductFilterMobileInput,
} from "../../styles/ProductFilterMobile";

const ProductFilterMobile = () => {
  return (
    <div>
      <ProductFilterMobileContainer>
        <ProductFilterMobileBox>
          <ProductFilterMobileTitle>Category</ProductFilterMobileTitle>
          <div className="mt-3">
            <span>
              <ProductFilterMobileCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterMobileLabel>
                men's clothing
              </ProductFilterMobileLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterMobileCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterMobileLabel>jewelery</ProductFilterMobileLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterMobileCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterMobileLabel>electronics</ProductFilterMobileLabel>
            </span>
          </div>
          <div className="mt-1">
            <span>
              <ProductFilterMobileCheckbox type="checkbox" />
            </span>
            <span className="ms-3">
              <ProductFilterMobileLabel>
                women's clothing
              </ProductFilterMobileLabel>
            </span>
          </div>
        </ProductFilterMobileBox>
        <ProductFilterMobileBox>
          <ProductFilterMobileTitle>Price</ProductFilterMobileTitle>
          <div>
            <span>
              <ProductFilterMobileNumber>
                <ProductFilterMobileInput
                  type="number"
                  placeholder="Min"
                  min={0}
                />
              </ProductFilterMobileNumber>
            </span>
            <span>
              <ProductFilterMobileNumber>
                <ProductFilterMobileInput
                  type="number"
                  placeholder="Max"
                  min={0}
                />
              </ProductFilterMobileNumber>
            </span>
          </div>
        </ProductFilterMobileBox>
        <ProductFilterMobileBox>
          <ProductFilterMobileTitle>Rate</ProductFilterMobileTitle>
          <div>
            <span>
              <ProductFilterMobileNumber>
                <ProductFilterMobileInput
                  type="number"
                  placeholder="Min"
                  min={0}
                  max={5}
                  step={0.1}
                />
              </ProductFilterMobileNumber>
            </span>
            <span>
              <ProductFilterMobileNumber>
                <ProductFilterMobileInput
                  type="number"
                  placeholder="Max"
                  min={0}
                  max={5}
                  step={0.1}
                />
              </ProductFilterMobileNumber>
            </span>
          </div>
        </ProductFilterMobileBox>
      </ProductFilterMobileContainer>
    </div>
  );
};

export default ProductFilterMobile;
