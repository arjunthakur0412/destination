import SectionHeading from 'components/common/SectionHeading';
import Image from 'next/image';
import React from 'react';
import { partnerImages } from 'services/constants';

const Partners = () => {
	return (
		<div className='container max-w-7xl mx-auto flex flex-col items-center pt-28 pb-5'>
			<SectionHeading title='Our Partners' />

			<div className='grid xl:grid-cols-4 grid-cols-2 xl:gap-32 gap-10'>
				<div className='flex justify-center items-center'>
					<Image
						src={partnerImages.uber}
						alt='1'
						width={200}
						height={200}
					/>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src={partnerImages.airbnb}
						alt='1'
						width={200}
						height={200}
					/>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src={partnerImages.expedia}
						alt='1'
						width={200}
						height={200}
					/>
				</div>
				<div className='flex justify-center items-center'>
					<Image
						src={partnerImages.agoda}
						alt='1'
						width={200}
						height={200}
					/>
				</div>
			</div>
		</div>
	);
};

export default Partners;
