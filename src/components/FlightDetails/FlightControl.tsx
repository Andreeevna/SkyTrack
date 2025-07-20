import { useSearchParams } from 'react-router-dom'
import type { IFlight } from '../../shared/types/flight.interface'

import CancelIcon from '@mui/icons-material/Cancel'
import { QUERY_PARAMS_FLIGHT } from '@/utils/constants'

interface IProps {
	foundedFlight: IFlight
}

const FlightControl = ({ foundedFlight }: IProps) => {
	const [searchParams, setSearchParams] = useSearchParams()

	return (
		<div className='bg-[#111] absolute top-0 left-0 w-[94%] m-3 rounded-xl p-3'>
			<div className='flex items-center justify-between'>
				<div>
					<h2 className='text-[#FBA316] text-xl'>{foundedFlight.id}</h2>
					<span className='text-m'>{foundedFlight.airline.airline}</span>
				</div>
				<div
					onClick={() => {
						searchParams.delete(QUERY_PARAMS_FLIGHT)
						setSearchParams(searchParams) //чтобы обновить состояние
					}}
				>
					<CancelIcon
						sx={{
							width: 32,
							height: 32,
							opacity: 0.3,
							cursor: 'pointer',
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default FlightControl
