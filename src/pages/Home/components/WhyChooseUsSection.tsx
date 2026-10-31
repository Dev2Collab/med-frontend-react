import React from 'react';
import { motion } from 'framer-motion';
import { FaHospital, FaUserDoctor, FaNotesMedical, FaCalendarCheck } from 'react-icons/fa6';

export interface WhyFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FEATURES: WhyFeature[] = [
  {
    id: 'equipment',
    title: 'أحدث المعدات الطبية',
    description: 'استخدام أحدث التقنيات والأجهزة الطبية لضمان التشخيص والعلاج الدقيق والسريع.',
    icon: <FaHospital className="w-6 h-6" />,
  },
  {
    id: 'team',
    title: 'فريق طبي متخصص',
    description: 'أطباء واستشاريون ذوي خبرة واحترافية وتخصصات متعددة في مختلف التخصصات الطبية.',
    icon: <FaUserDoctor className="w-6 h-6" />,
  },
  {
    id: 'followup',
    title: 'متابعة دقيقة للحالات',
    description: 'نظام متابعة إلكتروني متكامل لملاحظة وتطور الحالة المرضية وتقديم الاستشارات بدقة متناهية.',
    icon: <FaNotesMedical className="w-6 h-6" />,
  },
  {
    id: 'reminder',
    title: 'تذكير تلقائي بالمواعيد',
    description: 'إرسال رسائل تذكيرية فورية بمواعيد الكشف لضمان عدم تفويت مواعيدكم المهمة.',
    icon: <FaCalendarCheck className="w-6 h-6" />,
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary-100 text-brand text-xs font-bold shadow-xs">
            <span>معايير الجودة والاعتماد الطبي</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-heading leading-[1.35] pt-1">
            لماذا تختار <span className="text-brand">عيادة الشفاء</span>؟
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            نتميز بتقديم رعاية طبية متكاملة وفق أرقى المعايير العالمية مع التركيز التام على سلامة وراحة المريض.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 text-center border border-border-default shadow-xs hover:border-brand hover:shadow-xl transition-all duration-300 flex flex-col items-center group cursor-default"
            >
              {/* Circular Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-brand-subtle text-brand group-hover:bg-brand group-hover:text-white flex items-center justify-center text-xl mb-5 shadow-xs transition-colors duration-300">
                {feature.icon}
              </div>

              <h3 className="text-lg font-bold text-heading group-hover:text-brand transition-colors mb-3">
                {feature.title}
              </h3>

              <p className="text-xs md:text-sm text-body leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUsSection;
