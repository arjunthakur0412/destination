'use client';

import { vehicleImages } from 'services/constants';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'; // react-icons
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules'; // swiper modules
import 'swiper/css/pagination'; // swiper css
import 'swiper/css/navigation'; // swiper css
import 'swiper/css';

const ImageCarousel = () => {
	return (
		<>
			<div
				className='container max-w-7xl flex items-center justify-center h-[400px] mx-auto bg-Secondary xl:rounded-[50px]'
				id='galary'
			>
				<div className='relative w-full h-full flex items-center justify-center'>
					<Swiper
						slidesPerView={'auto'}
						pagination={{ clickable: true }}
						loop
						autoplay={{
							delay: 5000,
							disableOnInteraction: false
						}}
						navigation={{
							nextEl: '.nextEl',
							prevEl: '.prevEl'
						}}
						modules={[Autoplay, Pagination, Navigation]}
					>
						<div className='absolute inset-0 z-10 md:flex hidden justify-between w-full h-10 gap-10 text-5xl top-[180px]'>
							<div className='prevEl text-Tertiary'>
								<IoIosArrowBack />
							</div>
							<div className='nextEl text-Tertiary'>
								<IoIosArrowForward />
							</div>
						</div>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px]'
									src={vehicleImages.slider1}
									alt='bhimashankar-temple'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px]'
									src={vehicleImages.slider2}
									alt='Imagica'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px] '
									src={vehicleImages.slider3}
									alt='lavasa'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px]'
									src={vehicleImages.slider1}
									alt='bhimashankar-temple'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px]'
									src={vehicleImages.slider2}
									alt='Imagica'
								/>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='w-full h-[400px] flex items-center justify-center '>
								<img
									className='w-[453px]'
									src={vehicleImages.slider3}
									alt='lavasa'
								/>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	);
};

export default ImageCarousel;
