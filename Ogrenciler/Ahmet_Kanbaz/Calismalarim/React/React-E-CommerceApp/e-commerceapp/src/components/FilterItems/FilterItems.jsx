const FilterItems = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-lg-around justify-content-center">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="dropdown dropend">
          <button className="btn btn-secondary dropdown-toggle w-50" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Kategori
          </button>
          <ul className="dropdown-menu">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                CheckBox
              </label>
            </div>
          </ul>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 col-12">
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle w-50" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sıralama
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ada Göre</a></li>
            <li><a className="dropdown-item" href="#">Tarihe Göre</a></li>
          </ul>
        </div>
      </div>

      <div className="col-lg-6 col-12">
        <input type="text" className="form-control w-100 shadow-none border-black rounded-4 px-3" />
      </div>
      </div>
    </div>
  )
}

export default FilterItems
