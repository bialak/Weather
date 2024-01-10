type WeatherCardProps = {
	country: string;
	capital: string;
	degrees: number;
	wind: number;
	image?: String;
};

const WeatherSquere = ({ country, degrees, wind, image, capital }: WeatherCardProps) => {
	return (
		<div>
			<header>{country}</header>
			<h2>{capital}</h2>
			<h1>{degrees}</h1>
			{image}
			<h1>Wind {wind}</h1>
		</div>
	);
};

export default WeatherSquere;
