import { Outlet, useParams } from "react-router-dom";

const EconomyNewView = () => {
  const { name } = useParams();
  return (
    <div>
      <Outlet />
      {name}
    </div>
  );
};

export default EconomyNewView;
