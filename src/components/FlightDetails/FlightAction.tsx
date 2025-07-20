import ICONROUTE from '/public//icons/Route.svg'
import ICONFOLLOW from '/public//icons/Follow.svg'
import ICONSHARE from '/public//icons/Share.svg'
import ICONMORE from '/public//icons/More.svg'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

const FlightAction = () => {
	const actionsLink = [
		{
			name: 'Route',
			icon: ICONROUTE,
		},
		{
			name: 'Follow',
			icon: ICONFOLLOW,
		},
		{
			name: 'Share',
			icon: ICONSHARE,
		},
		{
			name: 'More',
			icon: ICONMORE,
		},
	]

	return (
		<ul className='flex items-center justify-between gap-1 mt-1'>
			{actionsLink.map((action, index) => {
				return (
					<Link
						to={'/'}
						key={action.name}
						className={clsx(
							'bg-[#1c1c1c] flex-1 pt-2 pb-2',
							index === 0 && 'rounded-bl-xl rounded-tl-xl',
							index === actionsLink.length - 1 && 'rounded-tr-xl rounded-br-xl'
						)}
					>
						<li className='flex flex-col items-center gap-1'>
							<img src={action.icon} alt={action.name} className='w-7 h-7' />
							<span>{action.name}</span>
						</li>
					</Link>
				)
			})}
		</ul>
	)
}

export default FlightAction
