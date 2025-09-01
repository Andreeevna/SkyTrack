import { useTheme } from '@/providers/theme/useTheme'
import ICONPLANE from '/public/icons/plane.svg'
import ICONPLANEDARK from '/public/icons/plane-dark.svg'

interface IPops {
	className?: string
}

const Plane = ({ className }: IPops) => {
	const { theme } = useTheme()

	return theme === 'dark' ? (
		<img src={ICONPLANE} alt='icon-plane' className={className} />
	) : (
		<img src={ICONPLANEDARK} alt='icon-plane-dark' className={className} />
	)
}

export default Plane
