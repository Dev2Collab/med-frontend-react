import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DrawerHeader } from './DrawerHeader';
import { DrawerNavLinks } from './DrawerNavLinks';
import { DrawerFooter } from './DrawerFooter';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Framer Motion animation variants
const backdropVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerVariants = {
  hidden:  { x: '100%' },
  visible: { x: 0 },
};

// Main mobile off-canvas drawer shell coordinating header, navigation links, and footer
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Clickable backdrop overlay */}
          <motion.div
            key="backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.22 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 1000,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(3px)',
              WebkitBackdropFilter: 'blur(3px)',
              cursor: 'pointer',
            }}
          />

          {/* Off-canvas drawer panel */}
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation menu"
            dir="rtl"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '300px',
              height: '100dvh',
              zIndex: 1001,
              background: '#fff',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
              borderLeft: '1px solid #e2e8f0',
              overflowX: 'hidden',
            }}
          >
            {/* Header: logo + close button */}
            <DrawerHeader onClose={onClose} />

            {/* Scrollable navigation links */}
            <DrawerNavLinks onClose={onClose} />

            {/* Footer: emergency hotline, WhatsApp, and booking CTA */}
            <DrawerFooter onClose={onClose} />
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default MobileDrawer;

