/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {},
			screens: {
				xs: { max: "400px" },
				sm: { max: "640px" },
				md: { max: "766px" },
				lg: { max: "1024px" },
				xl: { max: "1380px" },
			},
			fontFamily: {
				text: `"Roboto", sans-serif`,
				heading: `"Poppins", sans-serif`,
				logo: `"Montserrat", sans-serif`,
			},
		},
	},
	plugins: [],
};
