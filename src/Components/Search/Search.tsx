import "./Search.css";
import { fetchCities } from "fetchCities";
import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import SearchPropositionList from "Components/SearchPropositionList/SearchPropositionList";

const debounce = require("lodash.debounce");

type SearchProps = {
	onSearchClick: (searchText: string) => void;
};

const Search = ({ onSearchClick }: SearchProps) => {
	const [searchText, setSearchText] = useState("");
	const [visibleSearchPropositionList, setVisibleSearchPropositionList] = useState(true);

	const { isLoading, data } = useQuery({
		queryKey: ["city-weather", searchText],
		queryFn: () => fetchCities(searchText),
		enabled: Boolean(searchText),
	});

	if (isLoading) {
		<span className="loader"></span>;
	}

	const searchResult = data ?? [];

	function handleSubmit(e): void {
		e.preventDefault();
		let listSearchedResults = searchResult.map((city) => city.name);
		if (listSearchedResults.includes(searchText)) {
			onSearchClick(searchText);
			return;
		}
		alert("Write correct city");
	}

	const debounceFn = useCallback(debounce(handleDebounceFn, 500), []);

	function handleDebounceFn(e) {
		setSearchText(e.target.value);
		setVisibleSearchPropositionList(true);
	}

	function handleChange(e) {
		setSearchText(e.target.value);
		debounceFn(e);
	}

	function handleClick(city: City) {
		setVisibleSearchPropositionList(false);
		setSearchText(city.name);
	}

	return (
		<>
			<h1 className="header">What the weather is like in your country </h1>
			<form onSubmit={handleSubmit} className="searcher">
				<input
					className="searchInput"
					onChange={handleChange}
					type="search"
					placeholder={"Search..."}
					value={searchText}
				/>
				<button className="searchButton" disabled={isLoading}>
					Search
				</button>
			</form>
			{visibleSearchPropositionList && (
				<SearchPropositionList onCitySelection={handleClick} inputvalue={searchText} />
			)}
		</>
	);
};

export default Search;
