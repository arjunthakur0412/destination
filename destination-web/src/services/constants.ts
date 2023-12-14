const inferElementKeys = <T>(el: { [K in keyof T]: string }) => el;

export const vehicleImages = inferElementKeys({
	service1:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/best-service1.webp',
	service2:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/best-service2.webp',
	logoW: 'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/destinyLogoW.webp',
	logoB: 'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/destinyLogoB.webp',
	slider1:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/slider-image1.webp',
	slider2:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/slider-image2.webp',
	slider3:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/slider-image3.webp',
	ertiga: 'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/ertiga.webp',
	swift: 'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/swiftDzire.webp',
	innova: 'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/innova.webp',
	footerBglayer:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/footer-bg-layer.webp',
	bannerCar:
		'https://arjuncdn.s3.eu-north-1.amazonaws.com/images/sideCar.webp'
});
