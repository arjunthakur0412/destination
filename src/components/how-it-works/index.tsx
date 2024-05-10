import HowItWorksItem from './HowItWorksItem';
import { FaCar, FaRegSmile } from 'react-icons/fa';
import { CgNotes } from 'react-icons/cg';
import { MdOutlinePayments } from 'react-icons/md';

const bookingSteps = [
	{
		icon: <CgNotes size={48} color='white' />,
		title: 'Select Date',
		description: 'Decide your journey date',
		index: '01',
		accentColorTop: 'bg-Secondary',
		accentColorBottom: 'bg-Tertiary'
	},
	{
		icon: <FaCar size={48} color='white' />,
		title: 'Book Your Ride',
		description: 'Call us and book you ride',
		index: '02',
		accentColorTop: 'bg-Tertiary',
		accentColorBottom: 'bg-Secondary'
	},
	{
		icon: <MdOutlinePayments size={48} color='white' />,
		title: 'Make Payment',
		description: 'Pay online or cash',
		index: '03',
		accentColorTop: 'bg-Secondary',
		accentColorBottom: 'bg-Tertiary'
	},
	{
		icon: <FaRegSmile size={48} color='white' />,
		title: 'Enjoy the Car',
		description: 'Congartulations! Enjoy your ride',
		index: '04',
		accentColorTop: 'bg-Tertiary',
		accentColorBottom: 'bg-Secondary'
	}
];

const HowItWorks = () => {
	return (
		<>
			<div className='container max-w-7xl mx-auto flex flex-col items-center py-28'>
				<h1 className='text-5xl oxanium-font uppercase text-center'>
					How It Works
				</h1>
				<h1 className='text-lg text-center text-gray-500 max-w-[650px] mt-5'>
					Unlock your ride in just 4 easy steps – follow the simple
					instructions below to book your journey now!
				</h1>
				<div className='pt-28'>
					<div className='grid xl:grid-cols-4 grid-cols-1 xl:gap-10 gap-36'>
						{bookingSteps.map((step) => (
							<HowItWorksItem
								key={step.index}
								icon={step.icon}
								title={step.title}
								description={step.description}
								index={step.index}
								accentColorTop={step.accentColorTop}
								accentColorBottom={step.accentColorBottom}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default HowItWorks;
