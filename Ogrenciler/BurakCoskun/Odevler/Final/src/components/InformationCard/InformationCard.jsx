import PropTypes from "prop-types";

export const InformationCard = ({ product }) => {
  return (
    <div className="d-flex flex-column informationCard">
      <div className="row py-2">
        <p className="m-0 col-6 ">Category</p>
        <p className="m-0 col-6">: {product.category}</p>
      </div>
      <div className="row mt-1 py-2">
        <p className="m-0 col-6 ">Rating</p>
        <p className="m-0 col-6  text-start">: {product.rating.rate}/5</p>
      </div>
      <div className="row mt-1 py-2">
        <p className="m-0 col-6">Stock</p>
        <p className="m-0 col-6">: {product.rating.count}</p>
      </div>
      <div className="row mt-1 py-2 ">
        <p className="m-0 col-6">Description</p>
        <p className="m-0 col-6">: {product.description.split(".")[0]}.</p>
      </div>
    </div>
  );
};

export default InformationCard;

InformationCard.propTypes = {
  product: PropTypes.object.isRequired,
};
