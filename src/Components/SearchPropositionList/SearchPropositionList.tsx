import "./SearchPropositionList.css";
import { useQuery } from "@tanstack/react-query";
import { fetchCities } from "fetchCities";

interface SearchPorpositionProps {
	onCitySelection: (city: City) => void;
	inputvalue: string;
}

const SearchPropositionList = ({ onCitySelection, inputvalue }: SearchPorpositionProps) => {
	let tabIndexValue = 0;

	const { isLoading, data } = useQuery({
		queryKey: ["city-weather", inputvalue],
		queryFn: () => fetchCities(inputvalue),
		enabled: Boolean(inputvalue),
	});

	const searchResult = data ?? [];

	return (
		<ul className="searchPropositionList">
			{searchResult?.map((result) => (
				<li
					key={tabIndexValue}
					data-testid={`searchProposition-${tabIndexValue}`}
					className="searchProposition"
					tabIndex={tabIndexValue++}
					onClick={() => onCitySelection(result)}
				>
					{result.name}
				</li>
			))}
		</ul>
	);
};

export default SearchPropositionList;
