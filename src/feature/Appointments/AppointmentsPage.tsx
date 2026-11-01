import { motion } from 'framer-motion';
import { FaCalendarCheck } from 'react-icons/fa6';
import { BookingForm } from './components/BookingForm';
import { BookingTrustBadges } from './components/BookingTrustBadges';
import { usePageTitle } from '../../hooks/usePageTitle';

export function AppointmentsPage() {
  usePageTitle('حجز موعد أونلاين');
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Luxury Appointments Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-subtle/50 via-white to-slate-50/50 pt-20 pb-14 border-b border-border-default text-center">
        {/* Ambient decorative glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#1670CC] mx-auto shadow-xs mb-5"
          >
            <FaCalendarCheck className="w-6 h-6 text-[#1670CC]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.35] tracking-tight mb-4"
          >
            نموذج حجز المواعيد أونلاين
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            يسعدنا انضمامكم لمركزنا. يرجى تعبئة البيانات المطلوبة بدقة لضمان حصولكم على أفضل رعاية طبية في الموعد المفضل.
          </motion.p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="container mx-auto px-4 max-w-5xl py-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <BookingForm />
        </motion.div>

        {/* Trust Badges */}
        <BookingTrustBadges />
      </div>
    </div>
  );
}

export default AppointmentsPage;
