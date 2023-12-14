import SectionHeading from 'components/common/SectionHeading';
import { BiSolidCheckCircle } from 'react-icons/bi';
import { vehicleImages } from 'services/constants';

const BestService = () => {
	return (
		<>
			<div className='bg-Primary'>
				<div className='max-w-7xl mx-auto bg-Primary'>
					<div className='px-2 md:flex xl:flex-row-reverse md:flex-col md:items-center w-full py-10 gap-5'>
						<div className='md:w-1/2'>
							<SectionHeading
								title='the Best car rental Service in the city'
								className='pt-8 md:text-left'
							/>
							<h1 className='text-lg px-3 font-light text-gray-500 max-w-[650px] mt-5 '>
								Destiny Destination: Car Rental Services In Pune
								offer the economical, easiest, fastest, trusted
								and a reliable service of online booking a taxi,
								cab or a car rental of your choice and
								preferences in your city.
							</h1>
							<div className='flex flex-col pl-3 py-5 gap-2 text-base text-gray-600 tracking-wide font-light'>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Best Prices
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									24/7 Service
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Reliable
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Safe
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Comfortable
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Easy Booking
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Professional Drivers
								</h1>
								<h1 className='flex items-center gap-2'>
									<span>
										<BiSolidCheckCircle
											color='#fd8d14'
											size={18}
										/>
									</span>
									Well Maintained Cars
								</h1>
							</div>
						</div>
						<div className='md:flex md:w-1/2 md:gap-5'>
							<div className='flex flex-col md:w-1/2 md:justify-center md:gap-5'>
								<img
									className='rounded-3xl'
									src={vehicleImages.service1}
									alt=''
								/>
								<div className='w-full bg-Secondary rounded-3xl h-[100px] my-2 items-center flex flex-col justify-center'>
									<SectionHeading
										title='12'
										className='text-white'
									/>
									<h1 className='text-center text-gray-400'>
										Years of Experience
									</h1>
								</div>
							</div>
							<img
								className='rounded-3xl md:w-1/2'
								src={vehicleImages.service2}
								alt=''
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default BestService;
