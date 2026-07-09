import React from 'react';
import { motion } from 'framer-motion';

interface GoodbyeModalProps {
  handleClose: () => void;
}

export const GoodbyeModal: React.FC<GoodbyeModalProps> = ({ handleClose }) => {
  return (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4 z-50"
      onClick={handleClose}
    >
      {/* 
        This block rotates clockwise when coming into view (e.g., from -360 degrees to 0)
        and spins backwards counter-clockwise when leaving view.
      */}
      <motion.div
        className="bg-violet-900 text-white p-6 rounded-lg max-w-lg w-full shadow-2xl relative shadow-xl shadow-violet-900"
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          hidden: { rotate: -360, scale: 0, opacity: 0 },
          visible: { 
            rotate: 0, 
            scale: 1, 
            opacity: 1, 
            transition: { duration: 0.5, ease: "backOut" } 
          },
          exit: { 
            rotate: -360, 
            scale: 0, 
            opacity: 0, 
            transition: { duration: 0.5, ease: "easeInOut" } 
          }
        }}
      >
        <p className="text-sm leading-relaxed mb-6">
          Nunc viverra mollis dui, finibus commodo nisi sagittis a. Pellentesque volutpat vel turpis vitae vulputate. In hac habitasse platea dictumst. In convallis, ex eu fermentum iaculis, orci erat tincidunt est, sed pulvinar lectus metus vel diam. Curabitur at ante ac diam tempor varius ut pharetra leo. Mauris et leo at sem consectetur ullamcorper. Nullam maximus viverra tincidunt. Fusce sit amet pretium sapien. Mauris at arcu et massa iaculis hendrerit quis nec nisi. Vivamus quis est non nibh dignissim fringilla eu vel tellus. Vestibulum sollicitudin lorem sapien, nec semper sem sagittis id. Quisque fermentum lectus ac nibh eleifend gravida. Nam dictum eros urna, iaculis pellentesque nisl fringilla eget. Sed ultrices, mauris sit amet porttitor ornare, diam augue ornare quam, vitae aliquam dui nulla in velit. Curabitur mollis enim augue, non fermentum risus malesuada id.
        </p>
        
        <div className="flex justify-center py-4">
          <button 
            className="bg-white text-violet-900 px-4 py-2 rounded font-semibold hover:bg-violet-100 transition-colors"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};