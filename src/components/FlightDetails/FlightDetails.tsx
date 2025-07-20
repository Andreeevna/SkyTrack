import FlightRoute from './FlightRoute'
import FlightScheduler from './FlightScheduler'
import FlightInfo from './FlightInfo'
import FlightControl from './FlightControl'
import FlightAction from './FlightAction'
import FlightStatus from './FlightStatus'
import { useCurrentFlight } from '@/hooks/useCurrentFlight'

const FlightDetails = () => {
	const { foundedFlight } = useCurrentFlight()

	if (!foundedFlight) {
		return
	}

	return (
		<div
			className='absolute top-0 z-10 right-7 w-[380px] bg-[#111] rounded-xl'
			style={
				{
					// height: 'calc(100% - 16px)',
				}
			}
		>
			<div className='relative w-full h-60 flex items-end justify-center rounded-t-xl bg-gradient-to-t from-[#F3EFF] to-[#a1a7ec]'>
				<img
					className='block w-[90%]'
					src={foundedFlight?.airplane.image}
					alt={foundedFlight?.airplane.name}
				/>
				<FlightControl foundedFlight={foundedFlight} />
			</div>
			<div className='w-full p-3'>
				<FlightRoute foundedFlight={foundedFlight} />
				<FlightStatus foundedFlight={foundedFlight} />
				<FlightScheduler />
				<FlightInfo foundedFlight={foundedFlight} />
				<FlightAction />
			</div>
		</div>
	)
}

export default FlightDetails
