import { useEffect, useState } from "react";
import { getCryptoCurrencyBySymbol } from "../../services/api";
import { useParams } from "react-router-dom";
import { Line } from "react-chartjs-2";
import ChartCreator from "../ChartCreator/ChartCreator";

/* eslint-disable react/prop-types */
const CurrencyChart = ({ currency }) => {
	const { id } = useParams();
	const [chartData, setChartData] = useState({ labels: [] });

	const getCurrencyPriceData = async (symbol) => {
		try {
			const currencyData = await getCryptoCurrencyBySymbol(symbol);
			console.log(currencyData.prices);
			setChartData(currencyData);
		} catch (error) {
			console.error("Error fetching currency:", error);
		}
	};

	useEffect(() => {
		getCurrencyPriceData(id);
	}, [id]);

	return (
		<div className="mt-5">
			{currency && (
				<ul className="d-flex list-unstyled gap-4">
					<li>Overview</li>
					<li>Markets</li>
					<li>Historical Data</li>
					<li>News</li>
					<li>Price Estimates</li>
					<li>More Info</li>
				</ul>
			)}

			<ChartCreator />
		</div>
	);
};

export default CurrencyChart;
