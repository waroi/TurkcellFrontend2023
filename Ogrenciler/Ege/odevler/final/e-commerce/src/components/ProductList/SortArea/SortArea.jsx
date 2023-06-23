import PropTypes from "prop-types"
const SortArea = ({ setSortType }) => {

    const handleChange = (e) => {
        setSortType(e.target.value)
    }


    return (
        <select name="sortSelect" id="sortSelect" onChange={handleChange}>
            <option value="priceAsc">price asc</option>
            <option value="priceDesc">price desc</option>
            <option value="nameAz">name a-z</option>
            <option value="nameZa">name z-a</option>
            <option value="categoryAz">category a-z</option>
            <option value="categoryZa">category z-a</option>
        </select>
    )
}

SortArea.propTypes = {
    sortType: PropTypes.string.isRequired,
    setSortType: PropTypes.func.isRequired
}

export default SortArea