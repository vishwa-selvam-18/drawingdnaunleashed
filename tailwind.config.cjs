/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white': '#fffff',
				'black': '#303030',
				'offwhite': '#f5f5f5',
				'grey': '#8b8b8b',
				'lightgrey': '#e7e7e7',
			  },
			
			fontFamily: {
				sans: ['poppins', 'sans-serif'],
			  },
		},
		  
		
	plugins: [],
}
}
