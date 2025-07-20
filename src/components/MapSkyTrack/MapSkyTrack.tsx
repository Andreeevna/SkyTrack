import Map, { Layer, Source, type LayerProps } from 'react-map-gl/maplibre'
import type { FeatureCollection } from 'geojson'
import 'maplibre-gl/dist/maplibre-gl.css'

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
	return (
		// <div style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}>
		<Map
			initialViewState={{
				longitude: -122.45,
				latitude: 37.78,
				zoom: 10,
			}}
			mapStyle='https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json'
			style={{ width: '100%', height: '100%', pointerEvents: 'auto' }}
		>
			<Source id='my-data' type='geojson' data={geojson}>
				<Layer {...layerStyle} />
			</Source>
		</Map>
		// </div>
	)
}

export default MapSkyTrack
