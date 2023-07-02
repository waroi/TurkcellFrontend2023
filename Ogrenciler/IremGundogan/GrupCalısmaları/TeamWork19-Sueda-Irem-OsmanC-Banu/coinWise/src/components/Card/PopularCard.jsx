import { PropTypes } from "prop-types";
import Bitcoin from "../../assets/coinsLogo/Bitcoin.png";
import Ethereum from "../../assets/coinsLogo/Ethereum.png";
import Tether from "../../assets/coinsLogo/Tether.png";
import { CoinImage } from "./PopularCardStyle";
import lightTwitter from "../../assets/SocialIcons/lightTwitter.png";
import lightWebsite from "../../assets/SocialIcons/lightWebsite.png";
import { Card } from "./PopularCardStyle";
const PopularCard = ({ data }) => {
  const getImageName = (id) => {
    switch (id) {
      case "bitcoin":
        return Bitcoin;
      case "ethereum":
        return Ethereum;
      case "tether":
        return Tether;
      default:
        return "";
    }
  };
  return (
    <Card className="col-md-3 position-relative text-light">
      <div>{<CoinImage src={getImageName(data.id)} alt={data.name} />}</div>
      <div className="d-flex flex-column  align-items-center ">
        <div className="flex-start ps-3 py-3">
          <h6 className="mb-3 my-3">
            {data.name} <span>{data.symbol}</span>
          </h6>
          <span
            style={{ color: data.priceChange1hColor }}
            className="mb-3 d-block"
          >
            {" "}
            {data.priceChange1h}%
          </span>
          <h3 className="mb-3">
            $ {data.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h3>
          <div className=" d-flex gap-2">
            <a href="">
              <img src={lightTwitter} alt="twitter" />
            </a>
            <a href="">
              <img src={lightWebsite} alt="website" />
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};
PopularCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PopularCard;
