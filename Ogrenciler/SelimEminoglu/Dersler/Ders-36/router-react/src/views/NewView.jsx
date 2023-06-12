import { Outlet } from "react-router-dom";

const NewView = () => {
  return (
    <div>
      <h2>Haberler</h2>
      <Outlet />
      {/* sadece bu kalınca alt routların olduğunu anlıyor.Aslında bu yapı path ile gelecek veriyi gösterecek yerdir */}
    </div>
  );
};

export default NewView;
