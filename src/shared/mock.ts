import type { IFlight } from './types/flight.interface'

export const dataFlight: IFlight[] = [
	{
		id: 'TK1084',
		airplane: {
			image: '/public/images/airplanes/turkish.png',
			name: 'Boeing 777-300ER',
		},
		route: {
			seed: 35000,
			attidude: 0.8,
		},
		logo: '/public/icons/turkish-airlines.svg',
		airline: {
			airline: 'Turkish Airlines',
			airCountry: 'Turkey',
		},
		aircraftReg: 'TC-JFP',
		from: {
			city: 'Sofia',
			country: 'Bulgaria',
			countryCode: 'BG',
			timezone: 'EET',
			code: 'SOF',
			coordinates: [42.6967, 23.3219], // [lat, lng]
		},
		to: {
			city: 'Beijing',
			country: 'China',
			countryCode: 'CN',
			timezone: 'CST',
			code: 'PEK',
			coordinates: [39.9042, 116.4074], // Исправленные координаты Пекина
		},
		progress: 45,
		currentLocation: {
			coordinates: [41.5, 65.0], // [lat, lng]
		},
	},
	{
		id: 'LX38',
		airplane: {
			image: '/public/images/airplanes/SWISS.png',
			name: 'Airbus A330-300',
		},
		route: {
			seed: 38000,
			attidude: 0.85,
		},
		logo: '/public/icons/SWISS.svg',
		airline: {
			airline: 'SWISS',
			airCountry: 'Switzerland',
		},
		aircraftReg: 'HB-JXD',
		from: {
			city: 'Zurich',
			country: 'Switzerland',
			countryCode: 'CH',
			timezone: 'CET',
			code: 'ZRH',
			coordinates: [47.4647, 8.5492],
		},
		to: {
			city: 'New York',
			country: 'United States',
			countryCode: 'US',
			timezone: 'EST',
			code: 'JFK',
			coordinates: [40.6413, -73.7781],
		},
		progress: 72,
		currentLocation: {
			coordinates: [43.0, -45.0],
		},
	},
	{
		id: 'LH716',
		airplane: {
			image: '/public/images/airplanes/Lufthansa.png',
			name: 'Airbus A380-800',
		},
		route: {
			seed: 40000,
			attidude: 0.9,
		},
		logo: '/public/icons/Lufthansa.svg',
		airline: {
			airline: 'Lufthansa',
			airCountry: 'Germany',
		},
		aircraftReg: 'D-AIKE',
		from: {
			city: 'Frankfurt',
			country: 'Germany',
			countryCode: 'DE',
			timezone: 'CET',
			code: 'FRA',
			coordinates: [50.0333, 8.5706],
		},
		to: {
			city: 'Tokyo',
			country: 'Japan',
			countryCode: 'JP',
			timezone: 'JST',
			code: 'HND',
			coordinates: [35.5533, 139.7811],
		},
		progress: 28,
		currentLocation: {
			coordinates: [48.0, 45.0],
		},
	},
	{
		id: 'FR1234',
		airplane: {
			image: '/public/images/airplanes/Ryanair.png',
			name: 'Boeing 737-800',
		},
		route: {
			seed: 32000,
			attidude: 0.75,
		},
		logo: '/public/icons/Ryanair.svg',
		airline: {
			airline: 'Ryanair',
			airCountry: 'Ireland',
		},
		aircraftReg: 'EI-DWF',
		from: {
			city: 'London',
			country: 'United Kingdom',
			countryCode: 'GB',
			timezone: 'GMT',
			code: 'STN',
			coordinates: [51.885, 0.235],
		},
		to: {
			city: 'Barcelona',
			country: 'Spain',
			countryCode: 'ES',
			timezone: 'CET',
			code: 'BCN',
			coordinates: [41.2971, 2.0785],
		},
		progress: 90,
		currentLocation: {
			coordinates: [41.8, 2.1],
		},
	},
	{
		id: 'S75102',
		airplane: {
			image: '/public/images/airplanes/s7.png',
			name: 'Airbus A320neo',
		},
		route: {
			seed: 36000,
			attidude: 0.8,
		},
		logo: '/public/icons/S7airlines.svg',
		airline: {
			airline: 'S7 Airlines',
			airCountry: 'Russia',
		},
		aircraftReg: 'VP-BKE',
		from: {
			city: 'Moscow',
			country: 'Russia',
			countryCode: 'RU',
			timezone: 'MSK',
			code: 'SVO',
			coordinates: [55.9726, 37.4146],
		},
		to: {
			city: 'Novosibirsk',
			country: 'Russia',
			countryCode: 'RU',
			timezone: 'NOVT',
			code: 'OVB',
			coordinates: [55.0188, 82.9339],
		},
		progress: 15,
		currentLocation: {
			coordinates: [55.8, 44.0],
		},
	},
]
