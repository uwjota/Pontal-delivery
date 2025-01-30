/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primeiracor: '#ffb225', // cor personalizada
        segundacor: '#1f1f1f', // cor personalizada
        terceiracor: '#ffffff', // cor personalizada
        vermelho: '#ff0000', // cor personalizada
        verde: '#04b300', // cor personalizada
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        "home": "url('/assets/#')",
        "categoriasbg": "url('/assets/#')"
      }
    },
  },
  plugins: [],
}

