import { useEffect, useState, useRef } from "react";
import { productRequest } from "../utils/Request";
import Slider from "../components/detail/Slider";
import { useParams } from "react-router-dom";
import DetailInfo from "../components/detail/DetailInfo";
import BasicTitle from "../components/home/BasicTitle";
import FourBoxes from "../components/home/FourBoxes";
import JustButton from "../components/home/JustButton";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {
  DetailEditContainer,
  DetailEditTitle,
  DetailEditInput,
  DetailEditButton,
  DetailEditSelect,
  DetailEditOption,
  DetailEditTextArea,
  DetailInputLabel,
} from "../styles/DetailEditStyle";
import { basketRequest } from "../utils/Request";

const DetailView = () => {
  const [productsData, setProductsData] = useState([]);
  const [randomProducts, setRandomProducts] = useState([]);
  const [firstFourRandomProducts, setFirstFourRandomProducts] = useState([]);
  const [secondFourRandomProducts, setSecondFourRandomProducts] = useState([]);
  const [basketData, setBasketData] = useState([]);
  const [intersectedData, setIntersectedData] = useState([]);
  let productID = useParams().id;

  const currentUser = useSelector((state) => state.login.login);
  const [isAdmin, setIsAdmin] = useState(false);

  const editTitle = useRef();
  const editPrice = useRef();
  const editCategory = useRef();
  const editRating = useRef();
  const editStock = useRef();
  const editDescription = useRef();
  const editMainImage = useRef();
  const editSliderImage1 = useRef();
  const editSliderImage2 = useRef();
  const editSliderImage3 = useRef();
  const editSliderImage4 = useRef();

  const [editCount, setEditCount] = useState(0);
  const [intersectedCount, setIntersectedCount] = useState(0);

  useEffect(() => {
    basketRequest.get().then((data) => {
      setBasketData(data);
    });
  }, []);

  useEffect(() => {
    if (productID > 0 && productsData.length > 0) {
      setIntersectedCount(intersectedCount + 1);
      if (intersectedCount == 0) {
        basketData.map((data, index) => {
          if (data.title == productsData[productID - 1].title) {
            intersectedData.push(data);
          }
        });
      }
    }
  }, [basketData]);

  useEffect(() => {
    if (currentUser.is_admin == true) {
      setIsAdmin(true);
    }
  }, [currentUser]);

  useEffect(() => {
    productRequest.get().then((data) => {
      setProductsData(data);
    });
  }, []);

  useEffect(() => {
    productRequest.get().then((data) => {
      setRandomProducts(
        data
          .filter((item) => item.id != productID)
          .sort(() => Math.random() - 0.5)
      );
    });
  }, []);

  useEffect(() => {
    setFirstFourRandomProducts(productsData.slice(0, 4));
    setSecondFourRandomProducts(productsData.slice(4, 8));
  }, [randomProducts]);

  useEffect(() => {
    if (isAdmin && productID > 0 && productsData.length > 0) {
      editTitle.current.value = productsData[productID - 1].title;
      editPrice.current.value = productsData[productID - 1].price;
      editCategory.current.value = productsData[productID - 1].category;
      editRating.current.value = productsData[productID - 1].rate;
      editStock.current.value = productsData[productID - 1].count;
      editDescription.current.value = productsData[productID - 1].description;
      editMainImage.current.value = productsData[productID - 1].image;
      editSliderImage1.current.value =
        productsData[productID - 1].sliderImages[0];
      editSliderImage2.current.value =
        productsData[productID - 1].sliderImages[1];
      editSliderImage3.current.value =
        productsData[productID - 1].sliderImages[2];
      editSliderImage4.current.value =
        productsData[productID - 1].sliderImages[3];
      console.log("object");
    }
  }, [isAdmin, productsData]);

  function editProduct() {
    if (
      isAdmin &&
      productID > 0 &&
      productsData.length > 0 &&
      editTitle.current.value != "" &&
      editPrice.current.valueAsNumber > 0 &&
      editRating.current.valueAsNumber >= 0 &&
      editStock.current.valueAsNumber >= 0 &&
      editDescription.current.value != "" &&
      editMainImage.current.value != "" &&
      editSliderImage1.current.value != "" &&
      editSliderImage2.current.value != "" &&
      editSliderImage3.current.value != "" &&
      editSliderImage4.current.value != ""
    ) {
      productRequest.put(productID, {
        id: productID,
        title: editTitle.current.value,
        price: editPrice.current.valueAsNumber,
        description: editDescription.current.value,
        category: editCategory.current.value,
        image: editMainImage.current.value,
        rate: editRating.current.valueAsNumber,
        count: editStock.current.valueAsNumber,
        sliderImages: [
          editSliderImage1.current.value,
          editSliderImage2.current.value,
          editSliderImage3.current.value,
          editSliderImage4.current.value,
        ],
      });
      setEditCount(editCount + 1);
    } else {
      console.log("object2");
    }
  }

  useEffect(() => {
    if (editCount == 1) {
      console.log("object3");
      intersectedData.map((data, index) => {
        basketRequest.put(data.id, {
          id: data.id,
          username: data.username,
          title: editTitle.current.value,
          price: editPrice.current.valueAsNumber,
          description: editDescription.current.value,
          category: editCategory.current.value,
          image: editMainImage.current.value,
          rate: editRating.current.valueAsNumber,
          count: editStock.current.valueAsNumber,
          sliderImages: [
            editSliderImage1.current.value,
            editSliderImage2.current.value,
            editSliderImage3.current.value,
            editSliderImage4.current.value,
          ],
        });
      });
    }
  }, [editCount]);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-lg-6">
            {productsData.length > 0 && (
              <Slider data={productsData[productID - 1]} />
            )}
          </div>
          <div className="col-lg-6">
            {productsData.length > 0 && (
              <DetailInfo data={productsData[productID - 1]} />
            )}
          </div>
        </div>
      </div>
      {!isAdmin && (
        <>
          <BasicTitle />
          <FourBoxes data={firstFourRandomProducts} />
          <JustButton />
          <BasicTitle />
          <FourBoxes data={secondFourRandomProducts} />
          <JustButton />
        </>
      )}
      {isAdmin && (
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <DetailEditContainer>
                <DetailEditTitle>Edit Product</DetailEditTitle>
                <hr />
                <DetailInputLabel>Title</DetailInputLabel>
                <DetailEditInput
                  ref={editTitle}
                  type="string"
                  placeholder="Title"
                />
                <DetailInputLabel>Price</DetailInputLabel>
                <DetailEditInput
                  ref={editPrice}
                  type="number"
                  min={0}
                  placeholder="Price"
                />
                <DetailInputLabel>Category</DetailInputLabel>
                <DetailEditSelect ref={editCategory}>
                  <DetailEditOption>men's clothing</DetailEditOption>
                  <DetailEditOption>jewelery</DetailEditOption>
                  <DetailEditOption>electronics</DetailEditOption>
                  <DetailEditOption>women's clothing</DetailEditOption>
                </DetailEditSelect>
                <DetailInputLabel>Rating</DetailInputLabel>
                <DetailEditInput
                  ref={editRating}
                  type="number"
                  min={0}
                  max={5}
                  step={0.1}
                  placeholder="Rating"
                />
                <DetailInputLabel>Stock</DetailInputLabel>
                <DetailEditInput
                  ref={editStock}
                  type="number"
                  min={0}
                  placeholder="Stock"
                />
                <DetailInputLabel>Description</DetailInputLabel>
                <DetailEditTextArea
                  ref={editDescription}
                  placeholder="Description"
                />
                <DetailInputLabel>Main Image</DetailInputLabel>
                <DetailEditInput
                  ref={editMainImage}
                  type="url"
                  placeholder="Main Image"
                />
                <DetailInputLabel>Slider Image 1</DetailInputLabel>
                <DetailEditInput
                  ref={editSliderImage1}
                  type="url"
                  placeholder="Slider Image 1"
                />
                <DetailInputLabel>Slider Image 2</DetailInputLabel>
                <DetailEditInput
                  ref={editSliderImage2}
                  type="url"
                  placeholder="Slider Image 2"
                />
                <DetailInputLabel>Slider Image 3</DetailInputLabel>
                <DetailEditInput
                  ref={editSliderImage3}
                  type="url"
                  placeholder="Slider Image 3"
                />
                <DetailInputLabel>Slider Image 4</DetailInputLabel>
                <DetailEditInput
                  ref={editSliderImage4}
                  type="url"
                  placeholder="Slider Image 4"
                />
                <DetailEditButton onClick={editProduct}>Edit</DetailEditButton>
              </DetailEditContainer>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailView;
