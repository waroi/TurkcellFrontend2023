import PropTypes from "prop-types"
import StyledSortArea from "./StyledSortArea"
const SortArea = ({ setSortType }) => {

    const handleChange = (e) => {
        setSortType(e.target.value)
    }


    return (
        <StyledSortArea className="d-flex justify-content-between">
            <div className="d-none d-lg-block titleWrap"><span className="title">Products</span> 20 products</div>
            <select className="border rounded-3" name="sortSelect" id="sortSelect" onChange={handleChange}>
                <option value="priceAsc">price asc</option>
                <option value="priceDesc">price desc</option>
                <option value="nameAz">name a-z</option>
                <option value="nameZa">name z-a</option>
                <option value="categoryAz">category a-z</option>
                <option value="categoryZa">category z-a</option>
            </select>
        </StyledSortArea>
    )
}

SortArea.propTypes = {
    sortType: PropTypes.string.isRequired,
    setSortType: PropTypes.func.isRequired
}

export default SortArea