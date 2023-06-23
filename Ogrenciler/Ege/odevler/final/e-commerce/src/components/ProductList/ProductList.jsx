import FilterArea from "./FilterArea/FilterArea"
import SortArea from "./SortArea/SortArea"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);
    const [sortType, setSortType] = useState("priceAsc")

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data.map(el => ({ ...el, isFiltered: true, isSearched: true })).sort(comparePrices).reverse()))

            .catch(err => console.log('Error fetching product data:', err))

    }, []);

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <FilterArea products={products} checkedCategories={checkedCategories} setCheckedCategories={setCheckedCategories} />
                    <div className="selectedCategories">
                        {
                            checkedCategories.map((selected, i) => (<p key={i}>{selected}</p>))
                        }
                    </div>
                </div>
                <div className="col-lg-9">
                    <SortArea sortType={sortType} setSortType={setSortType} />
                    <div className="container">
                        <div className="row">
                            {
                                products?.map(product => product.isFiltered && (
                                    <Link key={product.id} className="toPageLink col-lg-4" to={`/products/${product.id}`}>
                                        <ProductCard product={product}>

                                        </ProductCard>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList