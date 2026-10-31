import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { ROUTES, CLINIC_INFO } from '../../../constants/navigation';

export function BookingCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-dark via-primary-800 to-brand text-white rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
            ابدأ رحلتك العلاجية مع نخبة من <br className="hidden sm:inline" />
            الاستشاريين اليوم
          </h2>

          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            صحتك هي أولويتنا ورعايتك غايتنا. لا تتردد في التواصل معنا للحصول على استشارة فورية أو حجز موعد يناسبك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              className="!bg-white !text-brand-dark hover:!bg-brand-subtle font-black rounded-xl px-8 py-3.5 shadow-lg text-base transition-transform hover:scale-105"
              onClick={() => navigate(ROUTES.APPOINTMENTS)}
            >
              احجز موعدك الآن
            </Button>

            <a
              href={`tel:${CLINIC_INFO.emergencyPhone}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all hover:scale-105"
            >
              <FaPhone className="w-4 h-4 text-white" />
              <span dir="ltr">{CLINIC_INFO.emergencyPhone}</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default BookingCTA;
