import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { ROUTES } from '../../../constants/navigation';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Right Column: Text & CTAs (in RTL) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6 text-right"
          >
            {/* Category / Welcome Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-subtle border border-primary-100 text-brand text-xs font-bold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span>رعاية صحية متكاملة بمعايير عالمية</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-heading leading-[1.3] md:leading-[1.35] tracking-tight">
              رعاية طبية <br />
              <span className="text-heading">متكاملة</span> <br />
              <span className="bg-gradient-to-l from-brand to-accent bg-clip-text text-transparent">
                باحترافية وثقة
              </span>
            </h1>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl">
              نقدم أفضل الخدمات الطبية بأحدث التقنيات لضمان صحتكم وسلامتكم، فريقنا الطبي المتخصص جاهز لخدمتكم على مدار الساعة لضمان راحة بالكم.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                className="!bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl shadow-md shadow-blue-600/20 px-8 py-3.5 transition-all hover:scale-[1.02]"
                onClick={() => navigate(ROUTES.APPOINTMENTS)}
              >
                احجز موعدك الآن
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="!bg-white !text-heading border border-border-default hover:border-brand hover:!bg-brand-subtle font-bold rounded-xl px-8 py-3.5 transition-all"
                onClick={() => navigate(ROUTES.ABOUT)}
              >
                تعرف علينا
              </Button>
            </div>

            {/* Interactive & Animated Social Proof Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center gap-4 pt-4 px-4 py-2.5 rounded-2xl bg-brand-subtle/70 border border-primary-100 cursor-default transition-shadow hover:shadow-sm"
            >
              {/* Overlapping User Avatars */}
              <div className="flex -space-x-3 space-x-reverse">
                {[
                  { src: '/images/user1.png', alt: 'مريض سعيد' },
                  { src: '/images/user2.png', alt: 'مريض سعيد' },
                  { src: '/images/user3.png', alt: 'مريض سعيد' },
                ].map((user, idx) => (
                  <motion.img
                    key={idx}
                    whileHover={{ scale: 1.15, zIndex: 10 }}
                    src={user.src}
                    alt={user.alt}
                    className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-xs transition-transform"
                  />
                ))}
              </div>

              {/* Rating Stars & Count */}
              <div className="flex flex-col text-right">
                <div className="flex items-center gap-1 text-rating">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.08 }}
                    >
                      <FaStar className="w-3.5 h-3.5" />
                    </motion.div>
                  ))}
                </div>
                <span className="text-xs md:text-sm font-bold text-heading mt-0.5">
                  أكثر من 5000 مريض سعيد
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Column: Clinic Room Photo with Smooth Elevation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-default max-w-lg lg:max-w-none mx-auto group">
              <img
                src="/images/Modern clinic interior.png"
                alt="غرفة الكشف في عيادة الشفاء"
                className="w-full h-[380px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
