/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    colors: {
      'green' : '#1D2820',
      'white' : '#ffffff',
      'greenL' : '#2D3F2F',
      'peri' : '#B2BBDA',
      'tan' : '#f5deb3',
    },
    extend: {
      fontFamily: {
        Gloock: ['Gloock', 'sans-serif' ],
        Indie: ['Indie Flower', 'sans-serif']
      }
    },
  },
  plugins: [],
}
