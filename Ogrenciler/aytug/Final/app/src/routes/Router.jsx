import { PropTypes } from "prop-types";
import { useRoutes, useNavigate } from "react-router-dom";
import HomeView from "../views/HomeView";
import UserListView from "../views/UserListView";
import UserDetailView from "../views/UserDetailView";
import ProductsView from "../views/ProductsView";
import ProductDetailView from "../views/ProductDetailView";
import BasketView from "../views/BasketView";
import RegisterView from "../views/RegisterView";
import LoginView from "../views/LoginView";
import Page404 from "../views/Page404";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import AboutView from "../views/AboutView";
import ContactView from "../views/ContactView";

const CheckLogin = ({ children, isLoggedInRoute }) => {
	const navigate = useNavigate();
	const isLoggedIn = useSelector((state) => state.user.user !== null);

	useEffect(() => {
		if (isLoggedInRoute && !isLoggedIn) {
			navigate("/login");
		} else if (!isLoggedInRoute && isLoggedIn) {
			navigate("/");
		}
	}, [isLoggedIn, isLoggedInRoute, navigate]);

	return (isLoggedIn && isLoggedInRoute) || (!isLoggedIn && !isLoggedInRoute) ? children : null;
};

CheckLogin.propTypes = {
	children: PropTypes.node,
	isLoggedInRoute: PropTypes.bool,
};

const loggedInRoutes = [
	{ path: "/users", element: <UserListView /> },
	{ path: "/users/:id", element: <UserDetailView /> },
	{ path: "/products", element: <ProductsView /> },
	{ path: "/products/:id", element: <ProductDetailView /> },
	{ path: "/basket", element: <BasketView /> },
	{ path: "/about", element: <AboutView /> },
	{ path: "/contact", element: <ContactView /> },
];

const loggedOutRoutes = [
	{ path: "/login", element: <LoginView /> },
	{ path: "/register", element: <RegisterView /> },
];

const Router = () => {
	const routes = useRoutes([
		{ path: "/", element: <HomeView /> },
		...loggedOutRoutes.map((r) => ({
			...r,
			element: <CheckLogin isLoggedInRoute={false}>{r.element}</CheckLogin>,
		})),
		...loggedInRoutes.map((r) => ({
			...r,
			element: <CheckLogin isLoggedInRoute={true}>{r.element}</CheckLogin>,
		})),
		{ path: "*", element: <Page404 /> },
	]);
	return routes;
};

export default Router;
