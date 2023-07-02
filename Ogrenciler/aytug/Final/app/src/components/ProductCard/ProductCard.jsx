import PropTypes from "prop-types";
import * as S from "./ProductCard.style";
import present from "../../assets/icons/present.svg";
import { addItemToCart } from "../../services/cartService";
import { updateBasket } from "../../redux/slices/basketSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product, height, user }) => {
	const dispatch = useDispatch();

	const onAddToCart = async (e) => {
		try {
			e.preventDefault();

			const quantity = +prompt("How many do you want to add");

			const updatedCart = (
				await addItemToCart(user.id, {
					productId: product.id,
					quantity,
				})
			).cart;

			updateBasket(dispatch, user.id, updatedCart);
			toast.success(`${quantity} piece(s) of ${product.title.slice(0, 10)} added to cart`);
		} catch (err) {
			console.error("Item not added to cart", err);
			toast.error(err.message);
		}
	};

	return (
		<div className="col-6 col-lg-3 mb-4">
			<S.CardLink href={`/products/${product.id}`}>
				<S.Card height={height}>
					<S.CardImage src={product.image} />
					<S.CardBody>
						<S.CardTitle>{product.title}</S.CardTitle>
						<S.ProductDetailsArea>
							<S.ProductDetail>
								Rating : <b>{product.rating.rate}</b>
							</S.ProductDetail>
							<S.ProductDetail>
								Reviews : <b>{product.rating.count}</b>
							</S.ProductDetail>
						</S.ProductDetailsArea>
						<S.ProductPriceArea>
							<S.ProductPrice>₺{product.price}</S.ProductPrice>
							{user && (
								<S.AddToCart
									onClick={onAddToCart}
									productcount={product.rating.count}
									disabled={product.rating.count === 0}
								>
									{product.rating.count > 0 ? <i className="bi bi-bag-plus-fill"></i> : <i className="bi bi-bag-x"></i>}
								</S.AddToCart>
							)}
						</S.ProductPriceArea>
						{product.price > 200 && (
							<S.ProductOffer>
								<img src={present} className="logo" alt="main-logo" />
								<b>Free Delivery & Suprise Gift</b>
							</S.ProductOffer>
						)}
					</S.CardBody>
				</S.Card>
			</S.CardLink>
		</div>
	);
};

ProductCard.propTypes = {
	product: PropTypes.object,
	height: PropTypes.number,
	user: PropTypes.object,
};

export default ProductCard;
