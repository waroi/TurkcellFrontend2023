import {
  ProductTitle,
  ProductSubTitle,
  SortButton,
  ProductListPagination,
} from "./ProductsStyle";
import { Request } from "../../requests/request";
import { useState, useEffect } from "react";
import {
  WhatsNewCard,
  CardImage,
  CardContent,
  CardTitle,
  CardCap,
  CardInfo,
  CardPrice,
} from "../Home/HomeStyle";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
import caretDown from "../../img/Caret_Down.png";
import { sortData } from "../../redux/slices/dataSlices";
import { Link } from "react-router-dom";
import arrowLeft from "../../img/Arrow-Left.png";
import arrowRight from "../../img/Arrow-Right.png";

const ProductLists = () => {
  const request = new Request();
  const sortedData = useSelector((state) => state.data.data);
  const searchTerm = useSelector((state) => state.data.searchData);
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortShape, setSortShape] = useState("A-Z");
  const [sortCategory, setSortCategory] = useState("title");

  const handleSort = (e) => {
    const sortObj = {
      shape: sortShape,
      category: sortCategory,
    };
    dispatch(sortData({ data: filteredProducts, sortObj }));

    e.preventDefault();
  };

  const addCart = (product) => {
    dispatch(addToCart(product));
  };
  const [data, setData] = useState(null);

  const uniqueCategory = [...new Set(data?.map((item) => item.category))];
  const cart = JSON.parse(localStorage.getItem("cartItems"));
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    if (event.target.checked) {
      setSelectedCategories((prevSelected) => [...prevSelected, category]);
    } else {
      setSelectedCategories((prevSelected) =>
        prevSelected.filter((prevCategory) => prevCategory !== category)
      );
    }
  };

  let filteredProducts =
    sortedData.length > 0
      ? sortedData?.filter((product) => {
          if (!selectedCategories.length) {
            return product.title.toLowerCase().includes(searchTerm);
          } else {
            console.log(selectedCategories.includes(product.category));
            return (
              product.title.toLowerCase().includes(searchTerm) &&
              selectedCategories.includes(product.category)
            );
          }
        })
      : data?.filter((product) => {
          if (!selectedCategories.length) {
            return product.title.toLowerCase().includes(searchTerm);
          } else {
            return (
              selectedCategories.includes(product.category) &&
              product.title.toLowerCase().includes(searchTerm)
            );
          }
        });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await request.getData();
        setData(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [sortedData, searchTerm]);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <ProductTitle>Filter</ProductTitle>

          <div className="my-4">
            <ProductSubTitle>Category</ProductSubTitle>
            {uniqueCategory?.map((item) => (
              <div key={item} className="form-check mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item}
                  id="flexCheckDefault"
                  onChange={handleCategoryChange}
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between mb-4">
            <div className="d-flex align-items-center">
              <ProductTitle>Products</ProductTitle>
              <div className="ms-2">
                {filteredProducts?.length}
                <span className="ms-1">
                  {filteredProducts?.length === 1 ? (
                    <span>product</span>
                  ) : (
                    <span>products</span>
                  )}
                </span>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <SortButton data-bs-toggle="dropdown">
                  Sort by:{sortCategory} <img src={caretDown} alt="" />
                </SortButton>
                <ul className="dropdown-menu px-2">
                  <form onSubmit={handleSort}>
                    <label className="fw-bold" htmlFor="sortShape">
                      Select Sort Shape
                    </label>
                    <select
                      className="form-control my-2"
                      id="sortShape"
                      name="sortShape"
                      value={sortShape}
                      onChange={(e) => setSortShape(e.target.value)}
                    >
                      <option value="A-Z">Start To End</option>
                      <option value="Z-A">End To Start</option>
                    </select>
                    <label className="fw-bold" htmlFor="sortCategory">
                      Select Category
                    </label>
                    <select
                      className="form-control my-2"
                      id="sortCategory"
                      name="sortCategory"
                      value={sortCategory}
                      onChange={(e) => setSortCategory(e.target.value)}
                    >
                      <option value="title">Sort With Title</option>
                      <option value="price">Sort With Price</option>
                      <option value="category">Sort With Category</option>
                    </select>
                    <button
                      className="w-100 btn btn-secondary my-4"
                      type="submit"
                    >
                      Sort
                    </button>
                  </form>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            {filteredProducts?.map((product) => (
              <div className="col-6 col-md-3 col-lg-4 mb-2" key={product.id}>
                <WhatsNewCard>
                  <Link
                    style={{ border: "1px solid #dce2e7" }}
                    to={`/${product?.id}`}
                    className=" w-100 text-center p-3 rounded-3 "
                  >
                    <div>
                      <CardImage
                        className="img-fluid"
                        src={product.image}
                        alt=""
                      />
                    </div>
                  </Link>
                  <CardContent className="d-flex flex-column">
                    <CardTitle>
                      {product?.title.charAt(0).toUpperCase() +
                        product?.title.substring(1)}{" "}
                      -{" "}
                      {product?.category.charAt(0).toUpperCase() +
                        product?.category.substring(1)}
                    </CardTitle>
                    <div className="d-flex gap-2 align-items-center">
                      <CardCap>
                        Rating: <CardInfo>{product?.rating?.rate}</CardInfo>
                      </CardCap>
                      <span style={{ color: "#667479" }}>•</span>

                      <CardCap>
                        Count: <CardInfo>{product?.rating?.count} </CardInfo>
                      </CardCap>
                    </div>

                    <CardPrice>Price: {product.price} ₺</CardPrice>

                    <div className="d-flex gap-1 my-2 align-items-center">
                      <CardPrice className="me-1">Rating: </CardPrice>
                      {Array(Math.round(product?.rating?.rate))
                        .fill()
                        .map((_, index) => (
                          <i
                            style={{ color: "#FFD700" }}
                            key={index}
                            className="fa-solid fa-star "
                          ></i>
                        ))}
                      {Array.from({
                        length: 5 - Math.round(product?.rating?.rate),
                      }).map((_, index) => (
                        <i key={index} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    {JSON.parse(localStorage.getItem("isAuth")).isOnline ===
                      true && (
                      <div className="row w-100 d-flex align-items-end">
                        <div className="col-6 ">
                          {cart?.find((item) => item?.id === product?.id)
                            ?.quantity === product?.rating?.count ? (
                            <div>No More Stok</div>
                          ) : (
                            <button
                              onClick={() => addCart(product)}
                              className="btn btn-success"
                            >
                              Add To{" "}
                              <i className="fa-solid fa-cart-shopping"></i>
                            </button>
                          )}
                        </div>

                        <div className="col-6 d-flex flex-column align-items-end justify-content-end">
                          {cart?.find((item) => item.id === product.id) ? (
                            <div className="badge text-bg-warning  ">
                              Pieces:
                              {` ${
                                cart?.find((item) => item.id === product.id)
                                  .quantity
                              }`}
                            </div>
                          ) : (
                            <div
                              style={{ fontSize: "12px" }}
                              className="d-flex align-items-center mt-1"
                            >
                              You havent added this item to your cart yet.
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </WhatsNewCard>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <nav aria-label="Page navigation example">
              <ProductListPagination className="pagination gap-4 align-items-center">
                <li className="page-item">
                  <a href="">
                    {" "}
                    <img src={arrowLeft} alt="" />
                  </a>
                </li>
                <li className="page-item">
                  <a href="" className="numberStyle">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a href="" className="numberStyle">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a href="" className="numberStyle">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="numberStyle" href="#">
                    ...
                  </a>
                </li>
                <li className="page-item">
                  <a href="">
                    <img src={arrowRight} alt="" />
                  </a>
                </li>
              </ProductListPagination>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLists;
