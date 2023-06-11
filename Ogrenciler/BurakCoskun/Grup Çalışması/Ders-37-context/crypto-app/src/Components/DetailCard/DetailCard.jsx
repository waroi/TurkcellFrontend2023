import DetailChart from "./DetailChart/DetailChart";
import DetailInfo from "./DetailInfo/DetailInfo";
import DetailPrice from "./DetailPrice/DetailPrice";
import PropTypes from "prop-types";

const DetailCard = ({ coin }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <DetailPrice coin={coin} />
        </div>
        <div className="col-12 col-md-4">
          <DetailInfo coin={coin} />
        </div>
        <div className="col-12 col-md-8">
          <DetailChart coin={coin} />
        </div>
      </div>
    </div>
  );
};

DetailCard.propTypes = {
  coin: PropTypes.object.isRequired,
};

export default DetailCard;
