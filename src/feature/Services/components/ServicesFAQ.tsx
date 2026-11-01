import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaCircleQuestion } from 'react-icons/fa6';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_LIST: FAQItem[] = [
  {
    question: 'هل يلزم الصيام قبل إجراء تحاليل الدم والفحص الطبي الشامل؟',
    answer:
      'نعم، لمعظم فحوصات سكر الدم الصائم والدهون الثلاثية ووظائف الكبد يُنصح بالصيام لمدة تتراوح بين 8 إلى 12 ساعة، مع السماح بشرب الماء العادي فقط، وتجنب التدخين أو المنبهات صباح التحليل.',
  },
  {
    question: 'ما هي شركات التأمين الطبي المعتمدة لدى عيادة الشفاء؟',
    answer:
      'نتعاقد مع كبرى شركات التأمين الصحي الخاصة في مصر (مثل بوبا، أكسا، أليانز، متلايف، ميدنت). يُرجى إحضار كارنيه التأمين الساري وبطاقة الرقم القومي عند مكتب الاستقبال لاعتماد الاستشارة مباشرة.',
  },
  {
    question: 'كيف يمكنني تعديل أو إلغاء موعد الحجز المسبق؟',
    answer:
      'يمكنك تعديل أو إلغاء موعدك بكل مرونة قبل الموعد بساعتين على الأقل، إما من خلال التواصل المباشر عبر الخط الساخن 16789 أو عبر خدمة عملاء الواتساب المتاحة على مدار الساعة.',
  },
  {
    question: 'ما هي المستندات والتحضيرات المطلوبة عند زيارتي الأولى؟',
    answer:
      'يُفضل إحضار بطاقة الرقم القومي أو جواز السفر، بالإضافة إلى أي تقارير طبية سابقة، أسطوانات الأشعة، أو قوائم بالأدوية المزمنة التي تتناولها حالياً لتسهيل التشخيص الدقيق على الطبيب الاستشاري.',
  },
];

export function ServicesFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-white border-t border-border-default">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle text-brand text-xs font-bold mb-4">
            <FaCircleQuestion className="w-3.5 h-3.5 text-accent" />
            <span>إرشادات واستفسارات شائعة</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-heading mb-3">
            الأسئلة الشائعة وإرشادات التحضير للكشف
          </h2>
          <p className="text-muted text-sm max-w-xl mx-auto">
            إليك أهم الإجابات والمعلومات الطبية والإدارية التي تضمن لك زيارة مريحة وسلسة داخل عياداتنا.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-border-default rounded-2xl overflow-hidden transition-colors duration-200 bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-right font-bold text-heading text-sm md:text-base hover:bg-white transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 pr-1">{item.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="w-8 h-8 rounded-full bg-white border border-border-default flex items-center justify-center text-muted shrink-0 mr-3"
                  >
                    <FaChevronDown className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesFAQ;

