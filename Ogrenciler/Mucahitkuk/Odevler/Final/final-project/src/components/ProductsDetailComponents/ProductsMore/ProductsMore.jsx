import { useEffect, useState } from 'react'
import ProductCard from '../../ProductCard/ProductCard';

const ProductsMore = () => {
 const [products, setProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
      <div className="d-flex row gap-2 justify-content-center mt-3">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
    </>
  )
}

export default ProductsMore