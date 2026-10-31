import { useNavigate } from 'react-router-dom';
import { FaShieldHalved, FaPhone } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { ROUTES, CLINIC_INFO } from '../../../constants/navigation';

export function ServicesTrustBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-brand-dark via-primary-800 to-brand text-white rounded-3xl p-10 md:p-16 text-center space-y-6 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          {/* Shield Icon */}
          <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 text-teal-200 text-2xl mx-auto flex items-center justify-center shadow-sm">
            <FaShieldHalved />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
            صحتك أمانة.. ومكانها عيادة الشفاء
          </h2>

          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            انضم إلى آلاف المستفيدين من خدماتنا الطبية المتميزة، نحن هنا لخدمتك على مدار الساعة بمهنية وفخامة تليق بك.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
            <Button
              variant="primary"
              size="lg"
              className="!bg-brand hover:!bg-brand-hover !text-white font-black rounded-xl px-9 py-3.5 shadow-lg text-base transition-transform hover:scale-105"
              onClick={() => navigate(ROUTES.APPOINTMENTS)}
            >
              احجز موعدك الآن
            </Button>

            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl border border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold text-base transition-all hover:scale-105"
            >
              <FaPhone className="w-4 h-4 text-white" />
              <span>تحدث مع خدمة العملاء</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTrustBanner;
