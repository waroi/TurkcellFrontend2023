import Menu from "./HeaderMenu/Menu"

const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Menu />
        </div>
        </nav>
  )
}

export default Header
