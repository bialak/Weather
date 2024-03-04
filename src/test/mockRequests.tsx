const nock = require("nock");

export const defaultMockedCityWeatherPayload = Object.freeze({
	current: {
		condition: {
			text: "Sunny",
			icon: "icon",
		},
		temp_c: 10,
		wind_kph: 10,
	},
	location: {
		country: "France",
		name: "Paris",
	},
});

const mockGetCityWeatherRequest = (
	city: string,
	payload: Weather = defaultMockedCityWeatherPayload
) => {
	nock("http://api.weatherapi.com")
		.defaultReplyHeaders({ "access-control-allow-origin": "*" })
		.get(`/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${city}&aqi=no`)
		.reply(200, payload);
};

const defaultMockedPropositionListPayload = [
	{ name: "Rawalpindi" },
	{ name: "Gujranwala" },
	{ name: "Gwalior" },
	{ name: "Bahawalpur" },
	{ name: "Sahiwal" },
];

const mockGetCityPropositionRequest = (
	searchCity: string,
	payload = defaultMockedPropositionListPayload
) => {
	nock("https://api.api-ninjas.com")
		.persist()
		.defaultReplyHeaders({
			"access-control-allow-origin": "*",
			"access-control-allow-headers": "X-Api-Key",
		})
		.get(`/v1/city?name=${searchCity}&limit=5`)
		.reply(200, payload)
		.options(`/v1/city?name=${searchCity}&limit=5`)
		.reply(200);
};

export { mockGetCityWeatherRequest, mockGetCityPropositionRequest };
