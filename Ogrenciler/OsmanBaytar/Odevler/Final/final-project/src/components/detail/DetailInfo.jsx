import {
  DetailInfoBox,
  DetailInfoTitle,
  DetailInfoPrice,
  DetailInfoSubBox,
  DetailInfoSubDiv,
  DetailInfoSubTitle,
} from "../../styles/DetailInfoStyle";
import {
  StaticOrderComponentButtonDark,
  StaticOrderComponentButtonLight,
} from "../../styles/StaticOrderComponent";

const DetailInfo = (props) => {
  return (
    <DetailInfoBox className="p-5">
      <DetailInfoTitle>{props.data.title}</DetailInfoTitle>
      <DetailInfoPrice>${props.data.price}</DetailInfoPrice>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <StaticOrderComponentButtonDark>
          ADD TO CART
        </StaticOrderComponentButtonDark>
        <StaticOrderComponentButtonLight>
          BUY NOW
        </StaticOrderComponentButtonLight>
      </div>

      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Category</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.category}</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Rating</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.rate}/5</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox className="row">
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>Stock</DetailInfoSubTitle>
        </DetailInfoSubDiv>
        <DetailInfoSubDiv className="col-6">
          <DetailInfoSubTitle>{props.data.count}</DetailInfoSubTitle>
        </DetailInfoSubDiv>
      </DetailInfoSubBox>
      <DetailInfoSubBox>
        <DetailInfoSubTitle>{props.data.description}</DetailInfoSubTitle>
      </DetailInfoSubBox>
    </DetailInfoBox>
  );
};

export default DetailInfo;
