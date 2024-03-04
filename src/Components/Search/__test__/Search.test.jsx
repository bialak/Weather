import { render, screen, fireEvent } from "../../../test/setup";
import Search from "../Search";
import { mockGetCityPropositionRequest } from "../../../test/mockRequests";
const nock = require("nock");

describe("Search", () => {
	it("should show proposition when you write something in input", async () => {
		mockGetCityPropositionRequest("Wal");

		render(<Search />);

		const inputSearch = screen.getByPlaceholderText("Search...");
		fireEvent.change(inputSearch, { target: { value: "Wal" } });
		expect(inputSearch.value).toBe("Wal");

		const searchProposition = await screen.findByTestId("searchProposition-1");
		expect(searchProposition.textContent).toBe("Gujranwala");
	});
});
