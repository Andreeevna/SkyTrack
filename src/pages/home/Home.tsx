import MapSkyTrack from '@/components/MapSkyTrack/MapSkyTrack'
import FlightDetails from '../../components/FlightDetails/FlightDetails'
import FlightList from '../../components/FlightList/FlightList'
import { useOutletContext } from 'react-router-dom'

const Home = () => {
	const { searchQuery } = useOutletContext<{ searchQuery: string }>()

	return (
		<div>
			<FlightList searchQuery={searchQuery} />
			<FlightDetails />
			<div className='absolute inset-0 z-1'>
				<MapSkyTrack />
			</div>
		</div>
	)
}
export default Home
