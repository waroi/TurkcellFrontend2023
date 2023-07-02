import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./NavbarStyle.module.css";
import { useFormik } from "formik";
import { SearchSchema } from "../../schemas";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";
import {
  currentlyLoggedInSet,
  getUsers,
  localStorageDataSet,
  logOutUser,
} from "../../redux/slices/usersSlice";
import { handleSearch } from "../../redux/slices/productSlice";
import { getUserData } from "../../redux/helpers";
const Navbar = () => {
  const [userState, setUserState] = useState();
  const localStorageUser = JSON.parse(localStorage.getItem("users"));
  const loggedInData = useSelector((state) => state.users).loggedInUsers;
  const data = useSelector((state) => state.users).currentlyLoggedIn;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = () =>
    toast.error(formik.errors.search, {
      autoClose: 2000,
    });
  const currentUserData = loggedInData.find((item) => item.id == userState?.id);
  useEffect(() => {
    setUserState(localStorageUser);
  }, []);
  useEffect(() => {
    async function fetchData() {
      await dispatch(localStorageDataSet(userState));
      const users = await getUserData();
      await dispatch(getUsers(users));
      await dispatch(currentlyLoggedInSet(currentUserData));
    }
    fetchData();
  }, [userState, dispatch]);
  const onSubmit = async (values, actions) => {
    toast.warn("Searching...", {
      autoClose: 1000,
    });
    await dispatch(handleSearch(values));
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    actions.resetForm();
    navigate("/products");
  };
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    validationSchema: SearchSchema,
    onSubmit,
  });
  async function handleLogOutClick() {
    dispatch(logOutUser(data));
    window.location.reload(true);
    localStorage.clear("users");
  }
  return (
    <div className={styles.upperContainer}>
      <ToastContainer />
      <nav className="navbar navbar-expand-lg bg-transparent position-absolute fixed-top py-175">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarArea"
            aria-controls="navbarArea"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mx-auto ">
            <img src="../../../images/Frame.svg" alt="" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarArea">
            <div
              className={`d-flex justify-content-between w-100 ${styles.navbarCollapseArea}`}
            >
              <ul className="navbar-nav ms-xl-5 ms-lg-3 d-flex flex-start gap-lg-3  gap-xxl-5 me-xl-5 mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link fw-bold text-primary"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={data ? "/products" : "/login"}
                    className="nav-link fw-bold text-primary"
                    aria-current="page"
                    href="#"
                  >
                    Category
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    className="nav-link fw-bold text-primary"
                    aria-current="page"
                    href="#"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    className="nav-link fw-bold text-primary"
                    aria-current="page"
                    href="#"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  formik.handleSubmit();
                  formik.errors.search ? notify() : null;
                }}
                className="d-flex"
                role="search"
              >
                <input
                  id="search"
                  name="search"
                  onChange={formik.handleChange}
                  value={formik.values.search}
                  className={`form-control me-2 rounded-pill bg-white d-none d-lg-block ${styles.styledInput}`}
                  type="search"
                  placeholder="Search something here!"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <div className={data ? "d-none" : "d-flex"}>
              <Link
                to="/login"
                className={`btn btn-primary ms-lg-14 rounded-pill px-175 py-2`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary d-none d-lg-block display-10 ms-14 rounded-pill px-175  py-2"
              >
                SingUp
              </Link>
            </div>

            <div className={`${data ? "d-flex" : "d-none"}`}>
              <div>
                <div className="dropdown">
                  <button
                    className="btn btn-transparent dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {data?.username}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <div
                        onClick={() => handleLogOutClick()}
                        className="dropdown-item btn"
                      >
                        Log Out
                      </div>
                    </li>
                    <li>
                      <Link className="dropdown-item btn" to="/card">
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item btn ${
                          data?.isAdmin ? "d-block" : "d-none"
                        }`}
                        to="/addproduct"
                      >
                        Add Product
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/card" className="btn">
                <i className="fa-solid text-primary fa-cart-shopping fa-xl"></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
