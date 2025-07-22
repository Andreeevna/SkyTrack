import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useState } from 'react'

const Layout = () => {
	const [searchQuery, setSearchQuery] = useState<Record<string, string>>({
		['id']: '',
		['airline.airCountry']: '',
	})

	console.log(searchQuery)
	return (
		<div>
			<Header setSearchQuery={setSearchQuery} />
			<div className='relative pt-2'>
				<Outlet context={{ searchQuery }} />
			</div>
		</div>
	)
}

export default Layout
