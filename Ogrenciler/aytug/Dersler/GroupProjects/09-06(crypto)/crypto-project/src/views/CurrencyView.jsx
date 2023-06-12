import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCryptoCurrencyById } from "../services/api";
import DetailCard from "../components/DetailCard/DetailCard";
import CurrencyChart from "../components/CurrencyChart/CurrencyChart";
// import NotFound from "./NotFound";

const CurrencyView = () => {
  const { id } = useParams();
  const [currency, setCurrency] = useState();
  const navigate = useNavigate();

  const getCurrency = async (id) => {
    try {
      const currencyData = await getCryptoCurrencyById(id);
      if (Object.keys(currencyData).length === 0) {
        navigate("/NotFound");
      }
      setCurrency(currencyData.coin);
    } catch (error) {}
  };

  useEffect(() => {
    getCurrency(id);
  }, [id]);

  return (
    <div className="container">
      <DetailCard currency={currency} />
      <CurrencyChart currency={currency} />
    </div>
  );
};

export default CurrencyView;
