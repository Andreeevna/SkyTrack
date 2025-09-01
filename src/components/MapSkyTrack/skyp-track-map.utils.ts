import type { ThemeType } from '@/providers/theme/theme.context'
import type { LayerProps } from 'react-map-gl/maplibre'

export const solidStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-solid',
	type: 'line',
	layout: {
		'line-cap': 'round',
		'line-join': 'round',
	},
	paint: {
		'line-color': theme === 'dark' ? '#f43f5e' : '#f43f5e',
		'line-width': 1,
		'line-opacity': 1,
	},
})

export const dashedStyle = (theme: ThemeType): LayerProps => ({
	id: 'route-dashed',
	type: 'line',
	paint: {
		'line-color': theme === 'dark' ? '#fff' : '#111',
		'line-width': 1,
		'line-dasharray': [5, 3],
		'line-opacity': 0.8,
	},
})
