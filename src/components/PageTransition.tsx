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
    y: 30,
    scale: 0.95,
    rotateX: 5,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
  },
  out: {
    opacity: 0,
    y: -30,
    scale: 1.05,
    rotateX: -5,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6,
};

const overlayVariants = {
  initial: {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    rotate: 45,
  },
  in: {
    opacity: 1,
    scaleX: 1,
    scaleY: 1,
    rotate: 0,
  },
  out: {
    opacity: 0,
    scaleX: 0,
    scaleY: 0,
    rotate: -45,
  },
};

const overlayTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.4,
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
          className="fixed inset-0 bg-gradient-to-br from-cyan-500/15 via-blue-500/10 to-purple-500/15 pointer-events-none z-50"
          style={{
            transformOrigin: 'center',
          }}
        />
        
        {/* Additional Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="fixed inset-0 bg-gradient-radial from-cyan-400/5 via-transparent to-transparent pointer-events-none z-40"
        />
        
        {/* Page Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
