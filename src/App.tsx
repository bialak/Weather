import WeatherCard from "Components/WeatherCard/WeatherCard";
import "./App.css";
import Search from "./Components/Search/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WeatherCardsList from "Components/WeatherCardsList/WeatherCardsList";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<QueryClientProvider client={queryClient}>
				<Search />
				<WeatherCardsList />
			</QueryClientProvider>
		</div>
	);
}

export default App;
