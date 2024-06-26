/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        work: [
          '"Work Sans"'
        ]
      }, 
      screens: {
         'desktop': '1360px',
      },
      gridTemplateColumns: {
        'tariff-section': 'minmax(auto, 300px) repeat(3, minmax(230px, auto))',
      },
      colors: {
        batao: {
          bg: '#F9FCFF',
          primary: '#353565',
          text: '#6C757D',
          card: '#FFFFFF',
          shadow: '#90B8E840',
          green: '#0E560E',
          disabled: '#CECECE',
          'sub-text': '#474747',
          label: '#808080',
          accent: '#ED1A53',
        },
      }
    },
  },
  plugins: [],
}

