import {Nav} from './NavbarStyle'
const Navbar = () => {
  return (
    <Nav>
      <a href="/"><img src='/images/newsLogo.png' alt="Logo" /></a>
      <div>
        <ul>
          <li><a href="/">Anasayfa</a></li>
          <li>Hakkımızda</li>
          <li>İletişim</li>
        </ul>
      </div>
    </Nav>
  )
}

export default Navbar
