import "./Search.css";

const Search = () => {
	function handleSubmit(e): void {
		e.preventDefault();
		console.log("this is:");
	}

	return (
		<>
			<h1 className="header">What the weather is like in your country </h1>
			<form onSubmit={handleSubmit} className="searcher">
				<input type="search" placeholder="Search..." />
				<button type="submit">Search</button>
			</form>
		</>
	);
};

export default Search;
