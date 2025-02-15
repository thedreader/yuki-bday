/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'deep-teal': '#03624c',      // Deep teal green
        'dark-teal': '#030f0f',      // Very dark teal
        'bright-green': '#00df82', 
      },
      boxShadow: {
        'neon': '0 0 20px #00df82, 0 0 40px #00df82, 0 0 60px #00df82',  // Custom neon glow
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  plugins: [],
};
