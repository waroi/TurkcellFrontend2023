import { Container } from "../../assets/css/style";
import { fetchCart } from "../../redux/slices/cartsList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CartDiv,
  CartHeadline,
  CartListDiv,
  CartBuyButton,
} from "./styleCartTable";

function CartTable() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart.carts);
  const loadingCart = useSelector((state) => state.cart.loading);
  const errorCart = useSelector((state) => state.cart.error);
  const activeUser = useSelector((state) => state.user.activeUser);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loadingCart) {
    return <div>Yükleniyor...</div>;
  }

  if (errorCart) {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <CartDiv>
        <CartHeadline>
          Sepetim:({activeUser.username}){" "}
          <CartBuyButton>Satın Al</CartBuyButton>
        </CartHeadline>
        <CartListDiv>
          {carts.map((item) => {
            if (item.userId == activeUser.id) {
              return <div>{item.products.title}</div>;
            }
          })}
        </CartListDiv>
      </CartDiv>
    </Container>
  );
}

export default CartTable;
