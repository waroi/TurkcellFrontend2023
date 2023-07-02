import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getAllProducts } from "../../redux/slices/productSlice";
import PropTypes from "prop-types";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";

const ProductContainer = ({ className, categoryWildcard, orderBy, filterCategoriesStr, textFilter }) => {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state.user);
	const products = useSelector((state) => state.product.products);
	const loading = useSelector((state) => state.product.loading);

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	const handleDelete = (id) => {
		dispatch(deleteProduct(id));
	};

	if (loading) {
		<Loading />;
	}

	const filterCategories = filterCategoriesStr ? filterCategoriesStr.split("|") : [];

	let filteredProducts = products
		.filter(
			(product) =>
				product.category.includes(categoryWildcard) &&
				(filterCategories.length !== 0 ? filterCategories.includes(product.category) : true) &&
				(textFilter && textFilter.length !== 0 ? product.title.toLowerCase().includes(textFilter.toLowerCase()) : true)
		)
		.sort((a, b) => {
			switch (orderBy) {
				case "a-z":
					return a.title.localeCompare(b.title);
				case "z-a":
					return b.title.localeCompare(a.title);
				case "price-asc":
					return a.price - b.price;
				case "price-desc":
					return b.price - a.price;
				case "category-asc":
					return a.title.localeCompare(b.title);
				case "category-desc":
					return b.title.localeCompare(a.title);
				default:
					return JSON.stringify(a).localeCompare(JSON.stringify(b));
			}
		});

	if (categoryWildcard !== "") filteredProducts = filteredProducts.slice(0, 8);

	const height = filteredProducts.some((product) => product.price > 200) ? 431 : 361;

	return (
		<div className={`row ${className}`}>
			{filteredProducts.map((product) => (
				<ProductCard
					product={product}
					key={product.id}
					handleDelete={handleDelete}
					height={height}
					showRating
					user={user}
				/>
			))}
		</div>
	);
};

ProductContainer.propTypes = {
	className: PropTypes.string,
	categoryWildcard: PropTypes.string,
	orderBy: PropTypes.string,
	filterCategoriesStr: PropTypes.string,
	textFilter: PropTypes.string,
};

export default ProductContainer;
