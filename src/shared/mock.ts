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
			attitude: 0.8,
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
		},
		to: {
			city: 'Beijing',
			country: 'China',
			countryCode: 'CN',
			timezone: 'CST',
			code: 'PEK',
		},
		progress: 45,
	},
	{
		id: 'LX38',
		airplane: {
			image: '/public/images/airplanes/SWISS.png',
			name: 'Airbus A330-300',
		},
		route: {
			seed: 38000,
			attitude: 0.85,
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
		},
		to: {
			city: 'New York',
			country: 'United States',
			countryCode: 'US',
			timezone: 'EST',
			code: 'JFK',
		},
		progress: 72,
	},
	{
		id: 'LH716',
		airplane: {
			image: '/public/images/airplanes/Lufthansa.png',
			name: 'Airbus A380-800',
		},
		route: {
			seed: 40000,
			attitude: 0.9,
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
		},
		to: {
			city: 'Tokyo',
			country: 'Japan',
			countryCode: 'JP',
			timezone: 'JST',
			code: 'HND',
		},
		progress: 28,
	},
	{
		id: 'FR1234',
		airplane: {
			image: '/public/images/airplanes/Ryanair.png',
			name: 'Boeing 737-800',
		},
		route: {
			seed: 32000,
			attitude: 0.75,
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
		},
		to: {
			city: 'Barcelona',
			country: 'Spain',
			countryCode: 'ES',
			timezone: 'CET',
			code: 'BCN',
		},
		progress: 90,
	},
	{
		id: 'S75102',
		airplane: {
			image: '/public/images/airplanes/s7.png',
			name: 'Airbus A320neo',
		},
		route: {
			seed: 36000,
			attitude: 0.8,
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
		},
		to: {
			city: 'Novosibirsk',
			country: 'Russia',
			countryCode: 'RU',
			timezone: 'NOVT',
			code: 'OVB',
		},
		progress: 15,
	},
]
