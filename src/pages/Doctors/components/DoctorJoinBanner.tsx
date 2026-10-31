import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { ROUTES } from '../../../constants/navigation';

export function DoctorJoinBanner() {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-brand-dark via-primary-800 to-brand text-white rounded-3xl p-10 md:p-14 text-center space-y-6 shadow-xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-black text-white">
            هل تنتمي إلى النخبة؟
          </h2>

          <p className="text-blue-100 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            نحن نبحث دائماً عن الأفضل. انضم إلى صرحنا الطبي الفاخر وساهم في رسم مستقبل الرعاية الصحية الراقية.
          </p>

          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              className="!bg-white !text-brand-dark hover:!bg-brand-subtle font-black rounded-xl px-10 py-3.5 shadow-lg text-base transition-transform hover:scale-105"
              onClick={() => navigate(ROUTES.CONTACT)}
            >
              انضم لفريقنا
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DoctorJoinBanner;
