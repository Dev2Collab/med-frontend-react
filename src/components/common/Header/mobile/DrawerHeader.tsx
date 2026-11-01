import { FaXmark } from 'react-icons/fa6';
import { CLINIC_INFO } from '../../../../constants/navigation';

export interface DrawerHeaderProps {
  onClose: () => void;
}

// Drawer header component containing brand logo and close button
export function DrawerHeader({ onClose }: DrawerHeaderProps) {
  return (
    <div
      style={{
        flexShrink: 0,
        padding: '18px 16px',
        borderBottom: '1px solid #e2e8f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#f8fafc',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img
          src="/logo/logo.png"
          alt={CLINIC_INFO.name}
          style={{ width: 40, height: 40, objectFit: 'contain' }}
        />
        <div style={{ textAlign: 'right' }}>
          <span
            style={{
              display: 'block',
              fontWeight: 900,
              fontSize: '1rem',
              color: '#0f172a',
              lineHeight: 1.2,
            }}
          >
            {CLINIC_INFO.name}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: '0.625rem',
              color: '#94a3b8',
              fontWeight: 700,
              letterSpacing: '0.05em',
              marginTop: 2,
            }}
          >
            {CLINIC_INFO.nameEn}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        aria-label="Close menu"
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          border: '1px solid #e2e8f0',
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#475569',
          flexShrink: 0,
        }}
      >
        <FaXmark style={{ width: 16, height: 16 }} />
      </button>
    </div>
  );
}

export default DrawerHeader;

