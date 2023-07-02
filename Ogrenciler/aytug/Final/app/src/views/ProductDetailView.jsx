import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import { getProductById } from "../redux/slices/productSlice";
import { useParams } from "react-router-dom";

const ProductDetailView = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector((state) => state.product.product);

	useEffect(() => {
		dispatch(getProductById(id));
	}, [dispatch, id]);

	return (
		<>
			<ProductDetail product={product} />
		</>
	);
};

export default ProductDetailView;
