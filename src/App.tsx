import WeatherCard from "Components/WeatherCard/WeatherCard";
import "./App.css";
import Search from "./Components/Search/Search";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<div className="App">
			<Search />
			<QueryClientProvider client={queryClient}>
				<WeatherCard city={"London"} />;
			</QueryClientProvider>
		</div>
	);
}

export default App;
