// tailwind.config.js
/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',       // ✅ App Router pages
    './components/**/*.{js,ts,jsx,tsx}',// ✅ Your components
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        'whatsapp-dark-sidebar': '#111B21', // Example, adjust as needed
        'whatsapp-chat-header': '#F0F2F5',
        'whatsapp-chat-bg': '#E5DDD5', // Or a plain light gray as per screenshot
        'whatsapp-outgoing-bubble': '#DCF8C6',
        'whatsapp-incoming-bubble': '#FFFFFF',
        'whatsapp-green': '#075E54', // Dark green
        'whatsapp-teal-green': '#128C7E', // Lighter teal/green
        'whatsapp-light-green': '#25D366', // Accent green
        'whatsapp-input-bg': '#F0F2F5',
      },
      backgroundImage: {
        // If you want the WhatsApp background pattern:
        // 'whatsapp-pattern': "url('/whatsapp-bg.png')",
      },
    },
  },
  plugins: [],
};
export default config;