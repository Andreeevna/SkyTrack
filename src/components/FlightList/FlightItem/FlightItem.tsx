import clsx from 'clsx'
import type { IFlight } from '../../../shared/types/flight.interface'
import { useSearchParams } from 'react-router-dom'
import { QUERY_PARAMS_FLIGHT } from '../../../utils/constants'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useEffect, useState } from 'react'
import ProgressBar from '@/components/ui/ProgressBar/ProgressBar'

interface IProps {
	flight: IFlight
}

const FlightItem = ({ flight }: IProps) => {
	const [searchParams, setSearchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT)
	const isActive = selectedFlight === flight.id

	const [isFavorite, setIsFavorite] = useState(() => {
		const savedItems = localStorage.getItem('favItems')
		return savedItems
			? JSON.parse(savedItems).some((item: IFlight) => item.id === flight.id)
			: false
	})

	console.log(isFavorite)

	useEffect(() => {
		const handleStorageChange = () => {
			const savedItems = localStorage.getItem('favItems')
			setIsFavorite(
				savedItems
					? JSON.parse(savedItems).some(
							(item: IFlight) => item.id === flight.id
					  )
					: false
			)
		}

		window.addEventListener('storage', handleStorageChange)
		return () => window.removeEventListener('storage', handleStorageChange)
	}, [flight.id])

	const toggleFavorite = (e: React.MouseEvent) => {
		e.stopPropagation()
		console.log('Добавлено в избранное:', flight.id)

		const savedItems = localStorage.getItem('favItems')

		const savedItemsParsed: IFlight[] = savedItems ? JSON.parse(savedItems) : []

		const isAlreadyFavorite = savedItemsParsed.some(
			item => item.id === flight.id
		)

		let updatedItems: IFlight[]

		if (isAlreadyFavorite) {
			updatedItems = savedItemsParsed.filter(item => item.id !== flight.id)
			console.log('Удалено из избранного:', flight.id)
		} else {
			updatedItems = [...savedItemsParsed, flight]
			console.log('Добавлено в избранное:', flight.id)
		}

		localStorage.setItem('favItems', JSON.stringify(updatedItems))

		window.dispatchEvent(new Event('storage'))

		setIsFavorite(!isAlreadyFavorite)
	}

	return (
		<div
			className={clsx(
				'rounded-xl p-0.5 w-[380px] transition duration-150 ease-in-out',
				isActive
					? 'bg-gradient-to-r from-rose-500 to-orange-400'
					: 'border-transparent'
			)}
		>
			<div
				className={clsx(
					'bg-[var(--bg-primary)] text-[var(--text-primary)] w-full p-5 rounded-xl cursor-pointer'
				)}
				onClick={() => {
					setSearchParams({
						[QUERY_PARAMS_FLIGHT]: flight.id,
					})
				}}
			>
				<div className='mb-[20px] flex justify-between items-center'>
					<div className='flex items-center gap-3'>
						<img
							className='w-[35px] h-[35px] rounded-full'
							src={flight.logo}
							alt='logo-flight'
						/>
						<span className='text-[var(--text-secondart)]'>{flight.id}</span>
					</div>

					<div className='flex items-center gap-2'>
						<span className='bg-[var(--bg-secondary)] text-xs px-2 py-0.5 rounded-2xl'>
							{flight.aircraftReg}
						</span>
						<button
							onClick={toggleFavorite}
							className='text-[var(--text-secondary)] hover:text-[var(--color-orange)] transition-colors flex items-center justify-center'
						>
							{isFavorite ? (
								<FavoriteIcon
									sx={{
										color: 'var(--color-orange)',
									}}
								/>
							) : (
								<FavoriteBorderIcon fontSize='small' />
							)}
						</button>
					</div>
				</div>

				<div className='flex items-center justify-between gap-1'>
					<div className='flex flex-col gap-1'>
						<span className='text-xs text-neutral-400'>{flight.from.city}</span>
						<span className='text-2xl'>{flight.from.code}</span>
					</div>
					<div className='w-full'>
						<ProgressBar progress={flight.progress} />
					</div>
					<div className='flex flex-col gap-1'>
						<span className='text-xs text-neutral-400'>{flight.to.city}</span>
						<span className='text-2xl'>{flight.to.code}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FlightItem
