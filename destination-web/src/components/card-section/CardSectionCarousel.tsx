'use client';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import 'swiper/css'; // swiper css
import 'swiper/css/navigation'; // swiper css
import 'swiper/css/pagination'; // swiper css
import { Autoplay, Navigation } from 'swiper/modules'; // swiper modules
import { Swiper, SwiperSlide } from 'swiper/react'; // swiper
import { VehiclesData } from '../../data/vehicles';
import CardSectionItem from './CardSectionItem';

const slidesPerView = 1;
const CardSectionCarousel = () => {
	return (
		<div className='container max-w-7xl mx-auto py-10 justify-evenly xl:hidden flex'>
			<Swiper
				slidesPerView={slidesPerView}
				initialSlide={1}
				loop
				autoplay={{
					delay: 5000,
					disableOnInteraction: false
				}}
				navigation={{
					nextEl: '.nextEl',
					prevEl: '.prevEl'
				}}
				modules={[Autoplay, Navigation]}
			>
				<div className='absolute inset-0 z-10 flex justify-between w-full h-10 gap-10 text-5xl top-[230px]'>
					<div className='prevEl text-Tertiary'>
						<IoIosArrowBack />
					</div>
					<div className='nextEl text-Tertiary'>
						<IoIosArrowForward />
					</div>
				</div>
				{VehiclesData.map((vehicle) => (
					<SwiperSlide key={vehicle.name}>
						<div className='w-full flex justify-center'>
							<CardSectionItem
								name={vehicle.name}
								image={vehicle.image}
								pricePerKm={vehicle.pricePerKm}
								seats={vehicle.seats}
								ac={vehicle.ac}
								fuel={vehicle.fuel}
								features={vehicle.features}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CardSectionCarousel;
