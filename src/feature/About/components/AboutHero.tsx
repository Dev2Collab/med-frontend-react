import { motion } from 'framer-motion';

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0d4585] via-[#0f5aaa] to-[#1670cc] text-white py-24 md:py-32 text-center">
      {/* Subtle ambient light glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xs border border-white/20 text-white text-xs md:text-sm font-semibold shadow-xs mb-6"
        >
          <span>التميز الطبي ورعاية المريض</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.35] tracking-tight mb-6"
        >
          عيادة الشفاء: إرث من الثقة <br className="hidden sm:inline" />
          <span className="text-[#a5f3fc]">
            ورؤية لمستقبل الرعاية الصحية
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-100/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed pt-2"
        >
          في قلب فلسفتنا تكمن الرعاية المتمحورة حول المريض. نحن لا نعالج أعراضاً بل نرعى أفراداً، نؤمن أن الطب هو مزيج متناغم بين العلم المتقدم واللمسة الإنسانية الحانية.
        </motion.p>
      </div>
    </section>
  );
}

export default AboutHero;
