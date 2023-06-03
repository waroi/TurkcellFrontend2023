/* eslint-disable react/jsx-no-duplicate-props */

const FilterComponent = () => {
  return (
    <div className="filter">
      <h1 className="filter__title">Filter</h1>
      <div className="filter__content">
        <div className="filter__section">
          <h2 className="filter__section-title">Category</h2>
          <ul className="filter__list">
            <li className="filter__list-item">Action</li>
            <li className="filter__list-item">Adventure</li>
            <li className="filter__list-item">Fantasy</li>
            <li className="filter__list-item">Mystery</li>
          </ul>
        </div>
        <div className="filter__section">
          <h2 className="filter__section-title">Author</h2>
          <ul className="filter__list">
            <li className="filter__list-item">John Doe</li>
            <li className="filter__list-item">Jane Smith</li>
            <li className="filter__list-item">David Johnson</li>
            <li className="filter__list-item">Emily Brown</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
