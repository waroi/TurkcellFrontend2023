import SingleProduct from "../SingleProduct/SingleProduct"

const AllProducts = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </div>
  )
}

export default AllProducts
