const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				aurora: "aurora 60s linear infinite",
				spotlight: "spotlight 2s ease .75s 1 forwards",
		  	},
		  	keyframes: {
				aurora: {
			  		from: {
						backgroundPosition: "50% 50%, 50% 50%",
			  		},
			  		to: {
						backgroundPosition: "350% 50%, 350% 50%",
			  		},
				},
				spotlight: {
					"0%": {
					  opacity: 0,
					  transform: "translate(-72%, -62%) scale(0.5)",
					},
					"100%": {
					  opacity: 1,
					  transform: "translate(-50%,-40%) scale(1)",
					},
				},
		  	},
		},
	},
	plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
}