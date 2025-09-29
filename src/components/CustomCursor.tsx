'use client';

import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-interactive') || 
          target.closest('.cursor-interactive')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('cursor-interactive') || 
          target.closest('.cursor-interactive')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isHovering ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`,
        }}
      >
        <div
          className={`w-10 h-10 rounded-full border-2 border-cyan-500 transition-all duration-200 ${
            isClicking ? 'scale-75 bg-cyan-500/20' : 'scale-100 bg-transparent'
          }`}
        />
      </div>

      {/* Cursor Ripple Effect */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isClicking ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          transform: `translate(${mousePosition.x - 25}px, ${mousePosition.y - 25}px)`,
        }}
      >
        <div
          className={`w-12 h-12 rounded-full border border-cyan-400 transition-all duration-300 ${
            isClicking ? 'scale-150' : 'scale-0'
          }`}
        />
      </div>
    </>
  );
};

export default CustomCursor;
