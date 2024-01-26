import WeatherCard from "Components/WeatherCard/WeatherCard";
import "./WeatherCardsList.css";

const WeatherCardsList = () => {
	const cities = ["London", "Warsaw", "Berlin", "Prague", "Madrid", "Rome", "Mexico", "Sydney"];

	return (
		<>
			<div className="weatherCardsList">
				{cities.map((city) => (
					<WeatherCard city={city} />
				))}
			</div>
		</>
	);
};

export default WeatherCardsList;
