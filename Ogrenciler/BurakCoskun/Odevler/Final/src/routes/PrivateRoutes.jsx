import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PrivateRoutes = ({ user }) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    checkAuthentication()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  const checkAuthentication = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user) {
          resolve();
        } else {
          reject();
        }
      }, 500);
    });
  };

  if (isLoading) {
    return (
      <div className="container p-5 h-100 w-100 d-flex justify-content-center align-items-center ">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    if (location.pathname !== "/login") {
      sessionStorage.setItem("initialRoute", location.pathname);
    }

    return <Navigate to="/login" />;
  }

  if (location.pathname === "/login") {
    const storedInitialRoute = sessionStorage.getItem("initialRoute");
    if (storedInitialRoute) {
      sessionStorage.removeItem("initialRoute");
      return <Navigate to={storedInitialRoute} replace />;
    }
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

PrivateRoutes.propTypes = {
  user: PropTypes.object,
  initialRoute: PropTypes.string,
};

export default PrivateRoutes;
