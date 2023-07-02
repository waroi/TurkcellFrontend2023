import HeaderComponent from "../../components/Header/HeaderComponent";
import banner3 from "../../assets/banner-3.svg";
import { Footer } from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts, fetchProductsByPriceRangeAndCategoryAction } from "../../redux/actions/productActions";
import "./Products.scss";
import { BannerContent2 } from "../../components/BannerContent/BannerContent2";
import { ProductCard } from "../../components/Product/Product";

const Products = () => {
  const fetchProduct = useSelector((state) => state.fetchProducts);
  const { products } = fetchProduct;
  const dispatch = useDispatch();
  const [price, setPrice] = useState([0, 1000000]);
  const [filter, setFilter] = useState({
    category: "all",
    min: "",
    max: "",
  });


  const handleChecked = (category) => {
    setFilter({ ...filter, category: category });
  };

  const handlePrice = (e, type) => {
    if (type === "Min") {
      setPrice([e.target.value, price[1]]);
    } else {
      setPrice([price[0], e.target.value]);
    }
  };

  useEffect(() => {
    dispatch(fetchProductsByPriceRangeAndCategoryAction(price[0], price[1], filter.category));
  }, [dispatch, price, filter.category]);



  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <HeaderComponent />
      <div
        className="container mt-5 banner-3"
        style={{ backgroundImage: `url(${banner3})` }}
      >
        <BannerContent2 />
      </div>
      <div className="container mt-5 mb-5">
        <div className="row ">
          <div className="col-3 filter">
            <h4>Filter</h4>
            <div className="mt-5">
              <h5>Categories</h5>
              <div className="mt-2 categories">
                <input type="checkbox" id="all" name="all" onChange={() => handleChecked("All")} />
                <label htmlFor="all"> All</label>
                <br />
                <input type="checkbox" id="Tech" name="Tech" onChange={() => handleChecked("Elektronik")} />
                <label htmlFor="Tech"> Tech</label>
                <br />
              </div>
              <h5>Price</h5>
                <div className="mt-2 price">
                    <input type="number" name="min" id="min" placeholder="Min" onChange={(e) => handlePrice(e,"Min")}/>
                    <input type="number" name="max" id="max" placeholder="Max" onChange={(e) => handlePrice(e,"Max")}/>
                    </div>
            </div>
          </div>
          <div className="col-9 products-title">
            <h4>Products</h4>
            <div className="container mt-5 ms-10 d-grid products">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
