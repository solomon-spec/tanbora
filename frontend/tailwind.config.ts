const withMT = require("@material-tailwind/react/utils/withMT");

import type { Config } from 'tailwindcss'

const config =  withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // add poppins font
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // add custom colors
      colors: {
        primary: {
          50: '#57375D',
          100: '#AE445A',
          200: '#F39F5A',
          300: '#451952',
        },
      },
        
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
})
export default config
