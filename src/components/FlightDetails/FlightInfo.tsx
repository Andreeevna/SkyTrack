import type { IFlight } from '../../shared/types/flight.interface'

interface IProps {
	foundedFlight: IFlight
}

const FlightInfo = ({ foundedFlight }: IProps) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-1 mt-3'>
			<div className='col-span-2 bg-[#292929] rounded-tr-xl rounded-tl-xl pt-2 pl-2 pb-2'>
				Flight information
			</div>
			<div className='col-span-1 bg-[#1C1C1C] p-3'>
				{foundedFlight.airplane.name}
			</div>
			<div className='col-span-1 bg-[#1C1C1C] p-3'>
				{foundedFlight.from.country}
			</div>
			<div className='col-span-1 bg-[#1C1C1C] p-3 rounded-bl-xl flex items-center justify-between'>
				<span className='text-neutral-400'>Speed</span>
				<div className='space-x-1'>
					<span> {foundedFlight.route.seed}</span>
					<span>km/h</span>
				</div>
			</div>
			<div className='col-span-1 bg-[#1C1C1C] p-3 rounded-br-xl flex items-center justify-between'>
				<span className='text-neutral-400'>Altitude</span>
				<div className='space-x-1'>
					<span>{foundedFlight.route.attitude}</span>
					<span>m</span>
				</div>
			</div>
		</div>
	)
}

export default FlightInfo
