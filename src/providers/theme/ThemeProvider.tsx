import React, { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext, type ThemeType } from './theme.context'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<ThemeType>(() => {
		const savedTheme = localStorage.getItem('theme')

		return (savedTheme as ThemeType) || 'dark'
	})

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
			document.documentElement.classList.remove('light')
		} else {
			document.documentElement.classList.add('light')
			document.documentElement.classList.remove('dark')
		}

		localStorage.setItem('theme', theme)
	}, [theme])

	const toggleTheme = () =>
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider
