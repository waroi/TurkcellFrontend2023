import React from "react";

export const TodayWeather = ({ weather }) => {
	return (
		<div className="col" key={weather.id}>
			<div className="card" weatherStatus={weather.weather[0].description}>
				<img
					src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
					alt={weather.weather[0].description}
				/>
				<div className="card-body">
					<div className="card-title">{weather.main.temp}</div>
					<div className="card-body">{weather.dt_txt.slice(11).slice(0, 5)}</div>
				</div>
			</div>
		</div>
	);
};
