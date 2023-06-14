import { Outlet, useParams } from "react-router-dom";

const SportView = () => {
  const { name } = useParams();
  return (
    <h1>
      Sport View
      <Outlet />
      {name}
    </h1>
  );
};

export default SportView;
