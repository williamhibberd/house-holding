/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			serif: ["'canela'", ...defaultTheme.fontFamily.sans],
			sans: ["'maax'", ...defaultTheme.fontFamily.sans],
			mono: ["'maax mono'", ...defaultTheme.fontFamily.mono],
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: "#141617",
			white: "#F3F8FA",
		},
		extend: {
			maxWidth: {
				"2/3": "66.666667%",
			},
		},
	},
	plugins: [],
};
