import mainLogo from "../../assets/images/logo.svg";
import { StyledLink } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";
import { useEffect } from "react";
import * as W from "../../utils/wordFixer";
import * as S from "./NavBar.style";
import { toast } from "react-toastify";

const NavBar = () => {
	const { user } = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleLogout = (e) => {
		e.preventDefault();
		dispatch(clearUser());
		toast.success("Successfully logged out!");
	};

	const onSearch = (e) => {
		e.preventDefault();

		const searchInputEl = document.getElementById("searchInput");

		if (searchInputEl) {
			location.href = `/products?search=${searchInputEl.value}`;
		}
	};

	useEffect(() => {
		const searchInputEl = document.getElementById("searchInput");

		if (searchInputEl) {
			searchInputEl.value = new URLSearchParams(location.search).get("search") || "";
		}
	}, []);

	return (
		<S.NavBar className="navbar navbar-expand-lg bg-transparent">
			<div className="container">
				<a className="navbar-brand" href="/">
					<img src={mainLogo} className="logo" alt="main-logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<S.NavLi className="nav-item">
							<S.NavLink className="nav-link" aria-current="page" to="/">
								Home
							</S.NavLink>
						</S.NavLi>
						<S.NavLi className="nav-item">
							<S.NavLink className="nav-link" to="/products">
								Products
							</S.NavLink>
						</S.NavLi>
						<S.NavLi className="nav-item">
							<S.NavLink className="nav-link" to="/about">
								About
							</S.NavLink>
						</S.NavLi>
						<S.NavLi className="nav-item">
							<S.NavLink className="nav-link" to="/contact">
								Contact
							</S.NavLink>
						</S.NavLi>

						{user && user.role === "admin" && (
							<>
								<S.NavLi className="nav-item">
									<S.NavLink className="nav-link" to="/admin">
										Admin
									</S.NavLink>
								</S.NavLi>
							</>
						)}
					</ul>
					<form className="d-flex" role="search" onSubmit={onSearch}>
						<S.SearchInput
							className="form-control me-2"
							type="search"
							placeholder="Search something here"
							aria-label="Search"
							id="searchInput"
						/>
						<button className="btn" type="submit" onClick={onSearch}>
							<i className="bi bi-search"></i>
						</button>
						{!user ? (
							<S.UserButtons>
								<StyledLink type="primary" to="register">
									Register
								</StyledLink>
								<StyledLink to="login">Login</StyledLink>
							</S.UserButtons>
						) : (
							<>
								<S.BasketLink to="basket" type="primary">
									<i className="bi bi-cart3"></i>
								</S.BasketLink>
								<div className="dropdown">
									<S.ProfileBtn type="primary" data-bs-toggle="dropdown" aria-expanded="false">
										{W.capitalizeFirstChar(user.username)}
									</S.ProfileBtn>
									<ul className="dropdown-menu">
										<li>
											<S.ExitBtn onClick={handleLogout}>
												Log out <i className="bi bi-box-arrow-right"></i>
											</S.ExitBtn>
										</li>
										<li>
											<a className="dropdown-item" href="#">
												Profile
											</a>
										</li>
									</ul>
								</div>
							</>
						)}
					</form>
				</div>
			</div>
		</S.NavBar>
	);
};

export default NavBar;
