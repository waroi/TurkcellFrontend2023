import { useEffect, useState } from "react"
import PropTypes from "prop-types"
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
        <div>
            <h1>Filter</h1>
            <div className="checkboxes">
                {
                    categories.map(category => (
                        <div key={category}>
                            <input type="checkbox" id={category} name={category} value={category} onChange={handleChange}
                            />
                            <label htmlFor={category}>{category}</label><br></br>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

FilterArea.propTypes = {
    products: PropTypes.array.isRequired,
    checkedCategories: PropTypes.array.isRequired,
    setCheckedCategories: PropTypes.func.isRequired
}

export default FilterArea

