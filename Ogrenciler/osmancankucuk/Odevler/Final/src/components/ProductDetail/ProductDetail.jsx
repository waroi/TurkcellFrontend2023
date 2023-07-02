import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Request } from "../../requests/request";
import caretLeft from "../../img/Caret_Left.png";
import caretRight from "../../img/Caret_Right.png";
import { CaretWrap, DetailCommercial } from "./ProductDetailStyle.js";
import ProductDetailInfoSection from "./ProductDetailInfoSection";
import shareAndroid from "../../img/Share_Android.png";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProductOtherProducts from "./ProductOtherProducts";
const ProductDetail = () => {
  const request = new Request();
  const params = useParams();

  const [dataDetail, setDataDetail] = useState();
  useEffect(() => {
    request.getDataInfo(params.id).then((res) => {
      setDataDetail(res);
    });
  }, []);

  useEffect(() => {}, [dataDetail]);

  const breadcrumbLinks = [
    { text: "Home", url: "/" },
    { text: "All Products", url: "/products" },
    {
      text: `${dataDetail?.category.replace(/^\w/, (c) => c.toUpperCase())}`,
      url: "/products",
    },
    { text: `${dataDetail?.title?.split(" ")[0]}`, url: "" },
  ];

  return (
    <div className="container">
      <Breadcrumb links={breadcrumbLinks} />
      <div className=" border rounded p-3">
        <div className="row">
          <div className="col-12 col-md-6 mb-3 ">
            <div id="carouselExample" className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    style={{
                      width: "35rem",
                      height: "29.75rem",
                      borderRadius: "0.625rem",
                    }}
                    src="https://ychef.files.bbci.co.uk/1280x720/p0dqcyrk.jpg"
                    className="d-block w-100 img-fluid"
                    alt="..."
                  />
                </div>
                <div
                  style={{ borderRadius: "0.625rem" }}
                  className="carousel-item"
                >
                  <img
                    style={{
                      width: "35rem",
                      height: "29.75rem",
                    }}
                    src="https://cdn.hswstatic.com/gif/10-breathtaking-views-1-orig.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://oceanview4luz.files.wordpress.com/2013/01/sunset-for-front-room-i.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <CaretWrap>
                  <img src={caretLeft} alt="" />
                </CaretWrap>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <CaretWrap>
                  <img src={caretRight} alt="" />
                </CaretWrap>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(134deg, #FCEED5 6.17%, #FCEED5 75.14%, #FFE7BA 100%)",
                borderRadius: "0.625rem",
              }}
              className="mt-3 p-3 row"
            >
              <DetailCommercial className="col-12 col-md-6 d-flex align-items-center gap-2 text-center ">
                <div>icon</div>
                <div>100% health guarantee for pets</div>
              </DetailCommercial>
              <DetailCommercial className="col-12 col-md-6 d-flex align-items-center gap-2 text-center ">
                <div>icon</div>
                <div className="">100% guarantee of pet identification</div>
              </DetailCommercial>
            </div>
            <div className="d-flex mt-3">
              <div className="d-flex gap-2 ">
                <img src={shareAndroid} alt="" />
                <div className="fw-bold" style={{ color: "#002A48" }}>
                  Share:
                </div>
              </div>
              <div className="ms-4  d-flex align-items-center gap-3 ">
                <i
                  className="fa-brands fa-facebook fa-lg"
                  style={{ color: "#99A2A5" }}
                ></i>
                <i
                  className="fa-brands fa-twitter fa-lg"
                  style={{ color: "#99A2A5" }}
                ></i>
                <i
                  className="fa-brands fa-instagram fa-lg"
                  style={{ color: "#99A2A5" }}
                ></i>
                <i
                  className="fa-brands fa-youtube fa-lg"
                  style={{ color: "#99A2A5" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <ProductDetailInfoSection data={dataDetail} />
          </div>
        </div>
      </div>
      <ProductOtherProducts id={params.id} />
    </div>
  );
};

export default ProductDetail;
