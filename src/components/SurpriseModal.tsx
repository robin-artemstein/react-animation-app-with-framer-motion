import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function SurpriseModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />

          <motion.div
            initial={{ rotateX: -90, opacity: 0 }}           // flip in X
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateY: 90, opacity: 0 }}              // flip out Y
            transition={{ duration: 0.6 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-orange-900 rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Surprise!!!</h2>
              <p className="text-gray-200 leading-relaxed">
                Integer ornare in arcu non scelerisque...
              </p>
              <button
                onClick={onClose}
                className="mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}