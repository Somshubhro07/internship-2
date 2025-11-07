module.exports = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#f8fbf8',
            100: '#eef7ee',
            200: '#d7efda',
            300: '#bfe5be',
            400: '#97d599',
            500: '#6bbf6b', // primary (green-ish)
            600: '#58a85a',
            700: '#3f7b3f',
            800: '#335f33',
            900: '#244224'
          },
          accent: {
            50: '#fff8f1',
            100: '#fff1e0',
            200: '#ffe0be',
            300: '#ffd09a',
            400: '#ffc066',
            500: '#ff9f2d', // warm amber accent
            600: '#e68920',
          },
          charcoal: {
            50: '#f6f7f8',
            100: '#eff1f2',
            500: '#1f2326',
            700: '#131416'
          }
        }
      }
    },
    plugins: []
  };
  