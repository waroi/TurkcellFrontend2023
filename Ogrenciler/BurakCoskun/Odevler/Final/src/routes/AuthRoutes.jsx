import { Outlet, Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ user }) => {
  return !user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
  user: PropTypes.object,
};
