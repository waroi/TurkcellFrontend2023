// import * as S from "./Basket.style";
import { useDispatch, useSelector } from "react-redux";
import { updateBasket } from "../../redux/slices/basketSlice";
import { useEffect } from "react";
import BasketCard from "../BasketCard/BasketCard";
import Section from "../Section/Section";
import * as S from "./Basket.style";
import { toast } from "react-toastify";
import { checkoutCart } from "../../services/cartService";

const Basket = () => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const { cart } = useSelector((state) => state.basket);

	useEffect(() => {
		(async function () {
			if (user) {
				updateBasket(dispatch, user.id, undefined);
			}
		})();
	}, [user]);

	const onCheckout = async (e) => {
		try {
			e.preventDefault();

			const cartTotal = await checkoutCart(user.id);

			toast.success(`You have bought items worth total of ₺${cartTotal}`);

			updateBasket(dispatch, user.id, undefined);
		} catch (err) {
			toast.error(err.message);
		}
	};

	return (
		<Section>
			<div className="row">
				{cart &&
					cart.map((item) => {
						return (
							<div key={item.productId}>
								<BasketCard basketItem={item} user={user} />
							</div>
						);
					})}
			</div>
			<S.CheckoutButton onClick={onCheckout}>Checkout</S.CheckoutButton>
		</Section>
	);
};

export default Basket;
