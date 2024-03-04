import { render, screen } from "test/setup";
import WeatherCard from "../WeatherCard";
import { mockGetCityWeatherRequest } from "../../../test/mockRequests";

const nock = require("nock");

describe("WeatherCard", () => {
	it("should show fetched data from function getWeatherCity", async () => {
		mockGetCityWeatherRequest("Paris");

		render(<WeatherCard city={"Paris"} />);
		const countryInformation = await screen.findByTestId("country");
		const temperatureInformation = await screen.findByTestId("temperature");
		expect(countryInformation.textContent).toBe(`France`);
		expect(temperatureInformation.textContent).toBe(`10 °C`);
	});
});
