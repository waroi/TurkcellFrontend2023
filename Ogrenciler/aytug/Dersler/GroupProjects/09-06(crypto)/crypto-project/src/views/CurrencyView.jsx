import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCryptoCurrencyById } from "../services/api";
// import NotFound from "./NotFound";

const CurrencyView = () => {
	const { id } = useParams();
	const [currency, setCurrency] = useState();
	const navigate = useNavigate();

	const getCurrency = async (id) => {
		try {
			const currencyData = await getCryptoCurrencyById(id);
			if (Object.keys(currencyData).length === 0) {
				// return <NotFound />;
				navigate("/NotFound");
			}
			setCurrency(currencyData.coin);
		} catch (error) {
			console.error("Error fetching currency:", error);
		}
	};

	useEffect(() => {
		getCurrency(id);
	}, [id]);

	return (
		<>
			<div>{currency && currency.name}</div>
		</>
	);
};

export default CurrencyView;
