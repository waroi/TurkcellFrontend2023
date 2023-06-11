import { useEffect, useState } from "react";
import { getAllCryptoCurrencies } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Td, Th } from "./CurrencyListStyle";

const CurrencyList = () => {
	const navigate = useNavigate();
	const [allCurrencies, setAllCurrencies] = useState();
	const [sortColumn, setSortColumn] = useState(null);
	const [sortOrder, setSortOrder] = useState("asc");

	const getCurrencies = async () => {
		const list = await getAllCryptoCurrencies();
		setAllCurrencies(list.coins);
	};

	useEffect(() => {
		getCurrencies();
	}, []);

	const handleSort = (column) => {
		if (sortColumn === column) {
			setSortOrder(sortOrder === "asc" ? "desc" : "asc");
		} else {
			setSortColumn(column);
			setSortOrder("asc");
		}
	};

	const sortedCurrencies = allCurrencies?.sort((a, b) => {
		switch (sortColumn) {
			case "#":
				return sortOrder === "asc" ? a.rank - b.rank : b.rank - a.rank;
			case "Name":
				return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
			case "Price":
				return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
			case "1h%":
				return sortOrder === "asc" ? a.priceChange1h - b.priceChange1h : b.priceChange1h - a.priceChange1h;
			case "24h%":
				return sortOrder === "asc" ? a.priceChange1d - b.priceChange1d : b.priceChange1d - a.priceChange1d;
			case "7d%":
				return sortOrder === "asc" ? a.priceChange1w - b.priceChange1w : b.priceChange1w - a.priceChange1w;
			case "Market_Cap":
				return sortOrder === "asc" ? a.marketCap - b.marketCap : b.marketCap - a.marketCap;
			case "Volume_24h":
				return sortOrder === "asc" ? a.volume - b.volume : b.volume - a.volume;
			case "Total_Supply":
				return sortOrder === "asc" ? a.totalSupply - b.totalSupply : b.totalSupply - a.totalSupply;
			default:
				return 0;
		}
	});

	const tableHeaders = [
		{ key: "", label: "" },
		{ key: "#", label: "#" },
		{ key: "Name", label: "Name", className: "text-start" },
		{ key: "Price", label: "Price" },
		{ key: "1h%", label: "1h%" },
		{ key: "24h%", label: "24h%" },
		{ key: "7d%", label: "7d%" },
		{ key: "Market_Cap", label: "Market Cap" },
		{ key: "Volume_24h", label: "Volume 24h" },
		{ key: "Total_Supply", label: "Total Supply" },
		{ key: "", label: "Last 7 days" },
		{ key: "", label: "" },
	];

	return (
		<div className="container">
			<table className="w-100 h-100" cellPadding={10}>
				<thead>
					<tr>
						{tableHeaders.map((header) => (
							<Th key={header.key} className={header.className} onClick={() => handleSort(header.key)}>
								{header.label}
							</Th>
						))}
					</tr>
				</thead>
				<tbody>
					{sortedCurrencies?.map((currency) => (
						<tr key={currency.id} onClick={() => navigate(`/coins/${currency.id}`)}>
							<Td>
								<i className="bi bi-star"></i>
							</Td>
							<Td>{currency.rank}</Td>
							<Td className="text-start ">
								<img src={currency.icon} width={30} height={30} className="me-3" />
								{currency.name}
							</Td>
							<Td>{currency.price.toFixed(2)}</Td>
							<Td value={currency.priceChange1h}>{currency.priceChange1h}</Td>
							<Td value={currency.priceChange1d}>{currency.priceChange1d}</Td>
							<Td value={currency.priceChange1w}>{currency.priceChange1w}</Td>
							<Td>{currency.marketCap.toFixed(2)}</Td>
							<Td>{currency.volume.toFixed(2)}</Td>
							<Td>{currency.totalSupply}</Td>
							<Td></Td>
							<Td>
								<i className="bi bi-three-dots-vertical"></i>
							</Td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CurrencyList;
