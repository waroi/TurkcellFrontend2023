import { AllProductsBannerContainer } from "./AllProductsBannerStyle";
import allProductsBanner from "../../../assets/banner/allProductsBanner.svg";
import { Link } from "react-router-dom";
import BannerButtons from "./AllProductsBannerButtons/BannerButtons";
const AllProductsHeroBanner = () => {
  const title = "One more friend";
  const subTitle = "Thousands more fun!";
  const description =
    "Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!";
  return (
    <div className="container py-5">
      <nav
        className="pt-5"
        style={{
          "--bs-breadcrumb-divider": "'>'",
        }}
      >
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={"/"} className="text-decoration-none text-black">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active">Products</li>
        </ol>
      </nav>

      <AllProductsBannerContainer className="pb-0 pt-lg-0 position-relative">
        <div>
          <div className="layout position-absolute"></div>
          <div className="layout2 d-flex d-lg-none position-absolute"></div>
          <div className='row align-items-center flex-row-reverse text-lg-end infos'>
            <div className='col-12 col-lg-5 p-lg-5 p-4'>
              <h1 className="text-capitalize fw-bold">{title}</h1>
              <h3 className="fw-bold text-capitalize">{subTitle}</h3>
              <p>{description}</p>
              <BannerButtons />
            </div>
            <div className="col-12 col-lg-7 pt-lg-5">
              <img
                src={allProductsBanner}
                alt=""
                className="img-fluid heroImage"
              />
            </div>
          </div>
        </div>
      </AllProductsBannerContainer>
    </div>
  );
};

export default AllProductsHeroBanner;
