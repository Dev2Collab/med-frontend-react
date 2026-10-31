import { NAV_LINKS } from '../../../../constants/navigation';
import { NavLinkItem } from './NavLinkItem';

// Desktop horizontal navigation - visible on medium screens and up
export function DesktopNav() {
  return (
    <nav className="hidden md:flex items-center" aria-label="Primary navigation">
      <ul className="flex items-center gap-6 lg:gap-8 list-none m-0 p-0">
        {NAV_LINKS.map((link) => (
          <NavLinkItem key={link.path} to={link.path}>
            {link.label}
          </NavLinkItem>
        ))}
      </ul>
    </nav>
  );
}

export default DesktopNav;

