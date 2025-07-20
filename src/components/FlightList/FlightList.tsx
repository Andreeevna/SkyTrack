import { dataFlight } from '../../shared/mock'
import FlightItem from './FlightItem/FlightItem'

export type IsActiveType = Record<string, boolean>

interface IProps {
	searchQuery: any
}

const FlightList = ({ searchQuery }: IProps) => {
	const renderFlightItem = () => {
		if (!dataFlight) return null

		return dataFlight
			.filter(item => {
				return Object.entries(item).every(([key, value]) => {
					if (!(key in searchQuery) || !searchQuery[key]) {
						return true
					}

					return value
						?.toString()
						?.toLowerCase()
						?.includes(searchQuery[key].toString().toLowerCase())
				})
			})
			.map(flight => <FlightItem key={flight.id} flight={flight} />)
	}

	return (
		<div className='ml-3.5 w-[390px] space-y-2 relative z-10'>
			{renderFlightItem()}
		</div>
	)
}

export default FlightList
