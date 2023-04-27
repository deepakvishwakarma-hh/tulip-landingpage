/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {

      colors: {
        blue: '#4b6cc1',
        gray: 'gray'
      },

      fontSize: {

        'sm': ['14px', {
          lineHeight: '20px',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],

        'md': ['16px', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],

        'lg': ['20px', {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        }],

        'xl': ['150px', {
          lineHeight: '200px',
          letterSpacing: '0.01em',
          fontWeight: '700',
        }]
      },


      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
