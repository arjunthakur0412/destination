type SectionHeadingProps = {
	title: string;
	className?: string;
};

const SectionHeading = ({ title, className }: SectionHeadingProps) => {
	return (
		<>
			<h1
				className={`md:text-5xl text-4xl oxanium-font uppercase text-center ${className}`}
			>
				{title}
			</h1>
		</>
	);
};

export default SectionHeading;
