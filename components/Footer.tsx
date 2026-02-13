import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="w-full py-8 bg-base border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

                <div className="text-[10px] md:text-xs text-mutedText font-mono">
                    &copy; {new Date().getFullYear()} ReachCraft. Elite Marketing Systems.
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-[10px] md:text-xs text-mutedText hover:text-white transition-colors uppercase tracking-wider">Privacy Policy</a>
                    <a href="#" className="text-[10px] md:text-xs text-mutedText hover:text-white transition-colors uppercase tracking-wider">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
