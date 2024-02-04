const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				libre: ["Roboto", ...defaultTheme.fontFamily.sans]
			},
			colors: {
				'primary': '#3F5B3C',
				'secondary': '#4EA595',
				'dark': '#253636'
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
