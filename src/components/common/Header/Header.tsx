import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES, CLINIC_INFO } from '../../../constants/navigation';
import { DesktopNav, DesktopActions } from './desktop';
import { MobileMenuButton, MobileDrawer } from './mobile';

// Header assembler - orchestrates layout and delegates to sub-components
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border-default shadow-xs">
      <div className="container mx-auto flex items-center justify-between px-4 h-[72px]">
        {/* Brand logo */}
        <Link to={ROUTES.HOME} className="flex items-center gap-3 group py-1.5 shrink-0">
          <img
            src="/logo/logo.png"
            alt={CLINIC_INFO.name}
            className="w-10 h-10 md:w-11 md:h-11 object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300 shrink-0"
          />
          <div className="flex flex-col text-right">
            <span className="font-black text-xl md:text-2xl text-heading tracking-tight leading-none group-hover:text-brand transition-colors">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[10px] text-muted font-bold tracking-wider mt-1 font-mono">
              {CLINIC_INFO.nameEn}
            </span>
          </div>
        </Link>

        {/* Desktop navigation links */}
        <DesktopNav />

        {/* Desktop action buttons */}
        <DesktopActions />

        {/* Mobile hamburger button */}
        <MobileMenuButton onClick={() => setIsMobileMenuOpen(true)} />
      </div>

      {/* Mobile off-canvas drawer */}
      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
}

export default Header;
