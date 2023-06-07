import { TodayWeather } from "../TodayWeather/TodayWeather";
import DailyWeather from "../DailyWeather/DailyWeather";
import PropTypes from "prop-types";

function* chunked(arr, size) {
	for (let i = 0; i < arr.length; i += size) {
		yield arr.slice(i, i + size);
	}
}

const ActiveCity = ({ activeCity }) => {
	const dateNow = new Date().toJSON().slice(0, 10);
	const dailyWeathers = [...chunked(activeCity.list, 8)];
	const remainingDayData = activeCity.list.filter((item) => item.dt_txt.slice(0, 10) !== dateNow);
	const remainingDays = [...chunked(remainingDayData, 8)];

	return (
		<div className="container">
			<p>{activeCity.city.address}</p>
			<div className="row cardParent p-3">
				<h3>
					Bugün <span className="text-decoration-underline">{activeCity.city.name}</span> hava durumu
				</h3>
				{dailyWeathers[0].map((weather) => (
					<TodayWeather key={weather.id} weather={weather} />
				))}
			</div>
			<div className="row mt-3">
				{remainingDays.map((weather) => (
					<DailyWeather key={weather.id} weather={weather} />
				))}
			</div>
		</div>
	);
};

ActiveCity.propTypes = {
	activeCity: PropTypes.object,
};

export default ActiveCity;
