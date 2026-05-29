import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function HelloModal({ isOpen, onClose }: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 200, scale: 0.8 }}   // backInDown simulation
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 200, scale: 0.8 }}      // backOutDown simulation
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-900 rounded-2xl max-w-2xl w-full p-8 shadow-2xl"
            >
              <h2 className="text-3xl font-bold mb-6">Hello There!</h2>
              <p className="text-gray-200 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam massa vel arcu faucibus dapibus...
                {/* (full text from your requirement) */}
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