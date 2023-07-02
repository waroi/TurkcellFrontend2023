import { useState } from "react";
import ProductContainer from "../ProductContainer/ProductContainer";
import ProductFilters from "../ProductFilters/ProductFilters";
import Section from "../Section/Section";
import * as S from "./ProductWrapper.style";

const ProductsView = () => {
	const [textFilter, setTextFilter] = useState(new URLSearchParams(location.search).get("search") || "");
	const [filterCategoriesStr, setFilterCategoriesStr] = useState("");
	const [orderBy, setOrderBy] = useState("a-z");

	return (
		<Section>
			<S.ProductWrapper className="row">
				<ProductFilters
					className="col-2"
					{...{ setTextFilter, filterCategoriesStr, setFilterCategoriesStr, orderBy, setOrderBy }}
				/>
				<ProductContainer
					categoryWildcard=""
					orderBy={orderBy}
					filterCategoriesStr={filterCategoriesStr}
					textFilter={textFilter}
					className="col-10"
				/>
			</S.ProductWrapper>
		</Section>
	);
};

export default ProductsView;
