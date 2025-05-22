// src/app/(chat)/page.tsx
import { FiMessageSquare } from 'react-icons/fi'; // Or BsChatDots

// Placeholder for Periskope logo/icon to be used in the main area
const PeriskopeLargeIcon = () => (
    <div className="w-24 h-24 mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
        <FiMessageSquare size={48} />
    </div>
);


export default function SelectChatPage() {
  return (
    <main className="flex-1 bg-slate-100 flex flex-col items-center justify-center p-6 sm:p-10 text-center relative">
      {/* You can use an actual image or a more styled SVG icon */}
      {/* <img src="/periskope_logo_main_chat.png" alt="Periskope Chat" className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 opacity-80" /> */}
      <PeriskopeLargeIcon />

      <h1 className="text-2xl md:text-3xl font-semibold text-slate-700">
        Welcome to Periskope Chat
      </h1>
      <p className="mt-3 text-md md:text-lg text-slate-500 max-w-md">
        Select a conversation from the list on the left to start messaging, or create a new chat.
      </p>
      <p className="mt-2 text-sm text-slate-400">
        Stay connected and collaborate effectively.
      </p>

      {/* Optional: Button to start a new chat */}
      {/* <button className="mt-8 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-150">
        Start New Chat
      </button> */}

      <footer className="absolute bottom-5 right-7 text-xs text-slate-500 flex items-center opacity-70">
         {/* Placeholder for a small Periskope icon if desired */}
         {/* <img src="/periskope_icon_footer.png" alt="Periskope" className="w-4 h-4 mr-1.5"/> */}
         Powered by <span className="font-semibold ml-1">Periskope</span>
      </footer>
    </main>
  );
}
