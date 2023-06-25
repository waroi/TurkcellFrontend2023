import Proptypes from "prop-types";
import {
  DetailCardContainer,
  Quantity,
  DetailTitle,
  DetailPrice,
  DetailImageContainer,
  ProductInfo,
  ProductInfoContainer,
  SocialInfoContainer,
  DetailButtonContact,
  DetailButtonChat,
  TableTd,
} from "./CardStyle.js";

function DetailCard({ data }) {
  return (
    <DetailCardContainer className="row align-items-center">
      <div className="col-lg-6">
        <DetailImageContainer>
          <img src={data.image} alt="Detail Image" className="img-fluid" />
        </DetailImageContainer>
        <ProductInfoContainer className="d-flex justify-content-between my-3 ms-sm-0 ms-lg-4">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-gender-ambiguous"></i>
            <ProductInfo className="mb-0">
              100% health guarantee for pet
            </ProductInfo>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-person-hearts "></i>
            <ProductInfo className="mb-0">
              100% guarantee of pet identification
            </ProductInfo>
          </div>
        </ProductInfoContainer>
        <SocialInfoContainer className="d-flex gap-3 ms-sm-0 ms-lg-4 ">
          <div className="d-flex gap-2 align-items-center">
            <i className="bi bi-share-fill"></i>
            <ProductInfo className="mb-0">Share:</ProductInfo>
          </div>
          <div className="d-flex gap-2">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </SocialInfoContainer>
      </div>
      <div className="col-lg-6">
        <div className="detail-info">
          <Quantity className="text-muted">
            Quantity {data?.rating?.count}
          </Quantity>
          <DetailTitle>{data.title}</DetailTitle>
          <DetailPrice>{data.price}</DetailPrice>
          <div className="d-flex gap-2 align-items-center">
            <DetailButtonContact>Contact us</DetailButtonContact>
            <DetailButtonChat>
              <i className="bi bi-chat-left-dots me-3 mt-1"></i>
              Chat with Monito
            </DetailButtonChat>
          </div>
          <table className="mt-3">
            <tbody>
              <tr>
                <TableTd className="pb-1">Quantity:</TableTd>
                <TableTd className="pb-1 ps-3">{data?.rating?.count}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Name:</TableTd>
                <TableTd className="pb-1 ps-3">{data.title}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Price:</TableTd>
                <TableTd className="pb-1 ps-3">{data.price}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Category:</TableTd>
                <TableTd className="pb-1 ps-3">{data.category}</TableTd>
              </tr>
              <tr>
                <TableTd className="pb-1">Description:</TableTd>
                <TableTd className="pb-1 ps-3">{data.description}</TableTd>
              </tr>
              <tr>
                <TableTd>Rating:</TableTd>
                <TableTd className="ps-3">
                  <ul className="d-inline-flex gap-2 p-0 m-0">
                    {data.rating &&
                      Array.from({ length: data.rating.rate }).map(
                        (_, index) => (
                          <li key={`star-${index}`}>
                            <i className="bi bi-star-fill text-warning"></i>
                          </li>
                        )
                      )}
                    {data.rating &&
                      Array.from({ length: 6 - data.rating.rate }).map(
                        (_, index) => (
                          <li key={`empty-star-${index}`}>
                            <i className="bi bi-star"></i>
                          </li>
                        )
                      )}
                  </ul>
                </TableTd>
              </tr>
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <a href="#" className="btn btn-danger mt-3">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </DetailCardContainer>
  );
}

DetailCard.propTypes = {
  data: Proptypes.object.isRequired,
};

export default DetailCard;
