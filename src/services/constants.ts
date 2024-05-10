const inferElementKeys = <T>(el: { [K in keyof T]: string }) => el;

export const vehicleImages = inferElementKeys({
	service1: 'https://i.ibb.co/fNhQML8/best-service1.webp',
	service2: 'https://i.ibb.co/H73JGwd/best-service2.webp',
	logoW: 'https://i.ibb.co/Ks8dnyv/destiny-Logo-W.webp',
	logoB: 'https://i.ibb.co/QY87zfp/destiny-Logo-B.webp',
	slider1: 'https://i.ibb.co/ph7XdqJ/slider-image1.webp',
	slider2: 'https://i.ibb.co/d6wHZj1/slider-image2.webp',
	slider3: 'https://i.ibb.co/3rKjFpc/slider-image3.webp',
	ertiga: 'https://i.ibb.co/WxXNjwB/ertiga.webp',
	swift: 'https://i.ibb.co/QP2grRP/swift-Dzire.webp',
	innova: 'https://i.ibb.co/xGB3dc1/innova.webp',
	footerBglayer: 'https://i.ibb.co/p3M7fxB/footer-bg-layer.webp',
	bannerCar: 'https://i.ibb.co/4Fcfczs/sideCar.webp'
});

export const merchImages = inferElementKeys({
	plainWhite: 'https://i.ibb.co/C0KKXv6/plain-white.jpg',
	plainBlack: 'https://i.ibb.co/gTLKp3V/plain-black.webp',
	graphicPrint: 'https://i.ibb.co/HhgDqLc/graphic-printed.webp',
	stripedPolo: 'https://i.ibb.co/Gks9nHB/stripped-polo.webp',
	vNeckTee: 'https://i.ibb.co/YDTVygr/v-neck-casual.png'
});

export const partnerImages = inferElementKeys({
	uber: 'https://i.ibb.co/R0J1s77/Uber.webp',
	airbnb: 'https://i.ibb.co/3zVrjMF/airbnb-seeklogo-com.webp',
	expedia: 'https://i.ibb.co/m8BH6dr/Expedia-New-2023.webp',
	agoda: 'https://i.ibb.co/Xzc583d/agoda-seeklogo-com.webp'
});
