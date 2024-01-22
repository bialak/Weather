const baseUrl = "http://api.weatherapi.com";
const endpointPath = "v1/current.json";

const getUrl = (city: string) => {
	const searchParams = new URLSearchParams({
		key: "c6068278a47d4030aad124640241101",
		q: city,
		aqi: "no",
	});
	return `${baseUrl}/${endpointPath}?${searchParams.toString()}`;
};
// const cities = ["London", "Warsaw", "Berlin", "Prague", "Madrid", "Rome", "Mexico", "Sydney"];
// const allUrlsOfCities = cities.map((city) => (city = getUrl(city)));

const fetchDataCountry = async (url) => {
	const response = await fetch(url);
	return response.json();
};

export const getCityWeather = (city: string) => fetchDataCountry(getUrl(city));
