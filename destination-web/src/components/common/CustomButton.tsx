import React from 'react';

type TCustomButtonProps = {
	onClick: () => void;
	text: string;
	className?: string;
};

const CustomButton = ({ onClick, text, className }: TCustomButtonProps) => {
	return (
		<>
			<button
				className={`w-[120px] h-[40px] bg-Tertiary hover:bg-orange-700 rounded-[8px] text-white transition-all duration-200 uppercase ${className}`}
				onClick={onClick}
			>
				{text}
			</button>
		</>
	);
};

export default CustomButton;
