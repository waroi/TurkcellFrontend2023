import React, { useEffect, useState } from "react";
import { capitalizeWords } from "../../helpers/capitalize";

const ProductFilterSort = ({
  categories,
  setSortOption,
  setSelectedCategory,
  setSelectedStar,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isSmallScreen) {
    return (
      <div className="w-100 d-flex flex-row justify-content-between mt-3">
        <div className="mb-3">
          <select
            name="sort"
            className="form-select"
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="cheap">Cheap first</option>
            <option value="expensive">Expensive first</option>
            <option value="titleatoz">Title (a-z)</option>
            <option value="titleztoa">Title (z-a)</option>
            <option value="categoryatoz">Category (a-z)</option>
            <option value="categoryztoa">Category (z-a)</option>
          </select>
        </div>

        <div className="mb-3">
          <select
            name="category"
            className="form-select"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {Array.from(categories).map((category) => (
              <option key={category} value={category}>
                {capitalizeWords(category)}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <select
            name="star"
            className="form-select"
            onChange={(e) => setSelectedStar(e.target.value)}
          >
            <option value="">All Stars</option>
            <option value="1">&#9733;</option>
            <option value="2">&#9733;&#9733;</option>
            <option value="3">&#9733;&#9733;&#9733;</option>
            <option value="4">&#9733;&#9733;&#9733;&#9733;</option>
            <option value="5">&#9733;&#9733;&#9733;&#9733;&#9733;</option>
          </select>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-row flex-md-column justify-content-between w-75">
      <select
        name="sort"
        id=""
        className=" mb-3"
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="cheap">Cheap first</option>
        <option value="expensive">Expensive first</option>
        <option value="titleatoz">Title (a-z)</option>
        <option value="titleztoa">Title (z-a)</option>
        <option value="categoryatoz">Category (a-z)</option>
        <option value="categoryztoa">Category (z-a)</option>
      </select>

      <div className="mb-3">
        <h5 className="border-bottom">Filter by Category</h5>
        <label>
          <input
            type="radio"
            name="category"
            value=""
            onChange={(e) => setSelectedCategory(e.target.value)}
          />
          All Categories
        </label>
        {Array.from(categories).map((category) => (
          <label key={category}>
            <input
              type="radio"
              name="category"
              value={category}
              onChange={(e) => setSelectedCategory(e.target.value)}
            />
            {capitalizeWords(category)}
          </label>
        ))}
      </div>

      <div className="mb-3 d-flex flex-column">
        <h5>Filter by Rating</h5>
        <label>
          <input
            type="radio"
            name="star"
            value=""
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          All Stars
        </label>
        <label>
          <input
            type="radio"
            name="star"
            value="1"
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          &#9733;
        </label>
        <label>
          <input
            type="radio"
            name="star"
            value="2"
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          &#9733;&#9733;
        </label>
        <label>
          <input
            type="radio"
            name="star"
            value="3"
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          &#9733;&#9733;&#9733;
        </label>
        <label>
          <input
            type="radio"
            name="star"
            value="4"
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          &#9733;&#9733;&#9733;&#9733;
        </label>
        <label>
          <input
            type="radio"
            name="star"
            value="5"
            onChange={(e) => setSelectedStar(e.target.value)}
          />
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </label>
      </div>
    </div>
  );
};

export default ProductFilterSort;
