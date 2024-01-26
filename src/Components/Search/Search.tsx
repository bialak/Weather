import "./Search.css";
import { fetchCitiesToSearcher } from "Api/fetchCitiesToSearcher";
import { useCallback, useState } from "react";
import { useQuery } from "@tanstack/react-query";

var debounce = require("lodash.debounce");

const Search = () => {
	const [searchText, setSearchText] = useState("");

	const { isLoading, data: searchResult } = useQuery({
		queryKey: ["city-weather", searchText],
		queryFn: () => fetchCitiesToSearcher(searchText),
		enabled: Boolean(searchText),
	});

	function handleSubmit(e): void {
		e.preventDefault();
	}

	const debounceFn = useCallback(debounce(handleDebounceFn, 1000), []);

	function handleDebounceFn(e) {
		setSearchText(e.target.value);
	}

	function handleChange(e) {
		debounceFn(e);
	}

	return (
		<>
			<h1 className="header">What the weather is like in your country </h1>
			<form onSubmit={handleSubmit} className="searcher">
				<input onChange={handleChange} type="search" placeholder="Search..." />
				<button>Search</button>
			</form>
			<ul>
				{searchResult?.map((result) => (
					<li>{result.name}</li>
				))}
			</ul>
		</>
	);
};

export default Search;
