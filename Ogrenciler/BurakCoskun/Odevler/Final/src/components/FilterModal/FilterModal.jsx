import PropTypes from "prop-types";

const FilterModal = ({
  categories,
  setCheckedCategories,
  checkedCategories,
}) => {
  return (
    <div
      className="modal fade"
      id="filterModal"
      tabIndex="-1"
      aria-labelledby="filterModalLabel"
      aria-hidden="true"
      data-bs-centered="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="filterModalLabel">
              Filter
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
                    onChange={(e) => {
                      if (e.target.checked) {
                        setCheckedCategories([...checkedCategories, category]);
                      } else {
                        setCheckedCategories(
                          checkedCategories.filter(
                            (checkedCategory) => checkedCategory !== category
                          )
                        );
                      }
                    }}
                    value=""
                    id="flexCheckDefault"
                    checked={checkedCategories.includes(category)}
                  />
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;

FilterModal.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCheckedCategories: PropTypes.func.isRequired,
  checkedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
};
