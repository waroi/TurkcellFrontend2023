import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import StyledFilterArea from "./StyledFilterArea"
const FilterArea = ({ products, checkedCategories, setCheckedCategories }) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(Array.from(new Set(products.map(product => product.category.toLowerCase()))))
    }, [products])

    const handleChange = (e) => {
        if (e.target.checked) setCheckedCategories([...checkedCategories, e.target.value])
        else setCheckedCategories([...checkedCategories].filter(cat => cat != e.target.value))
    }

    return (
        <StyledFilterArea>
            <h3>Filter</h3>
            <div className="checkboxes">
                {
                    categories.map(category => (
                        <div key={category} className="d-flex align-items-center gap-3 mb-3">
                            <input type="checkbox" id={category} name={category} value={category} onChange={handleChange}
                            />
                            <label htmlFor={category}>{category}</label><br></br>
                        </div>
                    ))
                }
            </div>
        </StyledFilterArea>
    )
}

FilterArea.propTypes = {
    products: PropTypes.array.isRequired,
    checkedCategories: PropTypes.array.isRequired,
    setCheckedCategories: PropTypes.func.isRequired
}

export default FilterArea

