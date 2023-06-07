import PropTypes from "prop-types";

export const TodayWeather = ({ weather }) => {
	return (
		<div className="col-2" key={weather.id}>
			<div className="card bg-transparent border-0 p-3">
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
					alt={weather.weather[0].description}
				/>
				<div className="card-body">
					<div className="card-title">{Math.floor(weather.main.temp)}°C</div>
					<div className="card-text">{weather.dt_txt.slice(11).slice(0, 5)}</div>
				</div>
			</div>
		</div>
	);
};

TodayWeather.propTypes = {
	weather: PropTypes.object,
};
