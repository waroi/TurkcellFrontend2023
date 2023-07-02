import CartCheckout from "./CartCheckout/CartCheckout";
import CartProductsList from "./CartProductsList/CartProductsList";
import {CartPageContainer} from './CartPageStyle'

const CartPage = () => {
  
  return (
    <CartPageContainer>
      <div className="container py-5">
        <div className="row mt-5">
          <h4 className="fw-bold mb-3">Cart</h4>
          <div className="col-lg-8 col-md-6 col-12 mb-4 mb-lg-0">
            <CartProductsList />
          </div>
          <div className="col-lg-4 col-md-6 col-12 sticky-top">
            <CartCheckout />
          </div>
        </div>
      </div>
    </CartPageContainer>
  );
};

export default CartPage;
