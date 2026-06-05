import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Road Assistance', href: '#road-assistance' },
    { name: 'Contact', href: '#contact' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-black shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 group">
          <img 
            src="https://i.ibb.co/wZDLQ9xs/1000480672-removebg-preview-logo.png" 
            alt="Gig Brothers Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-bold text-sm uppercase tracking-wider transition-colors hover:text-brand-red text-white`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0390011660"
            className="bg-brand-red text-white px-5 py-2 rounded-lg text-sm font-bold transition-all hover:bg-white hover:text-brand-blue shadow-lg shadow-black/20"
          >
            CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-3 -mr-2 rounded-lg transition-colors hover:bg-white/10 active:scale-95"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-10 flex flex-col gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-brand-charcoal font-bold text-xl hover:text-brand-blue active:translate-x-2 transition-transform"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0390011660"
                className="bg-brand-red text-white text-center py-4 rounded-xl font-bold"
              >
                CALL 039 001 1660
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
