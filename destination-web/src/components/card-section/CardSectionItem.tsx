import React from 'react';
import SectionHeading from 'components/common/SectionHeading';
import { IoIosPeople } from 'react-icons/io';
import { BsFuelPumpFill } from 'react-icons/bs';
import { FaCar } from 'react-icons/fa';

type CardSectionItemProps = {
	name: string;
	image: string;
	pricePerKm: number;
	seats: number;
	ac: boolean;
	fuel: string;
	features: string[];
};
const CardSectionItem = ({
	name,
	image,
	pricePerKm,
	seats,
	ac,
	fuel,
	features
}: CardSectionItemProps) => {
	return (
		<>
			<div className='w-[380px] h-[500px] bg-white border rounded-3xl hover:border-Tertiary transition-all duration-200'>
				<div className='h-1/2 rounded-t-3xl bg-blue-50 items-center flex'>
					<img className='' src={image} alt='' />
				</div>
				<div className='p-5 flex flex-col'>
					<SectionHeading
						title={name}
						className='md:text-[28px] font-semibold'
					/>
					<div className='flex items-end justify-between mt-7'>
						<ul className='flex flex-col gap-1 list-disc px-4 text-gray-600 text-sm'>
							{features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
						<span className='text-Tertiary font-bold oxanium-font uppercase text-3xl'>
							₹{pricePerKm}/
							<span className='text-lg text-Tertiary font-medium'>
								Per Km
							</span>
						</span>
					</div>
					<div className='border-t flex w-full justify-evenly mt-5 items-center pt-3 text-gray-600'>
						<div className='flex gap-2 items-center text-sm font-light hover:text-Tertiary transition-all duration-200'>
							<IoIosPeople size={30} />
							<h1>{seats} seater</h1>
						</div>
						<hr className='rotate-90 bg-black w-[20px]' />
						<div className='flex gap-2 items-center text-sm font-light hover:text-Tertiary transition-all duration-200'>
							<FaCar size={28} />
							<h1 className={`${ac ? '' : 'line-through'}`}>
								AC
							</h1>
						</div>
						<hr className='rotate-90 bg-black w-[20px]' />
						<div className='flex gap-2 items-center text-sm font-light hover:text-Tertiary transition-all duration-200'>
							<BsFuelPumpFill size={24} />
							<h1>{fuel}</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CardSectionItem;
