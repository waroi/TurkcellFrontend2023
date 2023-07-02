import {BsFacebook, BsTwitter, BsInstagram, BsYoutube} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
const FooterMenu = () => {
  const loginUser = useSelector((state) => state.user.user)
  return (
    <div className="footerMenu">
      <div className="d-flex justify-content-lg-between justify-content-center flex-wrap gap-4 gap-lg-0 align-items-center">
        <div className="d-flex footerMenuItems">
          <Link to='/' className='text-decoration-none'>Home</Link>
          <Link to={Object.keys(loginUser).length !== 0 ? '/products' : '/auth/login'} className='text-decoration-none'>Category</Link>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="d-flex footerMenuItems">
          <BsFacebook />
          <BsTwitter />
          <BsInstagram />
          <BsYoutube />
        </div>
      </div>
    </div>
  );
};

export default FooterMenu;
