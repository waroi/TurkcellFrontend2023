import { Outlet, useParams } from "react-router-dom";

const SporView = () => {
  const { name } = useParams();
  return (
    <div>
      SporView
      <Outlet />
      <h4>{name}</h4>
    </div>
  );
};

export default SporView;
