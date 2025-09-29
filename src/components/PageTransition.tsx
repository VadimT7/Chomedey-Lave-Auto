'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'easeInOut',
  duration: 0.4,
};

const overlayVariants = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  in: {
    opacity: 1,
    scaleX: 1,
  },
  out: {
    opacity: 0,
    scaleX: 0,
  },
};

const overlayTransition = {
  type: 'tween' as const,
  ease: 'easeInOut',
  duration: 0.3,
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="relative"
      >
        {/* Animated Overlay */}
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={overlayVariants}
          transition={overlayTransition}
          className="fixed inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 pointer-events-none z-50"
          style={{
            transformOrigin: 'left',
          }}
        />
        
        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
