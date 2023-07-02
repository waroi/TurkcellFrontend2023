import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <div className="row py-5">
        <div className="text-center d-flex flex-column gap-4">
          <h1 className="fw-bold">404</h1>
          <h3 className="fw-bold">Page Not Found</h3>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <div className="d-flex justify-content-center">
            <Button onClick={() => navigate("/")} buttonText="Anasayfa" padding='.525rem 1.1rem'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
