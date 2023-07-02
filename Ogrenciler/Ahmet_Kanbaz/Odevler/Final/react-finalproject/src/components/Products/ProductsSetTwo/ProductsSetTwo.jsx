import UpperSectionHeader from "../../../common/UpperSectionHeader/UpperSectionHeader";
import SingleProduct from "../SingleProduct/SingleProduct";
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import Toast from "../../../common/Toast/Toast";

const ProductsSetTwo = () => {
  const navigate = useNavigate()
  const allProducts = useSelector((state) => state.products.products)
  const loading = useSelector((state) => state.products.loading)
  const error = useSelector((state) => state.products.error)

  const loginUser = useSelector((state) => state.user.user)

  const handleToastAllProducts = () => {
    if (Object.keys(loginUser).length === 0) {
      navigate("/auth/login");
      Toast({
        message: "Tüm ürünleri görüntüleyebilmek için lütfen giriş yapınız.",
        type: "warning",
      });
    } else {
      navigate("/products");
    }
  };


  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>There is an error</div>
  }
  return (
    <div className="d-none d-lg-flex">
      <div className="container py-5">
        <UpperSectionHeader
          upperTitle="Hard to choose right products for your pets?"
          upperSubTitle="Our Products"
          upperButtonText="View more"
          onClick={handleToastAllProducts}
        />
        <div className="row g-3 py-3">
          {
            allProducts.slice(8, 16).map((singleProduct) => (
              <SingleProduct key={singleProduct.id} singleProduct={singleProduct} columnSize='col-lg-3 col-md-4 col-6' />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default ProductsSetTwo;
