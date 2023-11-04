/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    screens: {
      '2xl': {'max': '1440px'},
      'xl': {'max': '1200px'},
      'lg': {'max': '991px'},
      'md': {'max': '767px'},
      'sm': {'max': '620px'},
      'ss': {'max': '550px'},
      'xss': {'max': '425px'},
      'xxss': {'max': '325px'},

    }

  },
  plugins: [],
}