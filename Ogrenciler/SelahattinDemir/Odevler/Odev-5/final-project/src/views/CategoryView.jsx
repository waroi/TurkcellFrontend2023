import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/slice/productsSlice";
import Filter from "../components/Filter/Filter";
import Card from "../components/Card/Card";
import { FilterTitle, ProductsLength } from "../components/Filter/FilterStyle";

function CategoryView() {
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleCategoryFilter = (category) => {
    if (selectedCategories.includes(category)) {
      // Eğer kategori zaten seçili ise, seçimden kaldır
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      // Değilse, seçime ekle
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  // Filtrelenmiş ürünleri almak için bir fonksiyon oluşturalım
  const getFilteredProducts = () => {
    if (selectedCategories.length === 0) {
      // Hiçbir kategori seçilmediyse, tüm ürünleri döndür
      return products;
    } else {
      // Seçilen kategorilere göre filtreleme yap
      return products.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }
  };

  const filteredProducts = getFilteredProducts();
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
          <div className="d-flex gap-2 align-items-center">
            <FilterTitle>Products</FilterTitle>
            <ProductsLength>{products.length} products</ProductsLength>
          </div>
          <div className="row">
            {filteredProducts.map((item) => (
              <Card key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryView;
