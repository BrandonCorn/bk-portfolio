/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionProperty: {
        'max-height': 'max-h'
      }
    },
    typography: require('./typography'),
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.paragraph-spacing': {
          '& > p:not(:last-child)': {
            marginBottom: 'var(--paragraph-spacing)',
          },
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
}
