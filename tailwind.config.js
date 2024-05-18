/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--primary-bg-light)',
          dark: 'var(--primary-bg-dark)',
        },
        text: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
        },
        accent: {
          light: "var(--accent-light)",
          datk:"var(--accent-dark)",
        }
      },
    },
  },
  plugins: [],
};

