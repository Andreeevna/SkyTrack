import { Autocomplete, TextField } from '@mui/material'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { createOptionsForSearch, type IOptions } from './search.utils'
import { dataFlight } from '@/shared/mock'

interface IProps {
	setSearchQuery: Dispatch<SetStateAction<Record<string, string>>>
	placeholder: string
	name: string
}

interface IList {
	list: IOptions[]
}

interface IOptionsFilters {
	[key: string]: IList
}

const Search = ({ setSearchQuery, placeholder, name }: IProps) => {
	const [localValue, setLocalValue] = useState('')

	const handleSearch = (value: string) => {
		setLocalValue(value)
		setSearchQuery(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const optionsForFilters: IOptionsFilters = {
		['id']: {
			list: createOptionsForSearch(dataFlight, 'id'),
		},
		['airline.airCountry']: {
			list: createOptionsForSearch(dataFlight, 'airline.airCountry'),
		},
	}

	return (
		<div>
			<Autocomplete
				key={name}
				disablePortal
				inputValue={localValue}
				options={optionsForFilters[name]?.list || []}
				onInputChange={(_, value: string) => handleSearch(value)}
				sx={autocompleteStyles}
				renderInput={params => (
					<TextField {...params} placeholder={placeholder} />
				)}
			/>
		</div>
	)
}

export default Search

const autocompleteStyles = {
	width: 350,
	'@media (max-width: 992px)': {
		width: 250,
	},
	'@media (max-width: 768px)': {
		width: 200,
	},
	'@media (max-width: 661px)': {
		width: 300,
	},
	'& .MuiAutocomplete-inputRoot': {
		color: 'var(--text-primary)',
		height: '35px',
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'var(--text-primary)',
			borderRadius: '10px',
		},
		'& .MuiInputBase-input::placeholder': {
			color: 'var(--text-primary)',
			opacity: 0.6,
		},
	},
	'& .MuiAutocomplete-endAdornment': {
		'& .MuiButtonBase-root': {
			'& .MuiSvgIcon-root': {
				fill: 'var(--text-primary)',
			},
		},
	},
	'& + .MuiPopper-root': {
		'& .MuiAutocomplete-paper': {
			color: 'var(--text-primary)',
			backgroundColor: 'var(--bg-primary)',
		},
		'& .MuiAutocomplete-listbox': {
			'& .MuiAutocomplete-option': {
				'&:hover': {
					color: 'var(--color-orange)',
				},
			},
		},
	},
}
