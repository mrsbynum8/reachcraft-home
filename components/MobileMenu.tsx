import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import Button from './Button';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        key="mobile-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-base/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    onClick={onClose}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                                    className="font-display text-3xl font-bold text-primaryText hover:text-accent transition-colors"
                                >
                                    {item.label}
                                </motion.a>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ delay: 0.4, duration: 0.4 }}
                                className="mt-8"
                            >
                                <Button
                                    href="#contact"
                                    variant="primary"
                                    className="text-lg"
                                    onClick={onClose}
                                >
                                    Apply for Partnership
                                </Button>
                            </motion.div>
                        </nav>

                        {/* Decorative background element */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden z-[-1]">
                            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
                            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondaryAccent/5 rounded-full blur-[80px]" />
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileMenu;
