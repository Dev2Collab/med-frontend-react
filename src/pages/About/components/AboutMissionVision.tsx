import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa6';

export function AboutMissionVision() {
  return (
    <section className="py-20 bg-brand-subtle/40 border-t border-b border-border-default">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-brand-dark via-primary-800 to-brand text-white shadow-xl border border-blue-400/30 flex flex-col justify-between text-right space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-teal-200 text-2xl group-hover:scale-110 transition-transform">
                <FaBullseye />
              </div>
              <h3 className="text-2xl font-black text-white">
                رسالتنا المؤسسية
              </h3>
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed">
                التمحور بصفتنا شريك إرساء دعائم نظام صحي شامل يجمع بين الكفاءة المنهجية والقدرة على فهم تاريخ وخلفية ومعطيات المريض بتفاصيل دقيقة، مع تركيز مستمر على تحسين جودة الحياة والتخفيف من وطأة المعاناة بدعم دائم لأدق تفاصيل الخصوصية والراحة لأفراد المجتمع.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="rounded-3xl p-8 md:p-10 bg-gradient-to-br from-brand-dark via-primary-900 to-brand-hover text-white shadow-xl border border-blue-400/30 flex flex-col justify-between text-right space-y-6 relative overflow-hidden group"
          >
            <div className="space-y-4 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-teal-200 text-2xl group-hover:scale-110 transition-transform">
                <FaEye />
              </div>
              <h3 className="text-2xl font-black text-white">
                رؤيتنا الاستراتيجية
              </h3>
              <p className="text-blue-100/90 text-sm md:text-base leading-relaxed">
                نتطلع إلى أن نكون المرجعية الأولى للتميز الطبي والاستشاري لرعاية صحية متقدمة في جمهورية مصر العربية والشرق الأوسط، وفيما نهدف إلى قيادة التحول في القطاع الصحي الخاص عبر تبني تقنيات الذكاء الاصطناعي في التشخيص الدقيق، وتوسيع نطاق التخصصات الداعمة لتقديم منظومة صحية متكاملة تخدم أحدث المخرجات العالمية للسلامة الصحية.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionVision;
