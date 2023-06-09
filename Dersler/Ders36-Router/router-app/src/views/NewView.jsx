import { Outlet } from "react-router-dom";
const NewView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <Outlet />
    </div>
  );
};

export default NewView;
