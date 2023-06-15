import {
  Navbarİmg,
  NavbarAdsİmg,
  NavbarLi,
  LiActive,
  NavbarAniİmg,
  NavbarUl,
} from "./styleNavbar";

function Header() {
  return (
    <div className="container">
      <NavbarUl className="list-unstyled d-flex gap-2 justify-content-center">
        <LiActive>
          <a href="#">
            <Navbarİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
              alt="logo"
            />
          </a>
        </LiActive>
        <NavbarLi>
          <a href="#">
            <NavbarAniİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemoncenter-79x45.png"
              alt="logo"
            />
          </a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">
            <NavbarAniİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/corporate-en.png"
              alt="logo"
            />
          </a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">
            <NavbarAdsİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/sv02-gus-175-en.png"
              alt="logo"
            />
          </a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">
            <NavbarAdsİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/scarlet-violet-175x50-en.jpg"
              alt="logo"
            />
          </a>
        </NavbarLi>
        <NavbarLi>
          <a href="#">
            <NavbarAdsİmg
              src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/unite-176x50.jpg"
              alt="logo"
            />
          </a>
        </NavbarLi>
      </NavbarUl>
    </div>
  );
}

export default Header;
