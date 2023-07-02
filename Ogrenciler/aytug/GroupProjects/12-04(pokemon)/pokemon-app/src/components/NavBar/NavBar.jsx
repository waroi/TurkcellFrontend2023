import * as S from "./NavBarStyle.jsx";

const NavBar = () => {
	return (
		<div>
			<S.nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="/">
					POKEMONS
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="/">
								Ana Sayfa
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pokemonlar
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdown"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								Hakkımızda
							</a>
							<div className="dropdown-menu" aria-labelledby="navbarDropdown">
								<a className="dropdown-item" href="#">
									Biz Kimiz?
								</a>
								<a className="dropdown-item" href="#">
									İletişim
								</a>
							</div>
						</li>
					</ul>
				</div>
			</S.nav>
		</div>
	);
};

export default NavBar;
