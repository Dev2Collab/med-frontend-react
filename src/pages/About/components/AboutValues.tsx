import { motion } from 'framer-motion';

const VALUES = [
  {
    num: '01',
    title: 'النزاهة والشفافية',
    description: 'الصدق المطلق في تقديم المعلومات الطبية والخيارات العلاجية مع وضع مصلحة المريض وسلامته فوق كل اعتبار ومصارحته بكافة التفاصيل.',
  },
  {
    num: '02',
    title: 'التميز الإكلينيكي',
    description: 'السعي الدؤوب نحو أعلى مستويات الدقة في الأداء الطبي من خلال ممارسات مبنية على أحدث الأبحاث العالمية لتحقيق أفضل النتائج العلاجية.',
  },
  {
    num: '03',
    title: 'الإنسانية أولاً',
    description: 'التعامل مع كل مريض كفرد ذو مشاعر واحتياجات فريدة، مع توفير أقصى درجات الاحترام والتعاطف والخصوصية في كل مرحلة من مراحل الشفاء.',
  },
];

export function AboutValues() {
  return (
    <section className="py-20 bg-brand-subtle/30 border-t border-border-default">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 text-right">
          {/* Right Header */}
          <div className="lg:w-1/3 border-r-4 border-brand pr-4 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-heading">
              قيمنا الجوهرية
            </h2>
            <p className="text-body text-sm md:text-base leading-relaxed">
              تدفعنا أفعال حقيقية على ركائز صلبة توجه تعاملاتنا اليومية مع المرضى والمجتمع الطبي نحو الرقي والشفافية.
            </p>
          </div>

          {/* 3 Values Columns */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((v, idx) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12, duration: 0.5 }}
                className="space-y-3"
              >
                <div className="text-4xl md:text-5xl font-black text-brand/30">
                  {v.num}
                </div>
                <h3 className="text-lg font-bold text-heading">
                  {v.title}
                </h3>
                <p className="text-xs md:text-sm text-body leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutValues;
