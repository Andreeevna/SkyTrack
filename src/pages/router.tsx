import { createBrowserRouter } from 'react-router-dom'
import Home from './home/Home'
import Layout from '../components/layout/Layout'
import Favorites from './favorites/Favorites'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/favorites',
				element: <Favorites />,
			},
		],
	},
])
