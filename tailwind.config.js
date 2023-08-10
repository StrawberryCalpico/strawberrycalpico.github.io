/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Comic Sans MS"],
			},
			colors: {
				"custom-green": "rgb(178, 238, 47)",
			},
		},
	},
	plugins: [],
};
