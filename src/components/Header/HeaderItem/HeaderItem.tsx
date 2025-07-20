import type { IHeaderMuniItem } from '@/shared/types/header.imterface'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface IProps {
	item: IHeaderMuniItem
	isActive: boolean
}

const HeaderItem = ({ item, isActive }: IProps) => {
	return (
		<Link
			to={item.href}
			className={clsx(
				'transition-opacity hover:opacity-100 ease-in',
				isActive ? 'opacity-100' : 'opacity-60'
			)}
		>
			<li>{item.label}</li>
		</Link>
	)
}

export default HeaderItem
