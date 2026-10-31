import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaHouse,
  FaCalendarCheck,
  FaHospital,
  FaStethoscope,
  FaUserDoctor,
  FaPhone,
} from 'react-icons/fa6';
import { NAV_LINKS, ROUTES } from '../../../../constants/navigation';

export interface DrawerNavLinksProps {
  onClose: () => void;
}

// Map each route to its corresponding icon
const NAV_ICONS: Record<string, ReactNode> = {
  [ROUTES.HOME]:         <FaHouse className="w-4 h-4" />,
  [ROUTES.APPOINTMENTS]: <FaCalendarCheck className="w-4 h-4" />,
  [ROUTES.ABOUT]:        <FaHospital className="w-4 h-4" />,
  [ROUTES.SERVICES]:     <FaStethoscope className="w-4 h-4" />,
  [ROUTES.DOCTORS]:      <FaUserDoctor className="w-4 h-4" />,
  [ROUTES.CONTACT]:      <FaPhone className="w-4 h-4" />,
};

// Scrollable navigation list for the mobile drawer
export function DrawerNavLinks({ onClose }: DrawerNavLinksProps) {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
      {NAV_LINKS.map((link) => {
        const icon = NAV_ICONS[link.path] ?? <FaHospital className="w-4 h-4" />;
        return (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              [
                'group flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-bold',
                'transition-all duration-200 mb-1.5 relative overflow-hidden cursor-pointer',
                isActive
                  ? '!bg-[#1670CC] !text-white shadow-md'
                  : 'text-slate-800 hover:bg-[#eff6ff] hover:text-[#1670CC]',
              ].join(' ')
            }
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#1670CC' : undefined,
              color: isActive ? '#ffffff' : '#1e293b',
              textDecoration: 'none',
            })}
          >
            {({ isActive }) => (
              <>
                {/* Active right-border accent stripe on hover */}
                {!isActive && (
                  <span
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[3.5px] rounded-l-full bg-[#1670CC] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ height: '60%' }}
                  />
                )}

                {/* Styled icon badge */}
                <span
                  style={{
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: isActive ? 'rgba(255,255,255,0.22)' : '#e8f0fe',
                    color: isActive ? '#ffffff' : '#1670CC',
                    transition: 'all 0.2s ease',
                  }}
                  className={isActive ? '' : 'group-hover:!bg-[#1670CC] group-hover:!text-white'}
                >
                  {icon}
                </span>

                {/* Nav link text label - strictly pure white on active */}
                <span
                  style={{
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#ffffff' : undefined,
                    letterSpacing: '0.01em',
                  }}
                  className={isActive ? '!text-white' : 'text-slate-800 group-hover:text-[#1670CC]'}
                >
                  {link.label}
                </span>
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

export default DrawerNavLinks;

