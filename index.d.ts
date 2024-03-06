interface Weather {
	current: CurrentWeather;
	location: WeatherLocation;
}

interface WeatherLocation {
	country: string;
	name: string;
}

interface CurrentWeather {
	condition: {
		text: string;
		icon: string;
	};
	temp_c: number;
	wind_kph: number;
}

interface City {
	name: string;
	latitiude: number;
}
