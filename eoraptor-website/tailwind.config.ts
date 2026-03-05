import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          50: '#e6fcf5',
          100: '#ccf9eb',
          200: '#99f3d7',
          300: '#66edc3',
          400: '#33e7af',
          500: '#00e19b',
          600: '#00b47c',
          700: '#00875d',
          800: '#005a3e',
          900: '#002d1f',
        },
        'dark': {
          900: '#0a0f1a',
          800: '#0f1729',
          700: '#1a2332',
          600: '#252f40',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0f1a 0%, #0f2a1f 50%, #0a0f1a 100%)',
      }
    },
  },
  plugins: [],
};

export default config;