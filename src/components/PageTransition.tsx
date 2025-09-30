'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useState, useEffect } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: 'easeInOut',
  duration: 0.25,
};

const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.2,
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingKey, setLoadingKey] = useState(0);

  useEffect(() => {
    // Show loading state immediately when pathname changes
    setIsLoading(true);
    setLoadingKey(prev => prev + 1);
    
    // Hide loading state after a short delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key={`loading-${loadingKey}`}
            initial="initial"
            animate="in"
            exit="out"
            variants={loadingVariants}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-2 border-gray-300 border-t-cyan-500 rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default PageTransition;
