import type { IFlight } from '@/shared/types/flight.interface'

export interface IOptions {
	label: string
	id: number
}

export const createOptionsForSearch = (
	options: IFlight[],
	field: string
): IOptions[] => {
	return options.map((current, index) => {
		const value = field.split('.').reduce((obj: any, key) => {
			return obj?.[key]
		}, current)

		return {
			label: value !== undefined ? String(value) : '',
			id: index,
		}
	})
}
