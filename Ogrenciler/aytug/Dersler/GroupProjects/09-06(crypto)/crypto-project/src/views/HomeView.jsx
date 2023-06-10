import { useEffect, useState } from "react";
import { getAllCryptoCurrencies } from "../services/api";

const HomeView = () => {
	const [allCurrencies, setAllCurrencies] = useState();

	const getCurrencies = async () => {
		const list = await getAllCryptoCurrencies();
		setAllCurrencies(list.coins);
	};

	useEffect(() => {
		getCurrencies();
	}, []);

	return <>{allCurrencies && allCurrencies.map((currency) => <p key={currency.id}>{currency.id}</p>)}</>;
};

export default HomeView;
