import type { IFlight } from '../../shared/types/flight.interface'
import AIRPLANE from '/public//icons/Separator.svg'

interface IProps {
	foundedFlight: IFlight
}

const FlightRoute = ({ foundedFlight }: IProps) => {
	return (
		<div className='relative flex items-center justify-center gap-1'>
			<div className='bg-[#1C1C1C] flex flex-col justify-center items-center space-y-2 rounded-tl-2xl flex-1 p-3'>
				<span className='text-3xl'>{foundedFlight.from.code}</span>
				<span>{foundedFlight.from.city}</span>
				<span className='text-xs text-neutral-500'>
					{foundedFlight.from.timezone}
				</span>
			</div>
			<div className='bg-[#1C1C1C] flex flex-col items-center space-y-2 rounded-tr-2xl flex-1 p-3'>
				<span className='text-3xl'>{foundedFlight.to.code}</span>
				<span>{foundedFlight.to.city}</span>
				<span className='text-xs text-neutral-500'>
					{foundedFlight.to.timezone}
				</span>
			</div>{' '}
			<img className='absolute' src={AIRPLANE} alt='airplane' />
		</div>
	)
}

export default FlightRoute
