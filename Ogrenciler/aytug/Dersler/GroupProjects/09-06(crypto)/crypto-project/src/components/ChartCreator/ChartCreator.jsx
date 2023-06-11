import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const ChartCreator = () => {
	const { id } = useParams();

	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
				.then((response) => response.json())
				.then((data) => {
					if (!data.prices || data.prices.length === 0) {
						console.log("No price data available.");
						return;
					}
					const formattedData = data.prices.map((item) => ({
						date: new Date(item[0]),
						price: item[1],
					}));
					setChartData(formattedData);
				})
				.catch((error) => {
					console.log("Error fetching data:", error);
				});
		};

		fetchData();
	}, [id]);

	// Verilerdeki minimum fiyat değerini bulma
	const minPrice = chartData.reduce((min, current) => (current.price < min ? current.price : min), Infinity);

	return (
		<div>
			<h3>{id} Price Chart</h3>
			<LineChart width={800} height={400} data={chartData}>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="date" />
				<YAxis type="number" domain={[minPrice, "dataMax"]} />
				<Tooltip />
				<Legend />
				<Line
					type="monotone"
					dataKey="price"
					stroke={
						chartData.length > 0
							? chartData[0].price < chartData[chartData.length - 1].price
								? "green"
								: "red"
							: "blue"
					}
					dot={false}
				/>
			</LineChart>
		</div>
	);
};

export default ChartCreator;
