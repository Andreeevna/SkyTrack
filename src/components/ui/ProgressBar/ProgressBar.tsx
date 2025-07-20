import Plane from '../Plane/Plane'

interface IProps {
	progress: number
}

const ProgressBar = ({ progress }: IProps) => {
	return (
		<div className='h-0.5 w-full rounded-full'>
			<div
				className='relative w-full h-full  bg-gradient-to-r from-rose-500 to-orange-400 rounded-full'
				style={{ width: `${progress}%` }}
			>
				<Plane className='absolute top-1/2 -right-2.5 -translate-y-1/2' />
			</div>
		</div>
	)
}

export default ProgressBar
