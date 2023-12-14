'use client';
import CustomButton from 'components/common/CustomButton';
import { vehicleImages } from 'services/constants';

const Navbar = () => {
	const handleOnClick = () => {
		console.log('clicked');
	};
	return (
		<>
			<nav className='w-screen flex justify-center fixed top-9 z-50 uppercase'>
				<div className='w-[95%] h-[100px] flex justify-between items-center md:px-7 px-3 md:gap-0 gap-12 bg-[#ffffffe7] rounded-2xl shadow-md'>
					<span className='w-[200px]'>
						<img src={vehicleImages.logoB} alt='Logo' />
					</span>
					<ul className='w-[60%] md:flex hidden justify-evenly tracking-[2px] text-base font-medium'>
						<li className='hover:text-Tertiary'>
							<a href='/'>Home</a>
						</li>
						<li className='hover:text-Tertiary'>
							<a href='#about'>About</a>
						</li>
						<li className='hover:text-Tertiary'>
							<a href='#galary'>Gallery</a>
						</li>
					</ul>
					<CustomButton
						onClick={handleOnClick}
						text='Contact Us'
						className='w-[200px] h-[50px] rounded-[10px] font-semibold tracking-[2px]'
					/>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
