/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-green": "#B2AC00",
			},
			fontFamily: {
				montserrat: ["Montserrat"],
			},
			backgroundImage: {
				"hidden-password": "url('./src/img/ic_unvisiable.png)",
			},
		},
	},
	plugins: [],
}
