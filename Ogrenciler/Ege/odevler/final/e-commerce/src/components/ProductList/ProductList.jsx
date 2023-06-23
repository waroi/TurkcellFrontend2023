import FilterArea from "./FilterArea/FilterArea"
import SortArea from "./SortArea/SortArea"
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from "./ProductCard/ProductCard";
import { Link } from "react-router-dom";

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then(response => setProducts(response.data))
            .catch(err => console.log('Error fetching product data:', err))

    }, []);
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3">
                    <FilterArea />
                </div>
                <div className="col-lg-9">
                    <SortArea />
                    <div className="container">
                        <div className="row">
                            {
                                products?.map(product => (
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