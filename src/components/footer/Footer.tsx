import {
	BsFacebook,
	BsFillTelephoneFill,
	BsInstagram,
	BsWhatsapp
} from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';
import { vehicleImages } from 'services/constants';

const Footer = () => {
	return (
		<div className='bg-Secondary rounded-t-3xl' id='about'>
			<div className='container relative max-w-7xl mx-auto bg-footer-layer'>
				<div className='container max-w-7xl mx-auto mb-14'>
					<div className='w-full flex flex-col items-center justify-center'>
						<img
							className='w-[300px] mt-8'
							src={vehicleImages.logoW}
							alt='Logo'
						/>
						<div className='text-[#c2c2c2] pt-8 text-center ml-[50px] font-light'>
							<h1>
								Unlock Your Destiny with Our Affordable Rental
								Cars
							</h1>
						</div>
					</div>
				</div>
				<hr className='w-full border-gray-500 mb-14' />
				<div className='grid xl:grid-cols-4  md:grid-cols-2 grid-cols-1 mx-auto px-10 text-white text-2xl pb-14'>
					<div className='flex flex-col md:pb-8 pb-8'>
						<h1 className='oxanium-font uppercase md:pb-10 pb-6'>
							Explore
						</h1>
						<div className='text-base flex flex-col gap-6 text-[#c2c2c2]'>
							<a href='/'>Car Listing</a>
							<a href='/'>Gallery</a>
						</div>
					</div>
					<div className='flex flex-col md:pb-8 pb-8'>
						<h1 className='oxanium-font uppercase md:pb-10 pb-6'>
							Quick Links
						</h1>
						<div className='text-base flex flex-col gap-6 text-[#c2c2c2]'>
							<a href='/'>Privacy Policy</a>
							<a href='/'>Terms of Service</a>
						</div>
					</div>
					<div className='flex flex-col md:pb-8 pb-8'>
						<h1 className='oxanium-font uppercase md:pb-10 pb-6'>
							Quick Contact
						</h1>
						<div className='text-base flex flex-col gap-6 text-[#c2c2c2]'>
							<div className='flex items-center gap-3'>
								<BsFillTelephoneFill color='#fd8d14' />
								<h1>8888888888</h1>
							</div>
							<div className='flex items-center gap-3'>
								<IoMdMail color='#fd8d14' />
								<h1>destiny.destination2492@gmail.com</h1>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:pb-8 pb-8'>
						<h1 className='oxanium-font uppercase md:pb-10 pb-6'>
							Follow Us
						</h1>
						<div className='flex gap-7'>
							<BsFacebook />
							<BsWhatsapp />
							<BsInstagram />
						</div>
					</div>
				</div>
				<hr className='w-full border-gray-500 pb-7' />
				<div className='w-full flex justify-center pb-7 px-5 text-center text-[#c2c2c2]'>
					© 2023 - Destiny Destination. All rights reserved.
				</div>
			</div>
		</div>
	);
};

export default Footer;
