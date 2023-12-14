'use client';

import CustomButton from 'components/common/CustomButton';
import { vehicleImages } from 'services/constants';

const Banner = () => {
	const handleClick = () => {
		console.log('click');
	};
	return (
		<>
			<div className='bg-Primary h-screen'>
				<div className='flex container max-w-[1500px] h-full mx-auto justify-start xl:pt-0 pt-44 relative flex-col'>
					<div className='xl:w-[55%] xl:h-full xl:items-start xl:justify-center justify-center items-center flex flex-col z-[11] md:pl-[30px] pl-0'>
						<h1 className='xl:text-[95px] md:text-[65px] text-[45px] xl:leading-[6.5rem] md:leading-[5rem] leading-[3.5rem] text-black font-semibold oxanium-font uppercase xl:text-left text-center'>
							Unlock Your
						</h1>
						<div className='flex xl:flex-row flex-col'>
							<h1 className='xl:text-[95px] md:text-[65px] text-[45px] xl:leading-[6.5rem] md:leading-[5rem] leading-[3.5rem] text-black font-semibold oxanium-font uppercase  xl:text-left text-center'>
								Destiny
							</h1>
							<span className='xl:w-[180px] text-lg text-gray-500 flex justify-center items-center xl:mb-4 xl:ml-4 text-center'>
								with Our Affordable Rental Cars
							</span>
						</div>
						<hr className='border-gray-400 w-[80%]' />
						<CustomButton
							onClick={handleClick}
							text='Find a car'
							className='mt-7 w-[180px] h-[50px] font-bold tracking-[2px]'
						/>
						<h1 className='xl:flex md:hidden flex flex-col oxanium-font uppercase xl:mt-10 mt-7 text-center xl:text-left xl:text-3xl text-xl text-gray-500'>
							starting from just
							<span className='text-Tertiary font-bold'>
								₹12/
								<span className='xl:text-xl text-base text-Tertiary font-medium'>
									Per Km
								</span>
							</span>
						</h1>
					</div>
					<div className='absolute xl:flex xl:justify-end z-[10] bottom-16 w-full xl:pl-[500px]'>
						<img src={vehicleImages.bannerCar} alt='car_Image' />
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
