import { fetchCityWeather } from "fetchCityWeather";
import { useQuery } from "@tanstack/react-query";
import "./ResultSearchedCard.css";

type ResultSearchedCardProps = {
	city: string;
};

const ResultSearchedCard = ({ city }: ResultSearchedCardProps) => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["weatherResult", city],
		queryFn: () => fetchCityWeather(city),
	});

	if (isPending) {
		return <span>Loading..</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	return (
		<>
			<div className="resultSearchedCard">
				<span className="country" data-testid="resultCountry">
					{data.location.country}
				</span>
				<span className="city"> {city}</span>
				<span className="text">{data.current.condition.text}</span>
				<span className="temperature" data-testid={"resultTemperature"}>
					{data.current.temp_c} °C
				</span>
				<img
					src={data.current.condition.icon}
					alt={`${data.current.condition.text} weather image`}
					className="picture"
				/>
				<span className="wind">wind: {data.current.wind_kph} kph</span>
			</div>
		</>
	);
};

export default ResultSearchedCard;
