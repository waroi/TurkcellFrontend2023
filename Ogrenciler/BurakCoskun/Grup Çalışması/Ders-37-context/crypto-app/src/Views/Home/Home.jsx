import Popular from "../../Components/Popular/Popular";
import { useEffect } from "react";
import { useTheme } from "../../context/Context";

const Home = () => {
  const { setPage } = useTheme();
  useEffect(() => {
    setPage(0);
  }, [setPage]);
  return (
    <div>
      <Popular />
    </div>
  );
};

export default Home;
