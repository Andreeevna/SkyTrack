import { useState, type Dispatch, type SetStateAction } from 'react'
import { headerMenuData } from '@/shared/types/header.imterface'
import Logo from '../Logo/Logo'
import ThemeToogle from '../ThemeToogle/ThemeToogle'
import HeaderItem from './HeaderItem/HeaderItem'
import Favourites from '../Favourites/Favourites'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

import { Link, useLocation } from 'react-router-dom'
import { match } from 'path-to-regexp'
import clsx from 'clsx'
import Search from '../Search/Search'

interface IProps {
	setSearchQuery: Dispatch<SetStateAction<Record<string, string>>>
}

const filteredKey = [
	{ key: 'id', placeholder: 'Search flight' },
	{ key: 'airline.airCountry', placeholder: 'Search airline' },
]

const Header = ({ setSearchQuery }: IProps) => {
	const location = useLocation()
	const [isHeaderHidden, setIsHeaderHidden] = useState(false)

	const toggleHeader = () => {
		setIsHeaderHidden(!isHeaderHidden)
	}

	return (
		<>
			<div
				className={clsx(
					'bg-[var(--bg-primary)] text-[var(--text-primary)] pt-2.5 pb-1 pl-3 pr-3',
					'flex items-center justify-between',
					'transition-all duration-300 ease-in-out overflow-hidden',
					'smm:flex-col smm:gap-3.5 smm:pt-4',
					{
						'max-h-[500px] opacity-100': !isHeaderHidden,
						'max-h-0 opacity-0': isHeaderHidden,
					}
				)}
			>
				<div className='flex items-center gap-6 smm:flex-col smm:w-full'>
					<Logo />
					<ul className='flex items-center gap-3 smm:flex-col smm:w-full'>
						{headerMenuData.map(item => (
							<HeaderItem
								item={item}
								isActive={!!match(item.href)(location.pathname)}
								key={item.label}
							/>
						))}
					</ul>
				</div>

				<div className='pr-10 flex items-center gap-4 smm:flex-col smm:mt-4 smm:w-full smm:justify-center smm:pb-16'>
					{filteredKey.map(({ key, placeholder }) => {
						return (
							<Search
								key={key}
								setSearchQuery={setSearchQuery}
								placeholder={placeholder}
								name={key}
							/>
						)
					})}

					<div className='flex items-center gap-4'>
						<ThemeToogle />
						<Link
							to={'/favorites'}
							className='hover:text-[var(--color-orange)] transition-colors'
						>
							<Favourites />
						</Link>
					</div>
				</div>
			</div>

			<button
				onClick={toggleHeader}
				className={clsx(
					'fixed z-50 transition-all duration-300',
					'right-0 -translate-x-1/2 ',
					{
						'top-4': isHeaderHidden,
						'top-3': !isHeaderHidden,
						'smm:bottom-10': !isHeaderHidden,
					}
				)}
			>
				{isHeaderHidden ? (
					<KeyboardArrowDownIcon className='text-[var(--text-primary)]' />
				) : (
					<KeyboardArrowUpIcon className='text-[var(--text-primary)]' />
				)}
			</button>
		</>
	)
}

export default Header
