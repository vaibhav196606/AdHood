/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dcff',
          300: '#7ec2ff',
          400: '#4391fc',
          500: '#4391fc',
          600: '#3a7dd9',
          700: '#3169b6',
          800: '#285593',
          900: '#1f4170',
        },
        accent: {
          50: '#f0f7ff',
          100: '#e0efff',
          200: '#b9dcff',
          300: '#7ec2ff',
          400: '#4391fc',
          500: '#4391fc',
          600: '#3a7dd9',
          700: '#3169b6',
          800: '#285593',
          900: '#1f4170',
        }
      }
    },
  },
  plugins: [],
}

