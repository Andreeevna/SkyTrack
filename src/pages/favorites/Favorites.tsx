import FlightItem from '@/components/FlightList/FlightItem/FlightItem'
import type { IFlight } from '@/shared/types/flight.interface'
import React, { useEffect, useMemo, useState } from 'react'

const Favorites = () => {
	const [savedItems, setSavedItems] = useState([])

	const renderFav = useMemo(() => {
		return savedItems.length > 0 ? (
			savedItems.map((flight: IFlight) => (
				<FlightItem key={flight.id} flight={flight} />
			))
		) : (
			<div className='text-gray-200'>Нет избранных рейсов</div>
		)
	}, [savedItems])

	useEffect(() => {
		const onUpdateStorage = () => {
			const items = localStorage.getItem('favItems')

			setSavedItems(items ? JSON.parse(items) : [])
		}

		window.addEventListener('storage', onUpdateStorage)

		onUpdateStorage()

		return () => {
			window.removeEventListener('storage', onUpdateStorage)
		}
	}, [])

	return (
		<div className='pl-3 pr-3 h-full'>
			<h1 className='text-[var(--color-orange)] font-medium text-2xl tracking-[1px] pb-4'>
				Favorites flights
			</h1>
			<div className='bg-[var(--bg-primary)] h-0.5 w-full'></div>
			<div className='mt-4 gap-3 grid grid-cols-3 auto-rows-auto'>
				{renderFav}
			</div>
		</div>
	)
}

export default Favorites
