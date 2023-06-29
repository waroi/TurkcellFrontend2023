import TotalProducts from "../components/category/TotalProducts";
import ProductFilter from "../components/category/ProductFilter";
import ProductThreeItems from "../components/category/ProductThreeItems";
import StaticOrderComponentCategory from "../components/category/StaticOrderComponentCategory";
import { useState } from "react";

const ProductsView = () => {
  const [mensClothing, setMensClothing] = useState();
  const [jewelery, setJewelery] = useState();
  const [electronics, setElectronics] = useState();
  const [womensClothing, setWomensClothing] = useState();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999.99);
  const [minRate, setMinRate] = useState(0);
  const [maxRate, setMaxRate] = useState(5);
  const [sortValue, setSortValue] = useState("default");

  const isMensClothing = (data) => {
    setMensClothing(data);
  };
  const isJewelery = (data) => {
    setJewelery(data);
  };
  const isElectronics = (data) => {
    setElectronics(data);
  };
  const isWomensClothing = (data) => {
    setWomensClothing(data);
  };
  const isMinPrice = (data) => {
    setMinPrice(data);
  };
  const isMaxPrice = (data) => {
    setMaxPrice(data);
  };
  const isMinRate = (data) => {
    setMinRate(data);
  };
  const isMaxRate = (data) => {
    setMaxRate(data);
  };
  const isSortValue = (data) => {
    setSortValue(data);
  };

  return (
    <div className="container mt-5">
      <StaticOrderComponentCategory order={2} />
      <ProductThreeItems isSortValue={isSortValue} />
      <div className="row">
        <div className="col-lg-3">
          <ProductFilter
            isMensClothing={isMensClothing}
            isJewelery={isJewelery}
            isElectronics={isElectronics}
            isWomensClothing={isWomensClothing}
            isMinPrice={isMinPrice}
            isMaxPrice={isMaxPrice}
            isMinRate={isMinRate}
            isMaxRate={isMaxRate}
          />
        </div>
        <div className="col-lg-9">
          <TotalProducts
            mensClothing={mensClothing}
            jewelery={jewelery}
            electronics={electronics}
            womensClothing={womensClothing}
            minPrice={minPrice}
            maxPrice={maxPrice}
            minRate={minRate}
            maxRate={maxRate}
            sortValue={sortValue}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
