import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaXmark,
  FaStar,
  FaAward,
  FaCalendarDays,
  FaLanguage,
  FaHospital,
  FaArrowLeftLong,
} from 'react-icons/fa6';
import { Doctor } from '../../../types';
import { ROUTES } from '../../../constants/navigation';
import { Button } from '../../../components/ui/Button';

export interface DoctorProfileModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
}

export function DoctorProfileModal({
  doctor,
  isOpen,
  onClose,
}: DoctorProfileModalProps) {
  const navigate = useNavigate();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!doctor) return null;

  const handleBooking = () => {
    onClose();
    navigate(
      `${ROUTES.APPOINTMENTS}?doctorId=${doctor.id}&department=${encodeURIComponent(
        doctor.department
      )}`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          dir="rtl"
        >
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="fixed inset-0 bg-black/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-border-default overflow-hidden z-10 text-right my-8"
          >
            {/* Header / Banner with Doctor Image */}
            <div className="relative bg-gradient-to-r from-brand-dark via-primary-900 to-brand p-6 text-white flex items-center gap-4">
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                aria-label="إغلاق"
                className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <FaXmark className="w-4 h-4" />
              </button>

              <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/40 shadow-md shrink-0 bg-white">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.src = '/images/Doctor avatar.png';
                  }}
                />
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-bold bg-teal-400/20 text-teal-200 border border-teal-300/30 px-3 py-0.5 rounded-full inline-block">
                  {doctor.department}
                </span>
                <h3 className="text-xl font-black text-white">{doctor.name}</h3>
                <p className="text-xs text-blue-100/90 font-medium">
                  {doctor.specialty}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto">
              {/* Rating and Experience Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold px-3 py-1 rounded-xl">
                  <FaStar className="w-3.5 h-3.5 text-amber-500" />
                  <span>{doctor.rating} تقييم ممتاز</span>
                  <span className="text-muted text-[10px]">({doctor.reviewsCount} مريض)</span>
                </div>

                <div className="flex items-center gap-1.5 bg-brand-subtle border border-primary-100 text-brand text-xs font-bold px-3 py-1 rounded-xl">
                  <FaAward className="w-3.5 h-3.5 text-accent" />
                  <span>خبرة {doctor.experience}</span>
                </div>
              </div>

              {/* Bio Section */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-heading flex items-center gap-2">
                  <FaHospital className="w-3.5 h-3.5 text-brand" />
                  <span>النبذة المهنية والخبرات</span>
                </h4>
                <p className="text-xs md:text-sm text-body leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-border-default">
                  {doctor.bio}
                </p>
              </div>

              {/* Available Days */}
              <div className="space-y-1.5">
                <h4 className="font-bold text-sm text-heading flex items-center gap-2">
                  <FaCalendarDays className="w-3.5 h-3.5 text-brand" />
                  <span>أيام تواجد الطبيب في العيادة</span>
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {doctor.availableDays && doctor.availableDays.length > 0 ? (
                    doctor.availableDays.map((day, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-bold text-slate-700 bg-slate-100 border border-border-default px-3 py-1 rounded-lg"
                      >
                        {day}
                      </span>
                    ))
                  ) : (
                    <span className="text-xs text-muted">يومياً حسب جدول المواعيد</span>
                  )}
                </div>
              </div>

              {/* Additional Highlights */}
              <div className="flex items-center gap-2 text-xs text-muted pt-2 border-t border-border-default">
                <FaLanguage className="w-4 h-4 text-brand" />
                <span>اللغات: العربية، الإنجليزية (استشارات مخصصة لكبار الشخصيات)</span>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 bg-slate-50 border-t border-border-default flex items-center justify-between gap-3">
              <Button
                variant="secondary"
                size="md"
                className="!text-slate-600 hover:!text-heading rounded-xl text-xs py-2.5 px-4"
                onClick={onClose}
              >
                إغلاق
              </Button>

              <Button
                variant="primary"
                size="md"
                className="!bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl py-2.5 px-6 text-sm flex items-center gap-2 shadow-sm cursor-pointer"
                onClick={handleBooking}
              >
                <span>احجز موعد مع الطبيب الآن</span>
                <FaArrowLeftLong className="w-3 h-3" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default DoctorProfileModal;
