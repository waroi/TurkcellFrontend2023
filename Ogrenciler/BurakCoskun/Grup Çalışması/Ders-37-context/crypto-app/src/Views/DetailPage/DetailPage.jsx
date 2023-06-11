import { useTheme } from "../../context/Context";
import { useParams } from "react-router-dom";
import DetailCard from "../../Components/DetailCard/DetailCard";

const DetailPage = () => {
  const { coins } = useTheme();
  const { id } = useParams();
  const coin = coins.find((coin) => coin.id === id);

  return <DetailCard coin={coin} />;
};

export default DetailPage;
