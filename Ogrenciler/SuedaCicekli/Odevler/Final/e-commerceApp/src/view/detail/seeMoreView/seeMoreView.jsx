import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FirstCard from "../../../components/firstCard/firstCard"
import request from "../../../utils/request";
import { setProductsList } from "../../../redux/features/productSlice";
import "./seeMoreStyle.scss"

const seeMoreView = () => {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const fourProducts = products.slice(0, 4);

  useEffect(() => {
    request
      .getRequest("http://localhost:3000/products")
      .then((res) => {
        dispatch(setProductsList(res));
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [dispatch]);

  return (
    <div className="mb-5">
      <div className="container">
        <div className="mt-5">
          <h5 className="what-clothes">Whats clothes</h5>
          <h2 className="see-more text-dark">See more</h2>
        </div>
        <div className="row">
          <FirstCard products={fourProducts} col={3} />
        </div>
      </div>
    </div>
  )
}

export default seeMoreView
