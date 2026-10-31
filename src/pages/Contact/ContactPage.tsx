import { motion } from 'framer-motion';
import { ContactForm } from './components/ContactForm';
import { ContactInfo } from './components/ContactInfo';
import { ContactNewsletter } from './components/ContactNewsletter';
import { usePageTitle } from '../../hooks/usePageTitle';

export function ContactPage() {
  usePageTitle('تواصل مع فريقنا الطبي');
  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Luxury Contact Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-subtle/50 via-white to-slate-50/50 pt-20 pb-16 border-b border-border-default text-center">
        {/* Ambient decorative glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs md:text-sm font-bold shadow-xs mb-5"
          >
            <span>نحن هنا لمساعدتكم</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.35] tracking-tight mb-4"
          >
            تواصل مع فريقنا الطبي
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            نسعد بالإجابة على استفساراتكم الطبية ومساعدتكم في حجز المواعيد. فريقنا جاهز لخدمتكم على مدار الساعة بمهنية واحترافية.
          </motion.p>
        </div>
      </section>

      {/* Main 2-Columns Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Info & Map Column (5 cols) */}
            <div className="lg:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <ContactNewsletter />
    </div>
  );
}

export default ContactPage;
