import { Navbarİmg, İconLi, NavbarA, NavbarSpan } from "./styleNavbar";
import { AiFillHome } from "react-icons/ai";
import { MdCatchingPokemon, MdOutlineGamepad } from "react-icons/md";
import { RxCrumpledPaper } from "react-icons/rx";
import { SiPokemon } from "react-icons/si"
import { GiTrophyCup } from "react-icons/gi"
import { BsNewspaper } from "react-icons/bs"

import { Link } from "react-router-dom";

function İcons() {
  return (
    <div className="container">
      <ul className="list-unstyled d-flex justify-content-center px-5">
        <İconLi hovercolor="#919191">
          <NavbarA href="#">
            <AiFillHome size={32} style={{ color: "white" }} />
            <Link to={`/`}>
              <NavbarSpan className="text-white">Home</NavbarSpan>
            </Link>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#e3350d">
          <NavbarA href="#">
            <MdCatchingPokemon size={32} style={{ color: "#898989" }} />
            <NavbarSpan>Pokedex</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#ee6b2f">
          <NavbarA href="#">
            <MdOutlineGamepad size={32} style={{ color: "#898989" }} />
            <NavbarSpan>Video Games & Apps</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#e6bc2f">
          <NavbarA href="#">
            <RxCrumpledPaper size={32} style={{ color: "#898989" }} />
            <NavbarSpan>Trading Card Game</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#4dad5b">
          <NavbarA href="#">
            <SiPokemon size={42} style={{ color: "#898989" }} />
            <NavbarSpan>Pokemon TV</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#30a7d7">
          <NavbarA href="#">
            <GiTrophyCup size={32} style={{ color: "#898989" }} />
            <NavbarSpan>Play! Pokemon Events</NavbarSpan>
          </NavbarA>
        </İconLi>
        <İconLi hovercolor="#1b53ba">
          <NavbarA href="#">
            <BsNewspaper size={32} style={{ color: "#898989" }} />
            <NavbarSpan>News</NavbarSpan>
          </NavbarA>
        </İconLi>
      </ul>
    </div>
  );
}

export default İcons;
