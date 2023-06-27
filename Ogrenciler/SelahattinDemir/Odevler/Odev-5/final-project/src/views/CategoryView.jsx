import { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import Filter from "../components/Filter/Filter";
import SortFilter from "../components/Filter/SortFilter";
import CategoryCard from "../components/Card/CategoryCard";
import { FilterTitle, ProductsLength } from "../components/Filter/FilterStyle";

function CategoryView() {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortBy, setSortBy] = useState("default");
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryFilter = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const getFilteredProducts = () => {
    if (selectedCategories.length === 0) {
      return products.slice();
    } else {
      return products
        .filter((item) => selectedCategories.includes(item.category))
        .slice();
    }
  };

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption);
  };

  const filteredProducts = getFilteredProducts();

  const sortedProducts = useMemo(() => {
    const sortedCopy = [...filteredProducts];

    if (sortBy === "price-asc") {
      sortedCopy.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortedCopy.sort((a, b) => b.price - a.price);
    } else if (sortBy === "name-asc") {
      sortedCopy.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      sortedCopy.sort((a, b) => b.title.localeCompare(a.title));
    }

    return sortedCopy;
  }, [filteredProducts, sortBy]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <FilterTitle>Filter</FilterTitle>
          <Filter
            data={products}
            onCategoryFilterChange={handleCategoryFilter}
            selectedCategories={selectedCategories}
          />
        </div>
        <div className="col-md-9">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <FilterTitle>Products</FilterTitle>
              <ProductsLength>{sortedProducts.length} products</ProductsLength>
            </div>
            <SortFilter handleSortChange={handleSortChange} />
          </div>
          <div className="row">
            {sortedProducts.map((item) => (
              <CategoryCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
