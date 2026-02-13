import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import MobileMenu from './MobileMenu';
import Button from './Button';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'h-16 md:h-[72px] glass-panel' : 'h-20 bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative z-50 flex items-center"
            animate={{ scale: scrolled ? 0.9 : 1 }}
            data-hoverable="true"
            onClick={() => setIsMenuOpen(false)}
          >
            <img
              src="/RCALogo Version2 White.svg"
              alt="ReachCraft"
              className={`transition-all duration-300 ${scrolled ? 'h-8' : 'h-10'}`}
            />
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-mutedText hover:text-accent transition-colors duration-200"
                data-hoverable="true"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Button
              href="#contact"
              variant="primary"
              className="hidden sm:flex px-6 py-2"
              data-hoverable="true"
              data-cursor-text="APPLY"
            >
              Apply for Partnership
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-primaryText relative z-50 p-2"
              data-hoverable="true"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;
