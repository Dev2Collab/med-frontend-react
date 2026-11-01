import { motion } from 'framer-motion';
import { FaGraduationCap, FaShieldHalved, FaUserShield, FaBookMedical } from 'react-icons/fa6';

const STANDARDS = [
  {
    id: 'education',
    title: 'التعليم الطبي المستمر',
    description: 'تطوير مستمر لمهارات الكوادر الطبية بما يواكب أحدث الأبحاث العالمية والمؤتمرات الدورية.',
    icon: <FaGraduationCap className="w-6 h-6" />,
  },
  {
    id: 'quality',
    title: 'ضبط الجودة النوعية',
    description: 'اتباع معايير صارمة تشمل كافة العمليات التشخيصية والجرعيات الدوائية وفق أحدث معايير الأيزو الصحية.',
    icon: <FaShieldHalved className="w-6 h-6" />,
  },
  {
    id: 'safety',
    title: 'سلامة المرضى',
    description: 'تطبيق أعلى معايير مكافحة العدوى والتعقيم والإجراءات الوقائية لضمان بيئة آمنة للمرضى.',
    icon: <FaUserShield className="w-6 h-6" />,
  },
  {
    id: 'evidence',
    title: 'الطب القائم على البرهان',
    description: 'استخدام أحدث الأدلة العلمية الموثقة لاتخاذ القرارات الإكلينيكية الأكثر ملاءمة لكل حالة بشكل منفرد.',
    icon: <FaBookMedical className="w-6 h-6" />,
  },
];

export function AboutQualityStandards() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-brand bg-brand-subtle border border-primary-100 px-3.5 py-1 rounded-full inline-block">
            المعايير والاعتمادات
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-heading">
            معايير التميز الطبي (Quality Standards)
          </h2>
          <p className="text-body text-sm md:text-base leading-relaxed">
            نحن نؤمن بأن الجودة ليست خياراً بل هي أساس العمل الطبي الرصين واتباع بروتوكولات صارمة لضمان سلامة مرضانا.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STANDARDS.map((s, idx) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 text-center border border-border-default shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 flex flex-col items-center group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center text-xl mb-5 shadow-xs transition-colors duration-300">
                {s.icon}
              </div>

              <h3 className="text-lg font-bold text-heading group-hover:text-brand transition-colors mb-3">
                {s.title}
              </h3>

              <p className="text-xs md:text-sm text-body leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutQualityStandards;
