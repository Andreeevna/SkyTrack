import Map, {
	Layer,
	Marker,
	Source,
	type LayerProps,
	type MapRef,
} from 'react-map-gl/maplibre'
import type { FeatureCollection } from 'geojson'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useCurrentFlight } from '@/hooks/useCurrentFlight'
import { useEffect, useMemo, useRef } from 'react'
import Pin from '../ui/Pin/Pin'
import Plane from '../ui/Plane/Plane'
import { dataFlight } from '@/shared/mock'
import {
	createGeoBazier,
	createSplitGreatCircle,
	dashedStyle,
	solidStyle,
} from './skyp-track-map.utils'
import { useTheme } from '@/providers/theme/useTheme'

const geojson: FeatureCollection = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-122.4, 37.8],
			},
			properties: { title: '915 Front Street, San Francisco, California' },
		},
	],
}

const layerStyle: LayerProps = {
	id: 'point',
	type: 'circle',
	paint: {
		'circle-radius': 10,
		'circle-color': '#007cbf',
	},
}

const MapSkyTrack = () => {
	const { foundedFlight } = useCurrentFlight()

	const { theme } = useTheme()

	const allFlightsCoordinaties = useMemo(() => {
		return dataFlight
			.filter(flight => flight.id !== foundedFlight?.id)
			.map(f => {
				return f.currentLocation.coordinates
			})
	}, [foundedFlight])

	const renderAllPlanes = useMemo(() => {
		return allFlightsCoordinaties.map(coords => {
			return (
				<Marker key={coords[1]} longitude={coords[1]} latitude={coords[0]}>
					<Plane className='fill-[#fff] opacity-50 w-[20px]' />
				</Marker>
			)
		})
	}, [allFlightsCoordinaties])

	const ref = useRef<MapRef>(null)

	useEffect(() => {
		if (ref.current && foundedFlight) {
			ref.current.setCenter({
				lat: foundedFlight.currentLocation.coordinates[0],
				lng: foundedFlight.currentLocation.coordinates[1],
			})
			ref.current.setZoom(4)
		}
	}, [foundedFlight])

	const [solidCoords, dashedCoords] = useMemo(() => {
		if (
			!foundedFlight?.to ||
			!foundedFlight?.from ||
			!foundedFlight.currentLocation
		)
			return [[], []]

		const all = [
			[foundedFlight.from.coordinates[1], foundedFlight.from.coordinates[0]],
			[
				foundedFlight.currentLocation.coordinates[1],
				foundedFlight.currentLocation.coordinates[0],
			],
			[foundedFlight.to.coordinates[1], foundedFlight.to.coordinates[0]],
		]
		return [all.slice(0, 2), all.slice(1)]
	}, [foundedFlight])

	// const solidGeoJson: GeoJSON.FeatureCollection = {
	// 	type: 'FeatureCollection',
	// 	features: [
	// 		{
	// 			type: 'Feature',
	// 			geometry: {
	// 				type: 'LineString',
	// 				coordinates: solidCoords,
	// 			},
	// 			properties: {},
	// 		},
	// 	],
	// }

	// const dashedGeoJson: GeoJSON.FeatureCollection = {
	// 	type: 'FeatureCollection',
	// 	features: [
	// 		{
	// 			type: 'Feature',
	// 			geometry: {
	// 				type: 'LineString',
	// 				coordinates: dashedCoords,
	// 			},
	// 			properties: {},
	// 		},
	// 	],
	// }

	// const solidGeoJsonFeature = useMemo(() => {
	// 	return solidCoords.length >= 2 ? createGeoBazier(solidCoords) : null
	// }, [solidCoords])

	// const dashedGeoJsonFeature = useMemo(() => {
	// 	return dashedCoords.length >= 2 ? createGeoBazier(dashedCoords) : null
	// }, [dashedCoords])

	const { solidFeature, dashedFeature, snappedPoint, bearing } = useMemo(() => {
		if (
			!foundedFlight?.from ||
			!foundedFlight?.to ||
			!foundedFlight?.currentLocation
		)
			return {
				solidFeature: null,
				dashedFeature: null,
				snappedPoint: null,
				bearing: 0,
			}

		const from: [number, number] = [
			foundedFlight.from.coordinates[1],
			foundedFlight.from.coordinates[0],
		]
		const to: [number, number] = [
			foundedFlight.to.coordinates[1],
			foundedFlight.to.coordinates[0],
		]
		const current: [number, number] = [
			foundedFlight.currentLocation.coordinates[1],
			foundedFlight.currentLocation.coordinates[0],
		]

		return createSplitGreatCircle(from, to, current)
	}, [foundedFlight])

	return (
		<Map
			ref={ref}
			initialViewState={{
				longitude: foundedFlight?.currentLocation.coordinates[1] || -122.45,
				latitude: foundedFlight?.currentLocation.coordinates[0] || 37.78,
				zoom: 4,
			}}
			mapStyle={
				theme === 'dark'
					? 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
					: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
			}
			style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
		>
			<Source id='my-data' type='geojson' data={geojson}>
				<Layer {...layerStyle} />
			</Source>
			{solidCoords.length > 1 && solidFeature && (
				<Source
					id='route-solid'
					type='geojson'
					data={{
						type: 'FeatureCollection',
						features: [solidFeature],
					}}
				>
					<Layer {...solidStyle(theme)} />
				</Source>
			)}

			{dashedCoords.length > 1 && dashedFeature && (
				<Source
					id='route-dashed'
					type='geojson'
					data={{
						type: 'FeatureCollection',
						features: [dashedFeature],
					}}
				>
					<Layer {...dashedStyle(theme)} />
				</Source>
			)}

			{renderAllPlanes}
			{snappedPoint && (
				<Marker longitude={snappedPoint[0]} latitude={snappedPoint[1]}>
					<div
						style={{
							transform: `rotate(${bearing - 90}deg)`,
							transformOrigin: 'center',
							transition: 'transform 0.3s ease',
						}}
					>
						<Plane />
					</div>
				</Marker>
			)}
			{!!foundedFlight?.from.coordinates?.length && (
				<Marker
					longitude={foundedFlight?.from.coordinates[1] || -122.4}
					latitude={foundedFlight?.from.coordinates[0] || 37.8}
				>
					<Pin size={22} className='fill-rose-500' />
				</Marker>
			)}
			{!!foundedFlight?.to.coordinates?.length && (
				<Marker
					longitude={foundedFlight?.to.coordinates[1] || -122.4}
					latitude={foundedFlight?.to.coordinates[0] || 37.8}
				>
					<Pin size={22} className='fill-orange-400' />
				</Marker>
			)}
		</Map>
	)
}

export default MapSkyTrack
