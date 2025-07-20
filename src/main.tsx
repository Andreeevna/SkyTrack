import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/router.tsx'
import ThemeProvider from './providers/theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
	<ThemeProvider>
		<RouterProvider router={router} />
	</ThemeProvider>
)
