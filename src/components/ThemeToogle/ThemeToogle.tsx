import LightModeIcon from '@mui/icons-material/LightMode'

import NightsStayIcon from '@mui/icons-material/NightsStay'
import { useTheme } from '@/providers/theme/useTheme'

const ThemeToogle = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className='rounded-full flex items-center justify-center transition ease-in-out'>
			<button
				onClick={e => {
					e.stopPropagation()
					toggleTheme()
				}}
			>
				{theme === 'dark' ? (
					<LightModeIcon
						sx={{
							width: 25,
							height: 25,
						}}
					/>
				) : (
					<NightsStayIcon
						sx={{
							width: 25,
							height: 25,
						}}
					/>
				)}
			</button>
		</div>
	)
}

export default ThemeToogle
