import { Outlet } from "react-router-dom";
const NewView = () => {
  return (
    <div>
      <h1>Haberler</h1>
      <Outlet /> {/*burada alt route'larının gösterileceği yer */}
    </div>
  );
};

export default NewView;
