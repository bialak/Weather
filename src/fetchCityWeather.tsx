const baseUrl = "http://api.weatherapi.com";
const endpointPath = "v1/current.json";

const getUrl = (city: string) => {
	const searchParams = new URLSearchParams({
		key: process.env.REACT_APP_WEATHER_API_KEY,
		q: city,
		aqi: "no",
	});
	return `${baseUrl}/${endpointPath}?${searchParams.toString()}`;
};

export const fetchCityWeather = async (city: string) => {
	const url = getUrl(city);
	const response = await fetch(url);
	return response.json() as Promise<Weather>;
};
