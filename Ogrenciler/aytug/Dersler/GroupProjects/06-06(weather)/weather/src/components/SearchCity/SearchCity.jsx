import { useRef } from "react";
import { getCityData } from "../../services/api";
// import PropTypes from "prop-types";

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
		<div>
			<h3>HAVA SOĞUK MU?</h3>
			<div className="row">
				<div className="col-8 d-flex mx-auto">
					<input className="form-control mt-3" type="text" placeholder="Şehir arayın" ref={cityName} />
					<button
						className="btn btn-success"
						onClick={() => {
							getCity();
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
