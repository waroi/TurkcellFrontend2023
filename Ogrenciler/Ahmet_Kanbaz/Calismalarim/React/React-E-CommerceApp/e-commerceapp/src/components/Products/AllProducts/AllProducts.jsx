import SingleProduct from "../SingleProduct/SingleProduct";
import { getAllProducts4API } from "../../../services/api";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from '../../../common/Loading/Loading'
import Error from '../../../common/Error/Error'

const AllProducts = () => {
  const reduxValues = useSelector((state) => state.products);

  useEffect(() => {
    reduxValues.products == '' && getAllProducts4API();
  }, []);

  if (reduxValues.loading == true) {
    return <Loading />
  }

  if (reduxValues.error != null) {
    return <Error reduxValues = {reduxValues}/>
  }
  return (
    <div className="container py-5">
      <div className="row" id="allProducts">
        {
          reduxValues.products.data?.slice(0,20).map((product) => (
            <SingleProduct key={product.id} product = {product}/>
          ))
        }
      </div>
    </div>
  );
};

export default AllProducts;
