import Button from "../../../common/Button/Button"
import {AiOutlineDown} from 'react-icons/ai'
import PropTypes from 'prop-types'
const DropDownFilter = ({handleSort}) => {
  return (
    <div className="dropdown">
                <Button
                  padding="0.25rem 0.625rem"
                  className="dropdown-toggle"
                  backgroundcolor="transparent"
                  color="#667479"
                  fontSize="0.875rem"
                  icon={<AiOutlineDown size="1.1rem" />}
                  buttonText="Sort by: Popular"
                  iconPosition="right"
                  dataBsToggle="dropdown"
                />
                <ul className="dropdown-menu">
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("default")}
                    >
                      Default
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Title A-Z")}
                    >
                      Title A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Title Z-A")}
                    >
                      Title Z-A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Category A-Z")}
                    >
                      Category A-Z
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Category Z-A")}
                    >
                      Category Z-A
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Price Rising")}
                    >
                      Price Rising
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => handleSort("Price Decreasing")}
                    >
                      Price Decreasing
                    </button>
                  </li>
                </ul>
              </div>
  )
}

DropDownFilter.propTypes = {
  handleSort: PropTypes.func
}

export default DropDownFilter