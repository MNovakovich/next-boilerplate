module.exports = {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Graphik', 'sans-serif'],
          },
        extend: {
            colors: {
              primary: '#ff6363',
              secondary:{
                100: '#E2E25',
                200:'#88884'
              },
            'accent-1': '#333',
            cyan: '#9cdbff',
            },
        },
    },
    variants: {},
    plugins: [],
  }