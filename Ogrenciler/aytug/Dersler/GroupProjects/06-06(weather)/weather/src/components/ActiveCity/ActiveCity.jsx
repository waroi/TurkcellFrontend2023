import { TodayWeather } from "../TodayWeather/TodayWeather";

const ActiveCity = ({ activeCity }) => {
	console.log(activeCity);
	return (
		<div>
			<h3>{activeCity.city.name}</h3>
			<p>{activeCity.city.address}</p>
			<img src={`https://kitt.lewagon.com/placeholder/cities/${activeCity.city.slug}`} alt={activeCity.city.name} />
			<div className="row row-cols-8">
				{activeCity.list.slice(0, 9).map((weather) => (
					<TodayWeather key={weather.id} weather={weather} />
				))}
			</div>
		</div>
	);
};

export default ActiveCity;
