import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				Primary: '#f8faff',
				Secondary: '#0d274e',
				Tertiary: '#fd8d14'
			},
			backgroundImage: {
				'footer-layer': "url('/public/images/footer-bg-layer.png')"
			}
		},
		fontFamily: {
			primary: ['poppins', 'sans-serif']
		}
	},
	plugins: []
};
export default config;
