import ProductBox from "../category/ProductBox";

const FourBoxes = ({ data }) => {
  return (
    <div className="container my-3">
      <div className="row">
        {data.map((product, index) => {
          return (
            <div className="col-xxl-3  col-md-6 col-sm-12 col-6" key={index}>
              <ProductBox product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourBoxes;
