interface Weather {
	current: {
		condition: {
			text: string;
			icon: string;
		};
		temp_c: number;
		wind_kph: number;
	};
	location: {
		country: string;
		name: string;
	};
}

interface Country {
	name: string;
	latitiude: number;
}
