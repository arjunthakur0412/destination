import { vehicleImages } from 'services/constants';
type TVehiclesData = {
	id: number;
	name: string;
	image: string;
	pricePerKm: number;
	seats: number;
	ac: boolean;
	fuel: string;
	features: string[];
}[];

export const VehiclesData: TVehiclesData = [
	{
		id: 1,
		name: 'Innova crysta',
		image: vehicleImages.innova,
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		id: 2,
		name: 'Ertiga',
		image: vehicleImages.ertiga,
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		id: 3,
		name: 'Swift Dzire',
		image: vehicleImages.swift,
		pricePerKm: 10,
		seats: 4,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		id: 4,
		name: 'Innova crysta',
		image: vehicleImages.innova,
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		id: 5,
		name: 'Ertiga',
		image: vehicleImages.ertiga,
		pricePerKm: 12,
		seats: 6,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	},
	{
		id: 6,
		name: 'Swift Dzire',
		image: vehicleImages.swift,
		pricePerKm: 10,
		seats: 4,
		ac: true,
		fuel: 'Petrol',
		features: ['Outstation', 'Local Trip', 'Oneway', 'Airport']
	}
];
