import Header from "./Header";
import İcons from "./İcons";
import { NavbarBackground } from "./styleNavbar";

function Navbar() {
  return (
    <>
      <NavbarBackground className="w-100">
        <Header />
      </NavbarBackground>
      <İcons />
    </>
  );
}

export default Navbar;
