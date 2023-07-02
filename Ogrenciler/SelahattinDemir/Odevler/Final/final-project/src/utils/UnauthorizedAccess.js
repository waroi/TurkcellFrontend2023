import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function UnauthorizedAccess() {
  const navigate = useNavigate();

  useEffect(() => {
    toast.error("You need to log in first.");
    navigate("/login");
  }, [navigate]);

  return null;
}

export default UnauthorizedAccess;
