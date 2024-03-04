import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "../../../App";
import { cities } from "citiesToFetchData.js";
import {
	mockGetCityWeatherRequest,
	mockGetCityPropositionRequest,
	defaultMockedCityWeatherPayload,
} from "../../../test/mockRequests";
const nock = require("nock");

window.alert = jest.fn();
jest.mock("citiesToFetchData.js", () => ({
	cities: ["Paris"],
}));

describe("Search", () => {
	it("should show ResultSeatchedCard when you find your city and click search button", async () => {
		window.alert.mockClear();

		mockGetCityWeatherRequest("Paris");
		mockGetCityWeatherRequest("Gujranwala", {
			...defaultMockedCityWeatherPayload,
			location: {
				country: "Pakistan",
				name: "Gujranwala",
			},
		});

		mockGetCityPropositionRequest("Gujranwala", [{ name: "Gujranwala" }]);
		mockGetCityPropositionRequest("Wal");

		render(<App />);
		const inputSearch = screen.getByPlaceholderText("Search...");
		const searchButton = screen.getByText(/Search/i);
		fireEvent.change(inputSearch, { target: { value: "Wal" } });

		const searchProposition = await screen.findByTestId("searchProposition-1");
		expect(searchProposition.textContent).toBe("Gujranwala");
		fireEvent.click(searchProposition);

		await waitFor(() => expect(searchButton).not.toBeDisabled(), {
			timeout: 2000,
		});
		fireEvent.click(searchButton);

		const resultCountry = await screen.findByTestId("resultCountry");
		expect(resultCountry.textContent).toBe(`Pakistan`);
	});
});
