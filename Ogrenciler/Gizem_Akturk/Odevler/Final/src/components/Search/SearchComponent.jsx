import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { fetchProductsBySearchAction, fetchProducts } from "../../redux/actions/productActions";

import './Search.scss'

const SearchComponent = () => {

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value === "");
        if (e.target.value === "" || e.target.value === null) {
            dispatch(fetchProducts());
            return;
        }
        dispatch(fetchProductsBySearchAction(e.target.value));
            

    }
    return (
        <form className="d-flex search">
            <FaSearch className="search-icon" />
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearch}

                />
            
        </form>
    );
}
export default SearchComponent ;