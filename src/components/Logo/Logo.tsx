import LOGOICON from '/public/icons/logo-white.svg'

const Logo = () => {
	return (
		<div>
			<img
				src={LOGOICON}
				alt='logo'
				width={'35px'}
				height={'35px'}
				className='cursor-pointer'
			/>
		</div>
	)
}

export default Logo
