import { MessageCircle, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FloatingChatButtonProps {
  isOpen: boolean
  onToggle: () => void
  hasUnreadMessages?: boolean
}

const FloatingChatButton = ({ isOpen, onToggle, hasUnreadMessages = false }: FloatingChatButtonProps) => {
  return (
    <AnimatePresence>
      <motion.button
        onClick={onToggle}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 shadow-primary-500/25"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open AI assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Notification badge */}
        {!isOpen && hasUnreadMessages && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div>
        )}
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.button>
    </AnimatePresence>
  )
}

export default FloatingChatButton
