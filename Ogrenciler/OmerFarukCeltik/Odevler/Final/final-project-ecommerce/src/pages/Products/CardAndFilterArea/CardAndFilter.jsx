import React, { useEffect, useRef, useState } from "react";
import ProductPageCard from "../../../components/ProductPageCard/ProductPageCard";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/helpers";
import { getProducts } from "../../../redux/slices/productSlice";
const CardAndFilter = () => {
  const data = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const sortRef = useRef();
  useEffect(() => {
    async function handleUpdatedData(){
      const productsData = await getData();
    await dispatch(getProducts(productsData));
    }
    handleUpdatedData();
  },[])
  useEffect(() => {
    setProducts(data.products);
  }, [data]);
  const handleChange = (e) => {
    if (e.checked == true) {
      let findedProducts = products?.filter((item) => item.category == e.value);
      setFiltered([...filtered, ...findedProducts]);
    }
    if (e.checked == false && filtered.length > 0) {
      let handledProducts = filtered?.filter((item) => item.category != e.value);
      setFiltered(handledProducts);
    }
  };
  const handleSelect = () => {
    let productsArray = filtered?.length > 0 ? Array.from(filtered) : Array.from(products);

    sortRef.current.value == "cheaper" && productsArray.sort((a, b) => a.price - b.price);
    sortRef.current.value == "expensive" && productsArray.sort((a, b) => b.price - a.price);
    sortRef.current.value == "categorya-z" && productsArray.sort((a, b) => a.category > b.category ? 1 : -1);
    sortRef.current.value == "categoryz-a" && productsArray.sort((a, b) => b.category > a.category ? 1 : -1);
    sortRef.current.value == "titlea-z" && productsArray.sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1);
    sortRef.current.value == "titlez-a" && productsArray.sort((a, b) => b.title.toLowerCase() > a.title.toLowerCase() ? 1 : -1);

    filtered.length > 0 ? setFiltered(productsArray) : setProducts(productsArray);
    
    
  }
useEffect(() => {
  if(data.search != null || undefined || ""){
    let searchedProducts = products.filter((item) => item.title.toLowerCase().includes(data.search.search))
    searchedProducts.length > 0 && setFiltered(searchedProducts)
  }
},[data])
  


  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-3 pt-4">
          <h4 className="text-primary fw-bold fs-4">Filter</h4>
          <h4 className="fw-bold fs-6 pt-3">Category</h4>
          <div>
            <div className="form-check">
              <input
                onChange={(e) => handleChange(e.target)}
                className="form-check-input"
                type="checkbox"
                value="men's clothing"
                id="menClothing"
              />
              <label
                className="form-check-label text-black"
                htmlFor="menClothing"
              >
                Men's Clothing
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleChange(e.target)}
                className="form-check-input"
                type="checkbox"
                value="women's clothing"
                id="womenClothing"
              />
              <label className="form-check-label" htmlFor="womenClothing">
                Women's Clothing
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleChange(e.target)}
                className="form-check-input"
                type="checkbox"
                value="electronics"
                id="electronics"
              />
              <label className="form-check-label" htmlFor="electronics">
                Electronics
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={(e) => handleChange(e.target)}
                className="form-check-input"
                type="checkbox"
                value="jewelery"
                id="jewelery"
              />
              <label className="form-check-label" htmlFor="jewelery">
                Jewelery
              </label>
            </div>
            <div onClick={() => {
              setFiltered(products);
              setProducts(products);
            }} className="btn btn-secondary mt-3 rounded-pill ms-0">Clear Search</div>
          </div>
        </div>

        <div className="col-12 col-lg-9">
          <div className="row ">
            <div className="col-12 row align-items-baseline justify-content-between flex-lg-row">
              <div className="col-12 col-lg-6 text-start pt-4 order-2 order-lg-1">
                <div className="d-flex align-items-baseline">
                  <p className="text-primary fw-bold fs-4 ">Products</p>
                  <p className="fs-6 ms-3">
                    {filtered?.length > 0 ? filtered?.length : products?.length}
                    <span className="ps-1">products</span>
                  </p>
                </div>
              </div>
              <div className="col-12 mt-3 mt-lg-0 col-lg-6 order-1 order-lg-2 ">
                <div className="row">
                  <div className="col-4 col-lg-6 mx-0 ms-lg-auto">
                    <select defaultValue="null" ref={sortRef} onChange={() => handleSelect()} className="form-select rounded-pill" aria-label="select">
                      <option >Sort By:</option>
                      <option value="titlea-z">Title (a-z)</option>
                      <option value="titlez-a">Title (z-a)</option>
                      <option value="categorya-z">Category (a-z)</option>
                      <option value="categoryz-a">Category (z-a)</option>
                      <option value="expensive">Price Hight to Low</option>
                      <option value="cheaper">Price Low to High</option>
                    </select>
                  </div>
                  <div className="col-4 col-lg-6 d-block d-lg-none">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon bg-primary "></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row g-4 pb-80">
              {filtered?.length > 0
                ? filtered?.map((item) => (
                  <ProductPageCard item={item} key={item.id} />
                ))
                : products.length >0 && products?.map((item) => (
                  <ProductPageCard item={item} key={item.id} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardAndFilter;
