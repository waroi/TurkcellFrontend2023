import { useEffect, useState } from "react";
import { MainTitleWrap, SubTitlesWrap, EditButton } from "./ProductDetailStyle";
import Button from "../Button/Button";
import { Request } from "../../requests/request";
import { useRef } from "react";

const ProductDetailInfoSection = ({ data }) => {
  const [singleData, setSingleData] = useState([data]);

  const request = new Request();
  const titleRef = useRef(null);
  const priceRef = useRef(null);
  const descriptionRef = useRef(null);
  const imgRef = useRef(null);
  const categoryRef = useRef(null);
  const countRef = useRef(null);

  useEffect(() => {
    setSingleData(data);
  }, [data]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      description: descriptionRef.current.value,
      image: imgRef.current.value,
      rating: {
        rate: data?.rating?.rate,
        count: Number(countRef.current.value),
      },
      category: categoryRef.current.value,
    };
    await request.editDataAsAdmin(formData, data?.id).then((res) => {
      setSingleData(res);
    });
  };

  return (
    <div className="mx-4">
      <div>{singleData?.title} </div>
      <MainTitleWrap>
        <div>SKU #1000078</div>
        <div className="mainTitle">{singleData?.title}</div>
        <div className="mainPrice">{singleData?.price} TL </div>
      </MainTitleWrap>
      <div className="d-flex gap-3 mt-3   ">
        <Button
          height={"2.75rem"}
          color={"#fdfdfd"}
          background={"#003459"}
          title={"Contact Us"}
        />
        <Button
          color={"#002A48"}
          border={"2px solid #002A48"}
          background={"transparent"}
          title={"Chat With Monito"}
          height={"2.75rem"}
        />
        {JSON.parse(localStorage.getItem("isAuth")).role === "admin" && (
          <EditButton
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Edit Data{" "}
            <i className="fa-solid fa-circle-exclamation fa-lg ms-2"></i>
          </EditButton>
        )}
        <div
          className="modal fade"
          id="editModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header ">
                <h1 className="modal-title fs-5 " id="exampleModalLabel">
                  EDIT ITEM
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => handleFormSubmit(e)}>
                  <div className="mb-3">
                    <label htmlFor="titleEdit" className="form-label">
                      Title
                    </label>
                    <input
                      ref={titleRef}
                      type="text"
                      className="form-control"
                      id="titleEdit"
                      aria-describedby="emailHelp"
                      defaultValue={singleData?.title}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="categoryEdit" className="form-label">
                      Category
                    </label>
                    <input
                      ref={categoryRef}
                      type="text"
                      className="form-control"
                      id="categoryEdit"
                      defaultValue={singleData?.category}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="priceEdit" className="form-label">
                      Price
                    </label>
                    <input
                      ref={priceRef}
                      type="number"
                      className="form-control"
                      id="priceEdit"
                      defaultValue={singleData?.price}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="countEdit" className="form-label">
                      Stock
                    </label>
                    <input
                      ref={countRef}
                      type="number"
                      className="form-control"
                      id="countEdit"
                      defaultValue={singleData?.rating?.count}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="descriptionEdit" className="form-label">
                      Description
                    </label>
                    <textarea
                      ref={descriptionRef}
                      type="text"
                      className="form-control"
                      id="descriptionEdit"
                      defaultValue={singleData?.description}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="imageEdit" className="form-label">
                      Image
                    </label>
                    <input
                      ref={imgRef}
                      type="text"
                      className="form-control"
                      id="imageEdit"
                      defaultValue={singleData?.image}
                    />
                  </div>
                  <div className=" d-flex justify-content-center">
                    <button
                      data-bs-dismiss="modal"
                      type="submit"
                      className="text-center btn btn-danger"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SubTitlesWrap className="mt-4">
        <div className="row">
          <div className="col-4">Category</div>
          <div className="col-8">
            :{" "}
            {singleData?.category?.charAt(0).toUpperCase() +
              singleData?.category?.substring(1)}
          </div>

          <hr className="mt-2" />
        </div>
        <div className="row">
          <div className="col-4">Price</div>
          <div className="col-8">: {singleData?.price} ₺</div>
          <hr className="mt-2" />
        </div>
        <div className="row">
          <div className="col-4">Rate</div>
          <div className="col-8">: {singleData?.rating?.rate}</div>

          <hr className="mt-2" />
        </div>
        <div className="row">
          <div className="col-4">Count</div>
          <div className="col-8">: {singleData?.rating?.count} pieces</div>

          <hr className="mt-2" />
        </div>
        <div className="row">
          <div className="col-4">Description</div>
          <div className="col-8">
            :{" "}
            {singleData?.description?.charAt(0).toUpperCase() +
              singleData?.description?.substring(1)}
          </div>

          <hr className="mt-2" />
        </div>
      </SubTitlesWrap>
    </div>
  );
};

export default ProductDetailInfoSection;
