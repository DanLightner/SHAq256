/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Use class strategy for dark mode
  theme: {
    extend: {
      colors: {
        // CTF-themed colors
        primary: {
          light: '#4f46e5', // Indigo for light mode
          dark: '#818cf8',  // Lighter indigo for dark mode
        },
        secondary: {
          light: '#10b981', // Emerald for light mode
          dark: '#34d399',  // Lighter emerald for dark mode
        },
        background: {
          light: '#ffffff',
          dark: '#121212',
        },
        surface: {
          light: '#f3f4f6',
          dark: '#1e1e1e',
        },
        // You can add more CTF-themed colors here
      },
    },
  },
  plugins: [],
}
