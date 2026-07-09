import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { HelloModal } from './components/HelloModal';
import { SurpriseModal } from './components/SurpriseModal';
import { GoodbyeModal } from './components/GoodbyeModal';

export default function App() {
  // Tracking whether each block is currently showing or hidden
  const [showHello, setShowHello] = useState<boolean>(false);
  const [showSurprise, setShowSurprise] = useState<boolean>(false);
  const [showGoodbye, setShowGoodbye] = useState<boolean>(false);

  // Requirement 9: Custom helper function using clean IF/ELSE statements for conditional rendering instead of ternary operators
  const renderHelloBlock = () => {
    if (showHello) {
      return <HelloModal handleClose={() => setShowHello(false)} />;
    } else {
      return null;
    }
  };

  const renderSurpriseBlock = () => {
    if (showSurprise) {
      return <SurpriseModal handleClose={() => setShowSurprise(false)} />;
    } else {
      return null;
    }
  };

  const renderGoodbyeBlock = () => {
    if (showGoodbye) {
      return <GoodbyeModal handleClose={() => setShowGoodbye(false)} />;
    } else {
      return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      {/* Application Main Title */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">
        Welcome to the React testing app
      </h1>

      {/* Requirement 3: Three buttons arranged inside a 3-column grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full px-4">
        <button
          onClick={() => setShowHello(true)}
          className="bg-blue-700 hover:bg-blue-600 font-semibold py-4 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-center"
        >
          Say hello
        </button>

        <button
          onClick={() => setShowSurprise(true)}
          className="bg-orange-700 hover:bg-orange-600 font-semibold py-4 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-center"
        >
          Get surprised
        </button>

        <button
          onClick={() => setShowGoodbye(true)}
          className="bg-violet-700 hover:bg-violet-600 font-semibold py-4 px-6 rounded-lg shadow-lg transform active:scale-95 transition-all text-center"
        >
          Kiss bye
        </button>
      </div>

      {/* 
        AnimatePresence notices when components inside it are unmounted, 
        allowing them to perform exit animation transitions before disappearing entirely.
      */}
      <AnimatePresence>{renderHelloBlock()}</AnimatePresence>
      <AnimatePresence>{renderSurpriseBlock()}</AnimatePresence>
      <AnimatePresence>{renderGoodbyeBlock()}</AnimatePresence>
    </div>
  );
}