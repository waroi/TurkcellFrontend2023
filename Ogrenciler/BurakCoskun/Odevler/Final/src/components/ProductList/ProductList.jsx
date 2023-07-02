import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = ({
  categories,
  checkedCategories,
  setSortOption,
  searchedProducts,
  sortProducts,
  currentPage,
  setCurrentPage,
  productsPerPage,
  setCheckedCategories,
}) => {
  const handleCategoryChange = (e, category) => {
    if (e.target.checked) {
      setCheckedCategories([...checkedCategories, category]);
    } else {
      setCheckedCategories(
        checkedCategories.filter(
          (checkedCategory) => checkedCategory !== category
        )
      );
    }
  };

  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (
      currentPage <
      Math.ceil(searchedProducts.length / productsPerPage) - 1
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="row py-5">
      <div className="col-lg-3 col-12 py-3">
        <div className="d-none d-lg-block">
          <h2 className="fw-bold text-primary mb-2">Filter</h2>
          <p className="text-dark fw-bold">Category</p>
          <ul className="list-group">
            {categories.map((category) => (
              <li
                key={category}
                className="list-group-item border-0 d-flex align-items-center text-dark fw-bold"
              >
                <input
                  className="form-check-input me-3"
                  type="checkbox"
                  onChange={(e) => handleCategoryChange(e, category)}
                  value=""
                  id="flexCheckDefault"
                  checked={checkedCategories.includes(category)}
                />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex d-lg-none flex-row-reverse justify-content-between">
          <h2
            className="fw-bold text-primary mb-2 ms-4"
            data-bs-toggle="modal"
            data-bs-target="#filterModal"
          >
            {" "}
            <img
              src="/icons/Filter.png"
              alt="Filter Icon"
              className="mb-1"
            />{" "}
            Filter
          </h2>

          <select
            className="form-select form-select-sm "
            aria-label="Default select example"
            onChange={handleSortOptionChange}
            defaultValue="default"
          >
            <option value="default">Sort by</option>
            <option value="priceAZ">Sort by: Price: Low to High</option>
            <option value="priceZA">Sort by: Price: High to Low</option>
            <option value="rating">Sort by: Avg. Customer Review</option>
          </select>
        </div>
      </div>
      <div className="col-12 col-lg-9 py-3 ">
        <div className="row">
          <div className="d-flex mb-5">
            <div>
              <h2 className="text-primary fw-bold ">
                Products{" "}
                <span className="text-muted ms-3 fs-5">
                  {searchedProducts.length} found
                </span>
              </h2>
            </div>
            <div className="ms-auto d-none d-lg-block">
              <select
                className="form-select form-select-sm"
                aria-label="Default select example"
                onChange={handleSortOptionChange}
                defaultValue="default"
              >
                <option value="default">Sort by</option>
                <option value="priceAZ">Sort by: Price: Low to High</option>
                <option value="priceZA">Sort by: Price: High to Low</option>
                <option value="rating">Sort by: Avg. Customer Review</option>
              </select>
            </div>
          </div>
          {sortProducts()
            .slice(
              currentPage * productsPerPage,
              currentPage * productsPerPage + productsPerPage
            )
            .map((product) => (
              <div key={product.id} className="col-12 col-md-6 col-lg-4 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </div>
      {searchedProducts.length > productsPerPage && (
        <div className="col-12 text-center">
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
              <li className="page-item">
                <a className="page-link" onClick={handlePreviousPage}>
                  <img src="/icons/Arrow_Left_SM.png" alt="Left Arrow" />
                </a>
              </li>
              {[
                ...Array(Math.ceil(searchedProducts.length / productsPerPage)),
              ].map((_, index) => (
                <li className="page-item" key={index}>
                  <a
                    className={`page-link ${
                      index === currentPage ? "active" : ""
                    }`}
                    onClick={() => setCurrentPage(index)}
                  >
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className="page-item">
                <a className="page-link" onClick={handleNextPage}>
                  <img src="/icons/Arrow_Right_SM.png" alt="Right Arrow" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

ProductList.propTypes = {
  categories: PropTypes.array.isRequired,
  checkedCategories: PropTypes.array.isRequired,
  setSortOption: PropTypes.func.isRequired,
  searchedProducts: PropTypes.array.isRequired,
  sortProducts: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  productsPerPage: PropTypes.number.isRequired,
  setCheckedCategories: PropTypes.func.isRequired,
};

export default ProductList;
