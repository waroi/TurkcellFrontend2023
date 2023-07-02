import React from 'react'
import ProductBanner from "./ProductBanner/ProductBanner"
import CardAndFilter from './CardAndFilterArea/CardAndFilter'
const Products = () => {
  return (
    <div>
      <div className="container pt-100">
        <div className="row position-relative">
        <ProductBanner/>
        <CardAndFilter/>
        </div>
      </div>
    </div>
  )
}

export default Products