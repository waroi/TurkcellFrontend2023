import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useEffect } from "react";
import * as S from "./ProductFilters.style";

const ProductFilters = ({
	className,
	setTextFilter,
	filterCategoriesStr,
	setFilterCategoriesStr,
	orderBy,
	setOrderBy,
}) => {
	useEffect(() => {
		const onTextFilterChange = (e) => {
			setTextFilter(e.target.value || "");
		};

		const searchInputEl = document.getElementById("searchInput");

		if (searchInputEl) {
			searchInputEl.addEventListener("keyup", onTextFilterChange);

			return () => {
				searchInputEl.removeEventListener("keyup", onTextFilterChange);
			};
		}
	}, []);

	const products = useSelector((state) => state.product.products);

	const uniqCategories = products.reduce((cum, curr) => {
		if (!cum.includes(curr.category)) {
			cum.push(curr.category);
		}

		return cum;
	}, []);

	const orderOptions = ["a-z", "z-a", "price-asc", "price-desc", "category-asc", "category-desc"];

	return (
		<div className={className}>
			<h2>Filter</h2>
			<S.FilterTypeWrapper>
				<h3>Category</h3>
				{uniqCategories.map((c) => (
					<S.FilterWrapper key={c}>
						<S.FilterOption
							type="checkbox"
							value={c}
							onClick={(e) => {
								const isSelected = e.target.checked;

								const filterCategories = filterCategoriesStr.split("|");

								const currIdx = filterCategories.indexOf(c);

								if (isSelected) {
									if (currIdx === -1) filterCategories.push(c);
								} else {
									if (currIdx !== -1) filterCategories.splice(currIdx, 1);
								}

								setFilterCategoriesStr(filterCategories.join("|"));
							}}
						/>
						{c}
					</S.FilterWrapper>
				))}
			</S.FilterTypeWrapper>
			<S.FilterTypeWrapper>
				<h3>Order By</h3>
				{orderOptions.map((o) => (
					<S.FilterWrapper key={o}>
						<S.FilterOption
							type="radio"
							name="orderBy"
							value={o}
							onClick={(e) => {
								const isSelected = e.target.checked;

								if (isSelected) {
									setOrderBy(o);
								}
							}}
							defaultChecked={orderBy === o}
						/>
						{o}
					</S.FilterWrapper>
				))}
			</S.FilterTypeWrapper>
		</div>
	);
};

ProductFilters.propTypes = {
	className: PropTypes.string,
	orderBy: PropTypes.string,
	setOrderBy: PropTypes.func,
	filterCategoriesStr: PropTypes.string,
	setFilterCategoriesStr: PropTypes.func,
	setTextFilter: PropTypes.func,
};

export default ProductFilters;
