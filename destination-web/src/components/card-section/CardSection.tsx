import { VehiclesData } from 'data/vehicles';
import CardSectionItem from './CardSectionItem';

const CardSection = () => {
	return (
		<>
			<div className='container max-w-7xl mx-auto py-10 justify-evenly xl:flex hidden'>
				<div className='grid grid-cols-3 gap-10'>
					{VehiclesData.map((vehicle) => (
						<CardSectionItem
							key={vehicle.id}
							name={vehicle.name}
							image={vehicle.image}
							pricePerKm={vehicle.pricePerKm}
							seats={vehicle.seats}
							ac={vehicle.ac}
							fuel={vehicle.fuel}
							features={vehicle.features}
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default CardSection;
