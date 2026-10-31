import { motion } from 'framer-motion';

export function AboutStory() {
  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Story (8 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 text-right space-y-6"
          >
            <div className="border-r-4 border-brand pr-4 space-y-2">
              <span className="text-xs font-bold text-brand uppercase tracking-wider">
                العزيمة والريادة
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-heading leading-tight">
                قصة نجاحنا وصياغة معايير الغد
              </h2>
            </div>

            <p className="text-body text-sm md:text-base leading-relaxed">
              تأسست عيادة الشفاء كاستجابة موضوعية للحاجة المتزايدة إلى مرافق طبية تتبنى المعايير الدولية في الممارسة الإكلينيكية. لقد صممنا هويتنا من خلال دمج الكفاءات الطبية الاستثنائية مع بنية تحتية تقنية متطورة، مما خلق بيئة علاجية تضمن أعلى مستويات الدقة التشخيصية والبروتوكولات العلاجية المبنية على البراهين العلمية (Evidence-Based Medicine).
            </p>

            <p className="text-body text-sm md:text-base leading-relaxed">
              على مدار العقد الماضي، استثمرنا بشكل مكثف في رأس المال البشري، حيث استقطبنا نخبة من الاستشاريين الحاصلين على الزمالات الدولية والذين يمتلكون سجلات حافلة في مجالاتهم التخصصية. إن خبرتنا التي تتجاوز 15 عاماً تمثل التزاماً راسخاً بتقديم رعاية صحية تتجاوز التوقعات، حيث نجمع بين التقنيات الحديثة وأرقى معايير الضيافة الطبية الفاخرة.
            </p>

            <p className="text-muted text-xs md:text-sm leading-relaxed border-r-2 border-brand-soft pr-3">
              نحن اليوم لا نكتفي بكوننا وجهة علاجية، بل نسعى لأن نكون شريكاً استراتيجياً في تعزيز الصحة العامة والوقاية الاستباقية للمجتمع، بشفافية كاملة مع مرضانا كشركاء أصيلين في رحلتهم نحو العافية الدائمة.
            </p>
          </motion.div>

          {/* Stat Card (4 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4"
          >
            <div className="bg-gradient-to-br from-brand-subtle via-white to-primary-100 rounded-3xl p-8 md:p-10 border border-primary-200/60 shadow-lg text-center space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="text-5xl md:text-6xl font-black text-brand tracking-tight">
                +15
              </div>
              <h3 className="text-lg md:text-xl font-bold text-heading">
                عام من العطاء والتخصص
              </h3>
              <p className="text-xs md:text-sm text-body leading-relaxed">
                مسيرة متواصلة من الريادة الطبية والالتزام بأعلى معايير الجودة وسلامة المرضى.
              </p>

              <div className="pt-4 border-t border-primary-200/60 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-xl font-black text-brand-dark">+50K</div>
                  <div className="text-[11px] text-muted">مريض مستفيد</div>
                </div>
                <div>
                  <div className="text-xl font-black text-accent">+35</div>
                  <div className="text-[11px] text-muted">استشاري وطبيب</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
