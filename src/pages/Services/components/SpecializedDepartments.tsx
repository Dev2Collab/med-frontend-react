import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { ROUTES } from '../../../constants/navigation';

const DEPARTMENTS = [
  {
    id: 'maternity',
    title: 'رعاية الأمومة والطفولة',
    description: 'متابعة دقيقة لمراحل الحمل والولادة بأعلى معايير الأمان والرعاية الطبية المتكاملة للأم والجنين.',
    image: '/images/consultation_service.jpg',
  },
  {
    id: 'rehab',
    title: 'مركز التأهيل الطبي',
    description: 'أحدث تقنيات العلاج الطبيعي واستعادة الحركة والنشاط بعد الإصابات الرياضية والعمليات الجراحية.',
    image: '/images/rehab_service.jpg',
  },
  {
    id: 'digital-lab',
    title: 'المختبر الرقمي المتطور',
    description: 'نتائج تحاليل فورية ودقيقة وموثوقة لدعم قرارات الأطباء التشخيصية السليمة بكفاءة ومصداقية عالية.',
    image: '/images/lab_service.jpg',
  },
];

export function SpecializedDepartments() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-brand-subtle/30 border-t border-b border-border-default">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 text-right">
          <div className="border-r-4 border-brand pr-4 space-y-1">
            <h2 className="text-3xl md:text-4xl font-black text-heading">
              الأقسام التخصصية
            </h2>
            <p className="text-body text-sm md:text-base">
              خدمات طبية متكاملة لضمان حياة صحية أفضل
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(ROUTES.APPOINTMENTS)}
            className="text-sm font-bold text-brand hover:text-brand-hover flex items-center gap-2 self-start md:self-auto group transition-colors cursor-pointer"
          >
            <span>اكتشف جميع الأقسام</span>
            <FaArrowLeftLong className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          </button>
        </div>

        {/* 3 Department Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept) => (
            <div
              key={dept.id}
              onClick={() => navigate(ROUTES.APPOINTMENTS)}
              className="bg-white rounded-3xl overflow-hidden border border-border-default shadow-xs hover:border-brand hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between group text-right"
            >
              <div className="relative h-56 bg-brand-dark/10 overflow-hidden">
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.src = '/images/default.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              <div className="p-6 space-y-3 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-heading group-hover:text-brand transition-colors mb-2">
                    {dept.title}
                  </h3>
                  <p className="text-xs text-body leading-relaxed">
                    {dept.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border-default flex items-center text-xs font-bold text-brand group-hover:text-accent gap-2">
                  <span>تفاصيل القسم</span>
                  <FaArrowLeftLong className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecializedDepartments;
