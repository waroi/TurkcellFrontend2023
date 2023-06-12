import { Outlet, useParams } from "react-router-dom";

const SportView = () => {
  const { name } = useParams();
  return (
    <h3>
      Sport View
      <Outlet />
      {name}
    </h3>
  );
};

export default SportView;
