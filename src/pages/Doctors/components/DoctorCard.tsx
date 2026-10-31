import { useNavigate } from 'react-router-dom';
import { FaStar, FaArrowLeftLong, FaRegIdBadge } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { ROUTES } from '../../../constants/navigation';
import { Doctor } from '../../../types';

export interface DoctorCardProps {
  doctor: Doctor;
  onViewProfile?: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onViewProfile }: DoctorCardProps) {
  const navigate = useNavigate();

  const handleBookingClick = () => {
    navigate(
      `${ROUTES.APPOINTMENTS}?doctorId=${doctor.id}&department=${encodeURIComponent(
        doctor.department
      )}`
    );
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-border-default shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group text-right">
      <div
        onClick={() => onViewProfile?.(doctor)}
        className="relative h-64 w-full bg-slate-100 overflow-hidden shrink-0 cursor-pointer"
        title="انقر لعرض الملف التعريفي الكامل للطبيب"
      >
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = '/images/Doctor avatar.png';
            e.currentTarget.onerror = null;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
          <FaStar className="w-3 h-3 text-amber-400" />
          <span>{doctor.rating}</span>
        </div>

        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-brand-dark text-[11px] font-bold px-2.5 py-0.5 rounded-md shadow-xs">
          خبرة {doctor.experience}
        </div>
      </div>

      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          <span className="inline-block text-[11px] font-bold text-brand bg-brand-subtle px-3 py-1 rounded-full">
            {doctor.department}
          </span>

          <h3
            onClick={() => onViewProfile?.(doctor)}
            className="text-lg md:text-xl font-black text-heading group-hover:text-brand transition-colors cursor-pointer"
            title="انقر لعرض الملف التعريفي الكامل للطبيب"
          >
            {doctor.name}
          </h3>

          <p className="text-xs font-bold text-muted">{doctor.specialty}</p>

          <p className="text-xs text-body leading-relaxed line-clamp-2 pt-1">
            {doctor.bio}
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <Button
            variant="primary"
            size="md"
            className="group/btn w-full !bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl py-2.5 text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            onClick={handleBookingClick}
          >
            <span>احجز مع الطبيب</span>
            <FaArrowLeftLong className="w-3 h-3 transition-transform group-hover/btn:-translate-x-1" />
          </Button>

          {onViewProfile && (
            <button
              type="button"
              onClick={() => onViewProfile(doctor)}
              className="text-xs font-bold text-muted hover:text-brand flex items-center justify-center gap-1.5 py-1 transition-colors cursor-pointer"
            >
              <FaRegIdBadge className="w-3.5 h-3.5" />
              <span>عرض السيرة المهنية</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;