import { useTheme } from "../../context/Context";
import { useParams } from "react-router-dom";
import DetailCard from "../../Components/DetailCard/DetailCard";
import NotFound from "../NotFound/NotFound";

const DetailPage = () => {
  const { coins } = useTheme();
  const { id } = useParams();
  const coin = coins.find((coin) => coin.id === id);

  return coin ? <DetailCard coin={coin} /> : <NotFound />;
};

export default DetailPage;
