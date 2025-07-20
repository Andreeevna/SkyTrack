import { dataFlight } from '@/shared/mock'
import { QUERY_PARAMS_FLIGHT } from '@/utils/constants'
import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useCurrentFlight = () => {
	const [searchParams] = useSearchParams()
	const selectedFlight = searchParams.get(QUERY_PARAMS_FLIGHT)

	const foundedFlight = useMemo(() => {
		return dataFlight.find(flight => flight.id === selectedFlight)
	}, [selectedFlight])

	return { foundedFlight }
}
