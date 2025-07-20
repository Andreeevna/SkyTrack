const FlightScheduler = () => {
	return (
		<div className='mt-1 flex items-center gap-1'>
			<div className='flex-1/2 flex flex-col gap-1'>
				<div className='bg-[#1C1C1C] p-3 flex justify-between items-center'>
					<span className='text-neutral-400'>Scheduled</span>
					<span>08:15</span>
				</div>
				<div className='bg-[#1C1C1C] p-3 flex justify-between items-center rounded-bl-xl'>
					<span className='text-neutral-400'>Actual</span>
					<span>08:24</span>
				</div>
			</div>
			<div className='flex-1/2 flex flex-col gap-1'>
				<div className='bg-[#1C1C1C] p-3 flex justify-between items-center'>
					<span className='text-neutral-400'>Scheduled</span>
					<span>13:25</span>
				</div>
				<div className='bg-[#1C1C1C] p-3 flex justify-between items-center rounded-br-xl'>
					<span className='text-neutral-400'>Estimated</span>
					<span>13:23</span>
				</div>
			</div>
		</div>
	)
}

export default FlightScheduler
