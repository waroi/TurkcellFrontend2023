import { Link, Outlet, useLocation } from 'react-router-dom'

const MainView = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <Link to={location.pathname == "/search" ? "random" : "search"} >{location.pathname == "/search" ? "Randoma git" : "Search'e git"}</Link>
      <br />


      <Outlet />
    </div>
  )
}

export default MainView