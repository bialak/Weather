import { getCityWeather } from "Api/fetchDataCountry";
import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import "./WeatherCard.css";

type WeatherCardProps = {
	// country: string;
	city: string;
	// degrees: number;
	// wind: number;
	// image?: String;
};

const WeatherCard = ({ city }: WeatherCardProps) => {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["weather", city],
		queryFn: () => getCityWeather(city),
	});

	if (isPending) {
		return <span>Loading...</span>;
	}

	if (isError) {
		return <span>Error: {error.message}</span>;
	}

	console.log(data);
	return (
		<div className="weatherCard">
			<header className="country">{data.location.country}</header>
			<h2 className="city"> {city}</h2>
			<h2 className="text">{data.current.condition.text}</h2>
			<h1 className="temperature"> {data.current.temp_c} °C</h1>
			<h1 className="wind">Wind {data.current.wind_kph} kph</h1>
			<img src={data.current.condition.icon} alt="" className="src" />
		</div>
	);
};

// <WeatherCard
// 	country={countryWeather.country}
// 	capital={countryWeather.name}
// 	degrees={countryWeather.current.temp_c}
// 	wind={countryWeather.current.wind_kph}
// 	image={countryWeather.current.confition.icon}
// />;

export default WeatherCard;
