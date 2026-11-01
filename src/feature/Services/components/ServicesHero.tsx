import { motion } from 'framer-motion';

export interface ServicesHeroProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}

export function ServicesHero({
  categories,
  selectedCategory,
  onSelectCategory,
}: ServicesHeroProps) {
  return (
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
          <span>خدماتنا الطبية الفاخرة</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.35] tracking-tight mb-4"
        >
          رعاية صحية ملكية <br />
          <span className="text-[#1670CC]">تليق بك وبعائلتك</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8"
        >
          نجمع بين الخبرة الطبية العريقة وأحدث التقنيات العالمية لنقدم لك باقة من الفخامة والخصوصية التامة، لضمان رحلة علاجية استثنائية.
        </motion.p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B3A66] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;
