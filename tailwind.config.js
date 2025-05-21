// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // ✅ App Router pages
    './components/**/*.{js,ts,jsx,tsx}',// ✅ Your components
    './src/**/*.{js,ts,jsx,tsx}',       // ✅ If your files live in src/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
