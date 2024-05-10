type HowItWorksItemProps = {
	icon: JSX.Element;
	title: string;
	description: string;
	index: string;
	accentColorTop: string;
	accentColorBottom: string;
};

const HowItWorksItem = ({
	icon,
	title,
	description,
	index,
	accentColorTop,
	accentColorBottom
}: HowItWorksItemProps) => {
	return (
		<>
			<div className='relative w-[300px] h-[250px] border rounded-2xl'>
				<div
					className={`absolute w-[100px] h-[100px] rounded-full ${accentColorTop} -top-[50px] left-[100px] flex items-center justify-center`}
				>
					{icon}
				</div>
				<div
					className={`absolute w-[50px] h-[50px] rounded-full ${accentColorBottom} -bottom-[25px] left-[125px] flex items-center justify-center text-white text-lg`}
				>
					{index}
				</div>
				<div className='w-full bg-gray-200 h-1/2 rounded-t-2xl flex items-center justify-center oxanium-font uppercase text-2xl'>
					<h1 className='mt-12'>{title}</h1>
				</div>
				<h1 className='text-center text-gray-500 mt-5'>
					{description}
				</h1>
			</div>
		</>
	);
};

export default HowItWorksItem;
