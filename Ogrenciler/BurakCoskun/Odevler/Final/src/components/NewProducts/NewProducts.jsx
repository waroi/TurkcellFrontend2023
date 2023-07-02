import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NewProducts = ({ products, length }) => {
  const navigate = useNavigate();

  return (
    <div className="container py-5 newProducts">
      <div className="row">
        <div className="col-lg-9">
          <p>Whats new?</p>
          <h4 className="text-primary fw-bold">
            Take A Look At Some Of Products
          </h4>
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <Button
            text={[
              "View more",
              <img
                src="/icons/Chevron_Right_MD.png"
                className="ms-2"
                alt="Right Arrow"
                key="image"
              />,
            ]}
            onClick={() => navigate("/products")}
            bgColor="outline-primary"
          />
        </div>
      </div>
      <div className="row my-4 gy-5 ">
        {products.slice(0, length).map((product) => (
          <div className="col-xl-3 col-sm-6 col-12" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className="d-block d-lg-none">
        <div className="mobileViewMore">
          <Button
            text={[
              "View more",
              <img
                src="/icons/Chevron_Right_MD.png"
                className="ms-2"
                alt="Right Arrow"
                key="image"
              />,
            ]}
            onClick={() => navigate("/products")}
            bgColor="outline-primary"
            width="w-100"
          />
        </div>
      </div>
    </div>
  );
};

export default NewProducts;

NewProducts.propTypes = {
  products: PropTypes.array.isRequired,
  length: PropTypes.number.isRequired,
};
