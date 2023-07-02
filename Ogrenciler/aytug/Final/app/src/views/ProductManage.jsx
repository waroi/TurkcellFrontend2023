import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, getAllProducts } from "../../redux/slices/productSlice";
import Loading from "../components/Loading/Loading";

const ProductManage = () => {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.product.products);
	const loading = useSelector((state) => state.product.loading);

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteProduct(id));
	};

	const handleAddProduct = () => {
		const newProduct = { id: 1, name: "New Product" };
		dispatch(addProduct(newProduct));
	};

	if (loading) {
		<Loading />;
	}
	return <div>ProductManage</div>;
};

export default ProductManage;
