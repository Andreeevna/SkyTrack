import type { IFlight } from '../../shared/types/flight.interface'
import ProgressBar from '../ui/ProgressBar/ProgressBar'
import PROGERESSBAR from '/public/RouteProgressBar.png'

interface IProps {
	foundedFlight: IFlight
}

const FlightStatus = ({ foundedFlight }: IProps) => {
	return (
		<div className='bg-[#1C1C1C] mt-1 pt-3 pb-3 pl-3 pr-3'>
			<div className='pb-4 pt-4 flex justify-center items-center'>
				<ProgressBar progress={foundedFlight.progress} />
			</div>
			<div className='flex justify-between text-neutral-400'>
				<div className='space-x-1.5'>
					<span>2</span> <span>712</span>
					<span>km</span>
					<span>&#8226;</span>
					<span>3h</span>
					<span>1m</span>
				</div>
				<div className='space-x-1.5'>
					<span>882</span>
					<span>km</span>
					<span>&#8226;</span>
					<span>59m</span>
				</div>
			</div>
		</div>
	)
}

export default FlightStatus
