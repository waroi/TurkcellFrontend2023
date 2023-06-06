import { useRef } from "react";
import { getCityData } from "../../services/api";
// import PropTypes from "prop-types";
import { SearchBar } from "./SearchCityStyle";

const SearchCity = ({ setActiveCity }) => {
	const cityList = JSON.parse(localStorage.getItem("cityList"));
	if (!cityList) {
		localStorage.setItem("cityList", JSON.stringify([]));
	}
	const cityName = useRef();

	const getCity = async () => {
		let activeCity = await getCityData(cityName.current.value);

		if (activeCity) {
			// setRenderCheck(!renderCheck);
			let alreadySaved = cityList.find((city) => city.id === activeCity.id);
			if (!alreadySaved) {
				cityList.push(activeCity);
			}
			localStorage.setItem("cityList", JSON.stringify(cityList));
			setActiveCity(activeCity);
			// setUserData([activeCity, ...userData]);
		} else {
			const toastLiveExample = document.getElementById("liveToast");
			const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
			toastBootstrap.show();
		}
	};

	return (
		<div className="searchParent p-4">
			<h3>HAVA SOĞUK MU?</h3>
			<div className="row">
				<div className="col-8 d-flex mx-auto mt-3 align-items-center justify-content-center">
					<SearchBar className="form-control" type="text" placeholder="Şehir arayın" ref={cityName}/>
					<button
						className="btn btn-success"
						onClick={() => {
							getCity();
							cityName.current.value = "";
						}}
					>
						Ara
					</button>
				</div>
			</div>
		</div>
	);
};

export default SearchCity;
