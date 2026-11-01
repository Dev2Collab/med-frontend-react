export interface MobileMenuButtonProps {
  onClick: () => void;
}

// Hamburger button visible only on mobile screens (md:hidden)
export function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      type="button"
      aria-label="Open main menu"
      aria-haspopup="dialog"
      onClick={onClick}
      className="md:hidden w-10 h-10 rounded-xl border border-border-default bg-surface flex items-center justify-center text-slate-700 hover:text-brand hover:border-brand transition-all cursor-pointer shadow-2xs"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  );
}

export default MobileMenuButton;

