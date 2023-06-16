const SingleProduct = () => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className="card">
        <img src="https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80" className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title">Tişört</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <div className="d-flex justify-content-around">
            <span>Kategori</span>
            <span>Marka</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
