'use client';

import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <div className="relative w-full">
      {children}
    </div>
  );
};

export default PageTransition;
