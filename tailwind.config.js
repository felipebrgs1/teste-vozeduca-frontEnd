/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    ({ addBase }) => {
      addBase({
        html: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          'font-smooth': 'always',
        },
        body: {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          'font-smooth': 'always',
        },
      });
    },
  ],
};
