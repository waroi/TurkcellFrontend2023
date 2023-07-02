import ButtonComponent from "../Button/ButtonComponent";
import PropTypes from "prop-types";


export function BannerContent2({color}) {
  
  return (
    <div className={color ? "ms-auto banner-content " + color: "ms-auto banner-content"}>
      <h2>Welcome to Gizem Commerce</h2>
      <h3>Thousands of Product</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptatum, voluptate, quibusdam, quia voluptas voluptatem
      </p>
      <div className="row-buttons">
        <ButtonComponent title="More" link="products" outline={true} />
        <ButtonComponent title="Shop" link="products" />
      </div>
    </div>
  );
  
}

BannerContent2.propTypes = {
  color: PropTypes.string,
};

export default BannerContent2;

