/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    extend: {

      animation: {
        accordion: "accordion 2s ease-in forwards"
      },

      keyframes: {
        accordion: {
          "0%": { height: 0%; }
          "100%" { height: 32px; }
        }
      }
    }
    
	},
	plugins: [],
}
