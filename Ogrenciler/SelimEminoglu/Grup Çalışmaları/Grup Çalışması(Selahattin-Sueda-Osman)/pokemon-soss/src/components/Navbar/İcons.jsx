import { Navbarİmg, İconLi, NavbarA, NavbarSpan } from "./styleNavbar";
import { AiFillHome } from "react-icons/ai";

function İcons() {
  return (
    <div className="container">
      <ul className="list-unstyled d-flex justify-content-center px-5">
        <İconLi hovercolor="#919191">
          <NavbarA href="#">
            <AiFillHome size={32} style={{ color: "white" }} />
            <NavbarSpan className="text-white">Home</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#e3350d">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>Pokedex</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#ee6b2f">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>Video Games & Apps</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#e6bc2f">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>Trading Card Game</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#4dad5b">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>Pokemon TV</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#30a7d7">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>Play! Pokemon Events</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#1b53ba">
          <NavbarA href="#">
            <Navbarİmg src="./src/assets/icons/pikachu.png" alt="logo" />
            <NavbarSpan>News</NavbarSpan>
          </NavbarA>
        </İconLi>
      </ul>
    </div>
  );
}

export default İcons;
