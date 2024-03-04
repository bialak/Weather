import { render, screen, fireEvent } from "test/setup";
import WeatherCardsList from "../WeatherCardsList";

describe("WeatherCardLists", () => {
	it("should show cities from array in component WeatherCard", async () => {
		render(<WeatherCardsList />);
		const WeatherCardLondon = screen.findByTestId("weather-card-London");
		const WeatherCardWarsaw = screen.findByTestId("weather-card-Warsaw");
	});
});
