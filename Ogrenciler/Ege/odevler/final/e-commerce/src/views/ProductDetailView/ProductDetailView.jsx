import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from "axios"

const ProductDetailView = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => setProduct(response.data))
            .then(console.log(product))
            .catch(err => console.log('Error fetching product data:', err))

    }, []);
    return (
        <div>{product.title}</div>
    )
}

export default ProductDetailView