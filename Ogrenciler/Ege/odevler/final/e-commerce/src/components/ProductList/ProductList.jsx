import FilterArea from "./FilterArea/FilterArea"
import SortArea from "./SortArea/SortArea"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import StyledProductList from "./StyledProductList";
import filterIcon from "../../assets/Filter.svg"
import Breadcrumbs from "../../styledComponents/Breadcrumbs";
import ProductsBanner from "./ProductsBanner/ProductsBanner";
const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [unsorted, setUnsorted] = useState([]);
    const [isOnFilter, setIsOnFilter] = useState(false)
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [sortType, setSortType] = useState("priceAsc")
    const searchValue = useSelector(state => state.search)
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => {
                setProducts(response.data.map(el => ({ ...el, isFiltered: true, isSearched: el.title.toLowerCase().includes(searchValue.toLowerCase()) })).sort(comparePrices).reverse())
                setUnsorted(response.data)
            })
    }, []);

    const handleIsOnFilter = () => {
        setIsOnFilter(!isOnFilter)
    }

    const handleCategories = () => {
        if (checkedCategories.length > 0) {
            const edited = [...products]
            edited.map(product => checkedCategories.includes(product.category.toLowerCase()) ? product.isFiltered = true : product.isFiltered = false)
            setProducts(edited)
        }
        else {
            const edited = [...products]
            edited.map(product => product.isFiltered = true)
            setProducts(edited)
        }
    }

    const handleSort = () => {
        if (sortType == "priceDesc") setProducts([...products].sort(comparePrices))
        else if (sortType == "nameAz") setProducts([...products].sort(compareTitles).reverse())
        else if (sortType == "nameZa") setProducts([...products].sort(compareTitles))
        else if (sortType == "categoryAz") setProducts([...products].sort(compareCategories).reverse())
        else if (sortType == "categoryZa") setProducts([...products].sort(compareCategories))
        else setProducts([...products].sort(comparePrices).reverse())
    }

    const handleSearch = () => {
        const edited = [...products]
        edited.map(product => product.title.toLowerCase().includes(searchValue.toLowerCase()) ? product.isSearched = true : product.isSearched = false)
        setProducts(edited)
    }

    const comparePrices = (a, b) => {
        if (a.price > b.price) return -1;
        else if (a.price < b.price) return 1
        return 0
    }

    const compareCategories = (a, b) => {
        if (a.category.toLowerCase() > b.category.toLowerCase()) return -1;
        else if (a.category.toLowerCase < b.category.toLowerCase()) return 1;
        return 0;
    }

    const compareTitles = (a, b) => {
        if (a.title.toLowerCase() > b.title.toLowerCase()) return -1;
        else if (a.title.toLowerCase < b.title.toLowerCase()) return 1;
        return 0;
    };

    useEffect(() => { handleCategories() }, [checkedCategories])
    useEffect(() => { handleSort() }, [sortType])
    useEffect(() => { handleSearch() }, [searchValue])

    return (
        <StyledProductList className="container">
            <Breadcrumbs className="d-flex gap-2">
                <Link to={"/"}>Home</Link>/
                <span>Products</span>
            </Breadcrumbs>
            <ProductsBanner />
            <div className="row">
                <div className="col-lg-3">
                    <div className="d-none d-lg-block my-3">
                        <FilterArea products={unsorted} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories} />
                    </div>

                </div>
                <div className="col-lg-9">
                    <div className="my-3">
                        <div className="d-flex justify-content-between align-items-center d-lg-block">
                            <SortArea sortType={sortType} setSortType={setSortType} />
                            <div className="d-lg-none filter" onClick={handleIsOnFilter}> <img src={filterIcon} alt="filterIcon" /> Filter</div>
                        </div>
                        {isOnFilter && <FilterArea products={products} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories} />}
                    </div>
                    <div className="container">
                        <div className="titleWrap d-lg-none">
                            <span className="subtitle">Products</span> 20 products
                        </div>
                        <div className="row">
                            {
                                products?.map(product => (product.isFiltered && product.isSearched) && (
                                    <Link key={product.id} className="toPageLink col-6 col-lg-4" to={`/products/${product.id}`}>
                                        <ProductCard product={product} />

                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </StyledProductList>
    )
}

export default ProductList