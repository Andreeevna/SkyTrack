export interface IFlightAirplane {
	image: string
	name: string
}

export interface IFlightRoute {
	seed: number
	attidude: number
}

export interface IFlightLocation {
	city: string
	country: string
	countryCode: string
	timezone: string
	code: string
	coordinates: [number, number]
}

export interface IFlightAirline {
	airline: string
	airCountry: string
}

export interface IFlight {
	id: string
	airplane: IFlightAirplane
	route: IFlightRoute
	logo: string
	airline: IFlightAirline
	aircraftReg: string
	from: IFlightLocation
	to: IFlightLocation
	progress: number
	currentLocation: Pick<IFlightLocation, 'coordinates'>
}
