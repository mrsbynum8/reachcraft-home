import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 220, mass: 0.6 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverable = target.closest('[data-hoverable="true"]');
      if (hoverable) {
        setIsHovered(true);
        const text = hoverable.getAttribute('data-cursor-text');
        setCursorText(text || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden lg:block mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <motion.div
        animate={{
          width: isHovered ? 28 : 14,
          height: isHovered ? 28 : 14,
          backgroundColor: isClicking ? 'rgba(245, 245, 247, 0.4)' : isHovered ? 'rgba(249, 115, 22, 0.14)' : 'rgba(245, 245, 247, 0.02)',
          borderColor: isHovered ? '#F97316' : 'rgba(245, 245, 247, 0.55)',
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-full border border-solid flex items-center justify-center backdrop-blur-[1px]"
      >
        {isHovered && cursorText && (
          <span className="text-[9px] font-mono text-[#F5F5F7] font-bold tracking-widest absolute -bottom-5 whitespace-nowrap bg-surface1 px-1 py-0.5 rounded">
            {cursorText}
          </span>
        )}
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
