import {Link} from 'react-router-dom'
const Menu = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to={'/'} className="nav-link">AnaSayfa</Link>
        </li>
        <li className="nav-item">
          <Link to= {'/aboutus'} className="nav-link">Hakkımızda</Link>
        </li>
        <li className="nav-item">
          <Link to= {'contact'} className="nav-link">İletişim</Link>
        </li>
        <li className="nav-item">
          <Link to= {'help'} className="nav-link">Yardım</Link>
        </li>
        <li className="nav-item">
          <Link to= {'/questions'} className="nav-link">Sıkça Sorulan Sorular</Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu
