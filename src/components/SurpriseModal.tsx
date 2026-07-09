import React from 'react';
import { motion } from 'framer-motion';

interface SurpriseModalProps {
  onClose: () => void;
}

export const SurpriseModal: React.FC<SurpriseModalProps> = ({ onClose }) => {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={onClose}
      /* We add perspective style here to make the 3D flipping rotations look realistic */
      style={{ perspective: 1200 }}
    >
      {/*
        Framer motion handles 3D animations nicely. 
        rotateX flips it like a trapdoor (X-axis), while rotateY spins it like a coin (Y-axis).
      */}
      <motion.div
        className="bg-orange-900 text-white p-6 rounded-lg max-w-lg w-full shadow-2xl relative shadow-xl shadow-orange-900"
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { rotateX: -90, opacity: 0 },
          visible: { 
            rotateX: 0, 
            opacity: 1, 
            transition: { duration: 0.5, ease: "easeOut" } 
          },
          exit: { 
            rotateY: 90, 
            opacity: 0, 
            transition: { duration: 0.5, ease: "easeIn" } 
          }
        }}
      >
        <p className="text-sm leading-relaxed mb-6">
          Integer ornare in arcu non scelerisque. Praesent mollis, libero quis congue bibendum, massa mi convallis arcu, quis feugiat justo risus et leo. Donec eu quam vulputate, consectetur ligula a, luctus nibh. Curabitur sit amet augue et felis tincidunt commodo nec nec lectus. Phasellus volutpat libero at hendrerit convallis. In nibh massa, egestas sit amet magna in, facilisis eleifend metus. Nam maximus augue nibh, a dapibus ante sollicitudin sed. Nullam ante sem, placerat non est eget, vulputate ultricies tellus. Maecenas vitae tristique justo. Curabitur eu sapien viverra, volutpat nunc a, efficitur augue. Praesent scelerisque odio lorem. In hac habitasse platea dictumst.
        </p>
        
        <div className="flex justify-center py-4">
          <button 
            className="bg-white text-orange-900 px-4 py-2 rounded font-semibold hover:bg-orange-100 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};