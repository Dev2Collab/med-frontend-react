import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export interface NavLinkItemProps {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}

export function NavLinkItem({ to, children, onClick }: NavLinkItemProps) {
  return (
    <li className="list-none">
      <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
          `text-sm md:text-base font-bold transition-all duration-200 py-1.5 px-1 relative inline-block ${
            isActive
              ? 'text-brand font-extrabold after:content-[""] after:absolute after:bottom-0 after:right-0 after:left-0 after:h-[2.5px] after:bg-brand after:rounded-full'
              : 'text-body hover:text-brand'
          }`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkItem;

