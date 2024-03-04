export const fetchCities = async (city: string) => {
	const url = getUrlOfCity(city);
	const response = await fetch(url, {
		headers: {
			"X-Api-Key": process.env.REACT_APP_NINJA_API_KEY,
			"Content-Type": "application/json",
		},
	});
	return response.json() as Promise<Country[]>;
};

const baseUrlCity = "https://api.api-ninjas.com/v1/city";

const getUrlOfCity = (city: string) => {
	const searchParams = new URLSearchParams({
		name: city,
		limit: "5",
	});
	return `${baseUrlCity}?${searchParams.toString()}`;
};
