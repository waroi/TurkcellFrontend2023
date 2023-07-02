import { useDispatch } from "react-redux";
import * as S from "./BasketCard.style";
import PropTypes from "prop-types";
import { addItemToCart } from "../../services/cartService";
import { updateBasket } from "../../redux/slices/basketSlice";
import { toast } from "react-toastify";

const BasketCard = ({ basketItem, user }) => {
	const dispatch = useDispatch();

	const onIncreaseQuantity = async (e, increase) => {
		try {
			e.preventDefault();

			const updatedCart = (
				await addItemToCart(user.id, {
					productId: basketItem.productId,
					quantity: increase ? 1 : -1,
				})
			).cart;

			updateBasket(dispatch, user.id, updatedCart);
		} catch (err) {
			console.error("Couldn't increase product count", err);
			toast.error(err.message);
		}
	};

	const onQuantityChange = async (e) => {
		try {
			const newQuantity = +e.target.value;

			const diff = newQuantity - basketItem.quantity;

			const updatedCart = (
				await addItemToCart(user.id, {
					productId: basketItem.productId,
					quantity: diff,
				})
			).cart;

			updateBasket(dispatch, user.id, updatedCart);
		} catch (err) {
			console.error("Couldn't increase product count", err);
			toast.error(err.message);
		}
	};

	const onDeleteItem = async (e) => {
		try {
			e.preventDefault();

			const updatedCart = (
				await addItemToCart(user.id, {
					productId: basketItem.productId,
					quantity: -basketItem.quantity,
				})
			).cart;

			updateBasket(dispatch, user.id, updatedCart);
		} catch (err) {
			console.error("Couldn't increase product count", err);
			toast.error(err.message);
		}
	};

	return (
		<div className="col-12 mb-4">
			<S.Card>
				<S.CardImage src={basketItem.image} />
				<S.CardBody>
					<S.CardLink href={`/products/${basketItem.id}`}>
						<S.ItemTitle>{basketItem.title}</S.ItemTitle>
						<S.ItemPrice>₺{basketItem.price}</S.ItemPrice>
					</S.CardLink>
				</S.CardBody>
				<S.CardActions>
					<S.ItemQuantityArea>
						<S.QuantityButton type="primary" onClick={(e) => onIncreaseQuantity(e, false)}>
							-
						</S.QuantityButton>
						<S.ItemQuantity value={basketItem.quantity} onChange={onQuantityChange} />
						<S.QuantityButton type="primary" onClick={(e) => onIncreaseQuantity(e, true)}>
							+
						</S.QuantityButton>
					</S.ItemQuantityArea>
					<S.DeleteItemButton onClick={onDeleteItem}>
						<i className="bi bi-trash-fill"></i>
					</S.DeleteItemButton>
				</S.CardActions>
			</S.Card>
		</div>
	);
};

BasketCard.propTypes = {
	basketItem: PropTypes.object.isRequired,
	user: PropTypes.object.isRequired,
};

export default BasketCard;
