import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const ChartGenerator = () => {
	const [data, setData] = useState({ labels: [], datasets: [] });

	useEffect(() => {
		fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7")
			.then((response) => response.json())
			.then((result) => {
				const { prices } = result;
				const labels = prices.map((item) => new Date(item[0]).toLocaleDateString());
				const datasets = [
					{
						label: "Bitcoin Price",
						data: prices.map((item) => item[1]),
						borderColor: "rgba(75,192,192,1)",
						backgroundColor: "rgba(75,192,192,0.2)",
					},
				];
				setData({ labels, datasets });
			})
			.catch((error) => {
				console.error("API isteği sırasında bir hata oluştu:", error);
			});
	}, []);

	return (
		<div>
			<h1>Bitcoin Price Chart</h1>
			<Line data={data} />
		</div>
	);
};

export default ChartGenerator;
