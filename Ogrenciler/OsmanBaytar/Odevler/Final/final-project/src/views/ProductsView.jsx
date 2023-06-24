import TotalProducts from "../components/category/TotalProducts";
import ProductFilter from "../components/category/ProductFilter";
import ProductThreeItems from "../components/category/ProductThreeItems";

const ProductsView = () => {
  return (
    <div className="container mt-5">
      <ProductThreeItems />
      <div className="row">
        <div className="col-lg-3">
          <ProductFilter />
        </div>
        <div className="col-lg-9">
          <TotalProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
