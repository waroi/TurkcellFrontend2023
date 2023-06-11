import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ChartCreator = () => {
	const { id } = useParams();

	const chartRef = useRef(null);

	const [latestPrice, setLatestPrice] = useState(0);
	const [chart, setChart] = useState(null);

	useEffect(() => {
		let isMounted = true;

		const fetchData = () => {
			fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`)
				.then((response) => response.json())
				.then((data) => {
					if (!isMounted) return;

					if (!data.prices || data.prices.length === 0) {
						console.log("No price data available.");
						return;
					}
					const dates = data.prices.map((item) => new Date(item[0]));
					const prices = data.prices.map((item) => item[1]);

					const ctx = chartRef.current.getContext("2d");
					if (chart) {
						chart.destroy(); // Önceki grafik nesnesini yok et
					}
					const newChart = new window.Chart(ctx, {
						type: "line",
						data: {
							labels: dates,
							datasets: [
								{
									label: `${id} Price`,
									data: prices,
									borderColor: "blue",
									fill: false,
								},
							],
						},
						options: {
							responsive: true,
							maintainAspectRatio: false,
						},
					});

					setChart(newChart); // Yeni grafik nesnesini ayarla

					const latestPrice = prices[prices.length - 1];
					setLatestPrice(latestPrice);
				})
				.catch((error) => {
					console.log("Error fetching data:", error);
				});
		};

		fetchData();

		// Komponentin unmount edildiğinde fetch işlemini iptal etmek için bir cleanup fonksiyonu
		return () => {
			isMounted = false;
			if (chart) {
				chart.destroy(); // Grafik nesnesini temizle
			}
		};
	}, [id]);

	return (
		<div>
			<h3>{id} Price Chart</h3>
			<p>Latest Price: ${latestPrice}</p>
			<canvas ref={chartRef} width={90} height={90} />
		</div>
	);
};

export default ChartCreator;
