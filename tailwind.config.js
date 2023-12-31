/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './styles/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFE',
          neutral: '#FAEEE7',
          brown: '#594A4E',
          darkBrown: '#33272A',
          blue: '#3B82F6', // Change to your desired shade of blue
          lightBlue: '#93C5FD', // Change to your desired shade of light blue
          lime: '#C3F0CA',
          red: '#DD616B',
          linearGradient:
            'bg-gradient-to-tr from-brand-darkBrown to-brand-pink bg-clip-text text-transparent'
        }
      },
      fontFamily: {
        'work-sans': 'Work Sans, sans-serif'
      }
    }
  },
  plugins: []
};
