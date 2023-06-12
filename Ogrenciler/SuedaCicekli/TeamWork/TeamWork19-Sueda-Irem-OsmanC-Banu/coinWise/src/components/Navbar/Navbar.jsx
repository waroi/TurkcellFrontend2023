import Logo from "../../assets/logo/coinWise.png";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-body-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
