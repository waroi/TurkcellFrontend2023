import FilterArea from "./FilterArea/FilterArea"
import SortArea from "./SortArea/SortArea"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {

    const [products, setProducts] = useState([]);
    const [checkedCategories, setCheckedCategories] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data.map(el => ({ ...el, isFiltered: true, isSearched: true }))))
            .catch(err => console.log('Error fetching product data:', err))

    }, []);


    const handleCategories = () => {
        if (checkedCategories.length > 0) {
            const edited = [...products]
            edited.map(product => checkedCategories.includes(product.category.toLowerCase()) ? product.isFiltered = true : product.isFiltered = false)
            setProducts(edited)
            console.log("I am here")
        }
        else {
            const edited = [...products]
            edited.map(product => product.isFiltered = true)
            setProducts(edited)
        }
    }

    useEffect(() => { handleCategories() }, [checkedCategories])


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
                    <SortArea />
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