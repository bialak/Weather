type WeatherSquereProps = {
	country: string;
	degrees: number;
	wind: number;
	image?: String;
};

const WeatherSquere = ({ country, degrees, wind, image }: WeatherSquereProps) => {
	return (
		<div>
			<h1>{country}</h1>
			<h2>{degrees}</h2>
			{image}
			<h1>Wind {wind}</h1>
		</div>
	);
};

export default WeatherSquere;
