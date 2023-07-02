import ProductBox from "../category/ProductBox";
import styled from "styled-components";

const FourBoxesMobileContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FourBoxesMobile = ({ data }) => {
  return (
    <FourBoxesMobileContainer className="container my-3">
      <div className="row">
        {data.map((product, index) => {
          return (
            <div className="col-xxl-3  col-md-6 col-sm-12 col-6" key={index}>
              <ProductBox product={product} />
            </div>
          );
        })}
      </div>
    </FourBoxesMobileContainer>
  );
};

export default FourBoxesMobile;
