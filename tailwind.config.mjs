/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        xgreen: {
          100: '#90ba92',
          800: '#493e2b',
          900: '#25221a',
        },
        xyellow: {
          300: "#ecb338"
        },
        xbrown: {
          300: "#3f3221",
          400: "#2d2418"
        }
      },
    },
  },
  plugins: [],
};
