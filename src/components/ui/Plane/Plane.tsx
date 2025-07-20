import ICONPLANE from '/public/icons/plane.svg'

interface IPops {
	className: string
}

const Plane = ({ className }: IPops) => {
	return <img src={ICONPLANE} alt='icon-plane' className={className} />
}

export default Plane
