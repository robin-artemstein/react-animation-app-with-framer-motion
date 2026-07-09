import React from 'react';
import { motion } from 'framer-motion';

// Define the shape of properties this component expects to receive
interface HelloModalProps {
  onClose: () => void;
}

export const HelloModal: React.FC<HelloModalProps> = ({ onClose }) => {
  return (
    /* The backdrop overlay. Clicking here will trigger the onClose function */
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      {/* 
        The content block with 'back in down' and 'back out down' custom spring configurations.
        We use scale and y translations together to create that elastic 'back' effect.
      */}
      <motion.div
        className="bg-blue-900 text-white p-6 rounded-lg max-w-lg w-full shadow-2xl relative shadow-xl shadow-blue-900"
        /* Stop clicks inside this box from bubbling up and closing it by accident */
        onClick={(e) => e.stopPropagation()}
        /* Animation configuration state names */
        initial="hidden"
        animate="visible"
        exit="exit"
        /* The specific animation coordinates and spring effects */
        variants={{
          hidden: { y: -1000, scale: 0.7, opacity: 0 },
          visible: { 
            y: 0, 
            scale: 1, 
            opacity: 1, 
            transition: { type: 'spring', stiffness: 100, damping: 15 } 
          },
          exit: { 
            y: 1000, 
            scale: 0.7, 
            opacity: 0, 
            transition: { duration: 0.4 } 
          }
        }}
      >
        <p className="text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam massa vel arcu faucibus dapibus. Cras vel rhoncus sem. Sed vel pretium lacus, vel maximus elit. Proin feugiat rutrum ante, ut maximus purus sagittis quis. Duis ac orci ac ipsum ultricies aliquet. Ut tortor sem, efficitur sed tortor accumsan, scelerisque sagittis mauris. Donec vel sem ullamcorper, dictum sem ac, tempus augue. Pellentesque sed turpis id urna blandit fermentum et at lectus. Morbi tincidunt porttitor mi, convallis vestibulum tellus. Duis posuere urna ultrices, ullamcorper justo vitae, molestie ex. Fusce fermentum, mauris eu sagittis bibendum, diam ante suscipit justo, sed accumsan dolor libero et enim.
        </p>
        
        <div className="flex justify-center py-4">
          <button 
            className="bg-white text-blue-900 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};