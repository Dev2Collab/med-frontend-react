import { useNavigate } from 'react-router-dom';
import { FaPhoneVolume, FaWhatsapp } from 'react-icons/fa6';
import { ROUTES, CLINIC_INFO } from '../../../../constants/navigation';
import { Button } from '../../../ui/Button';

export interface DrawerFooterProps {
  onClose: () => void;
}

// Drawer footer component containing emergency hotline, WhatsApp chat, and booking CTA
export function DrawerFooter({ onClose }: DrawerFooterProps) {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    onClose();
    navigate(ROUTES.APPOINTMENTS);
  };

  const whatsappPhone = (CLINIC_INFO.whatsapp || '+201012345678').replace(/[^0-9]/g, '');

  return (
    <div
      style={{
        flexShrink: 0,
        padding: '12px',
        borderTop: '1px solid #e2e8f0',
        background: '#f8fafc',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {/* 24/7 Emergency hotline banner */}
      <a
        href={`tel:${CLINIC_INFO.emergencyPhone}`}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 12px',
          borderRadius: 12,
          background: '#fff1f2',
          border: '1px solid #fecdd3',
          textDecoration: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 8,
              background: '#dc2626',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaPhoneVolume style={{ color: '#fff', width: 14, height: 14 }} />
          </div>
          <div style={{ textAlign: 'right' }}>
            <span
              style={{
                display: 'block',
                fontSize: '0.6875rem',
                fontWeight: 700,
                color: '#991b1b',
              }}
            >
              طوارئ 24 ساعة
            </span>
            <span
              style={{
                display: 'block',
                fontSize: '0.875rem',
                fontWeight: 900,
                color: '#7f1d1d',
                direction: 'ltr',
              }}
            >
              {CLINIC_INFO.emergencyPhone}
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: '0.6875rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 6,
            background: '#fff',
            border: '1px solid #fecdd3',
            color: '#b91c1c',
          }}
        >
          اتصل الآن
        </span>
      </a>

      {/* WhatsApp quick chat button */}
      <a
        href={`https://wa.me/${whatsappPhone}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          padding: '10px 16px',
          borderRadius: 12,
          background: '#0d9488',
          color: '#fff',
          fontWeight: 700,
          fontSize: '0.8125rem',
          textDecoration: 'none',
        }}
      >
        <FaWhatsapp style={{ width: 16, height: 16 }} />
        <span>محادثة عبر واتساب</span>
      </a>

      {/* Booking CTA button */}
      <Button
        variant="primary"
        size="md"
        className="w-full !bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl py-3 text-sm"
        onClick={handleBookingClick}
      >
        احجز موعدك الآن
      </Button>
    </div>
  );
}

export default DrawerFooter;

