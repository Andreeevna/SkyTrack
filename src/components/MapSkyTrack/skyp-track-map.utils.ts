import type { LayerProps } from 'react-map-gl/maplibre'

export const solidStyle: LayerProps = {
	id: 'route-solid',
	type: 'line',
	layout: {
		'line-cap': 'round',
		'line-join': 'round',
	},
	paint: {
		'line-color': '#73433F',
		'line-width': 3,
		'line-opacity': 1,
	},
}

export const dashedStyle: LayerProps = {
	id: 'route-dashed',
	type: 'line',
	paint: {
		'line-color': '#fb923c',
		'line-width': 3,
		'line-dasharray': [5, 3],
		'line-opacity': 0.8,
	},
}
