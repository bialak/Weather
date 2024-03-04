import { fetchCityWeather } from "fetchCityWeather";
import { useQuery } from "@tanstack/react-query";
import "./WeatherCard.css";

type WeatherCardProps = {
	city: string;
};

const WeatherCard = ({ city }: WeatherCardProps) => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["weather", city],
		queryFn: () => fetchCityWeather(city),
	});

	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<div className="weatherCard" data-testid={`weather-card-${city}`}>
			<span className="country" data-testid={"country"}>
				{data.location.country}
			</span>
			<span className="city"> {data.location.name}</span>
			<span className="text">{data.current.condition.text}</span>
			<span className="temperature" data-testid={"temperature"}>
				{data.current.temp_c} °C
			</span>
			<img
				src={data.current.condition.icon}
				alt={`${data.current.condition.text} weather image`}
				className="picture"
			/>
			<span className="wind">wind: {data.current.wind_kph} kph</span>
		</div>
	);
};

export default WeatherCard;
