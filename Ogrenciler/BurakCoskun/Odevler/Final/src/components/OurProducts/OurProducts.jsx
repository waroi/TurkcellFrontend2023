import Button from "../Button/Button";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const products = useSelector((state) => state.product.products);
  const navigate = useNavigate();

  return (
    <div className=" ourProducts container d-none d-lg-block py-5">
      <div className="row">
        <div className="col-lg-9">
          <p>Hard to choose right products for yourself?</p>
          <h4 className="text-primary fw-bold">Our Products</h4>
        </div>
        <div className="d-none d-lg-block col-lg-3">
          <Button
            text={[
              "View more",
              <img
                src="icons/Chevron_Right_MD.png"
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
      <div className="row mt-5 g-5">
        {products.slice(9, 17).map((product) => (
          <div className="col-xl-3 col-md-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
