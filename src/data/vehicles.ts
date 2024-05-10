import { vehicleImages } from 'services/constants';
import { TVehiclesData } from 'types/global-types';

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
	}
];
