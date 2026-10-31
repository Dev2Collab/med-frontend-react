import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { FaStar, FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa6';

// Swiper CSS
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'أحمد الحصري',
    role: 'مريض مراجع - استشارات باطنية',
    rating: 5,
    comment: 'تجربة ممتازة جداً، الطاقم الطبي متعاون والتعامل راقي، والاهتمام من حيث دقة المواعيد والنظافة العامة للعيادة، أنصح بها بشدة.',
    avatar: '/images/user1.png',
  },
  {
    id: '2',
    name: 'سارة العلي',
    role: 'مريضة سابقة - متابعة دورية',
    rating: 5,
    comment: 'الدكتورة كان شرحها جيد وواضح لي في أدق التفاصيل، شعرت براحة كبيرة وثقة في خطة العلاج. شكراً لكم على هذا المستوى الرائع.',
    avatar: '/images/user2.png',
  },
  {
    id: '3',
    name: 'خالد يوسف',
    role: 'مريض مراجع - فحص شامل',
    rating: 5,
    comment: 'المكان مرتب والخدمة سريعة، ميزة التذكير بالمواعيد ساعدتني على تنظيم زيارتي، أتمنى لكم التوفيق والاستمرار بهذا التميز.',
    avatar: '/images/user3.png',
  },
  {
    id: '4',
    name: 'فاطمة الشهري',
    role: 'مراجعة - عيادة الأسرة',
    rating: 5,
    comment: 'الاهتمام بالمريض منذ لحظة الدخول وحتى انتهاء الزيارة استثنائي. دقة في التحاليل وسرعة في استلام النتائج عبر النظام.',
    avatar: '/images/user2.png',
  },
  {
    id: '5',
    name: 'عبدالله القحطاني',
    role: 'مريض مراجع - تأهيل وعلاج طبيعي',
    rating: 5,
    comment: 'أشكر الدكتور المشرف على برنامج التأهيل، تحسنت حالتي بشكل ملحوظ في وقت قياسي بفضل التمارين والمتابعة الأسبوعية الدقيقة.',
    avatar: '/images/user1.png',
  },
  {
    id: '6',
    name: 'منى الدوسري',
    role: 'مراجعة - باقة الفحص الدوري',
    rating: 5,
    comment: 'عيادة متكاملة وأجهزة حديثة جداً. تجربة مريحة بدون انتظار طويل وفريق تمريض على أعلى مستوى من الاحترافية.',
    avatar: '/images/user3.png',
  },
];

export function TestimonialsSection() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header with Manual Slide Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div className="text-right space-y-2.5 max-w-xl">
            <span className="text-xs font-bold text-brand bg-brand-subtle border border-primary-100 px-4 py-1.5 rounded-full inline-block shadow-xs">
              ثقة ورضا المرضى
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-heading leading-[1.35] pt-1">
              قصص نجاح وتجارب <span className="text-brand">مرضانا</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              نفخر بثقة مرضانا ونسعى دائماً لتقديم تجربة علاجية استثنائية تُحدث فرقاً حقيقياً في صحتهم.
            </p>
          </div>

          {/* Manual Slider Navigation Arrows */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="الرأي السابق"
              className="w-10 h-10 rounded-xl bg-white border border-border-default shadow-xs flex items-center justify-center text-heading hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
            >
              <FaChevronRight className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="الرأي التالي"
              className="w-10 h-10 rounded-xl bg-white border border-border-default shadow-xs flex items-center justify-center text-heading hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
            >
              <FaChevronLeft className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>

        {/* Automated & Touch-Interactive Carousel (Swiper) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1.15}
            loop={true}
            grabCursor={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.testimonials-swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.8,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="pb-4 pt-1 !overflow-visible"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id} className="h-auto">
                {/* Modern Interactive Card with Soft Luxury Hover Touch */}
                <div
                  className="group relative rounded-3xl p-8 flex flex-col justify-between h-full select-none cursor-pointer overflow-hidden border transition-all duration-500 ease-out bg-white text-body border-border-default shadow-xs hover:-translate-y-2 hover:scale-[1.01] hover:bg-gradient-to-br hover:from-brand-dark hover:via-primary-800 hover:to-brand hover:text-white hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-900/30"
                >
                  {/* Ambient Subtle Radial Glow Highlights (appear smoothly on hover) */}
                  <div className="absolute -top-16 -right-16 w-36 h-36 bg-teal-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Top Quote Icon */}
                  <div className="text-2xl mb-5 text-slate-300 group-hover:!text-teal-200 group-hover:scale-110 transition-all duration-300 relative z-10">
                    <FaQuoteRight />
                  </div>

                  {/* User Bio Header */}
                  <div className="flex items-center gap-3.5 mb-6 relative z-10">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-slate-100 shadow-xs transition-all duration-300 group-hover:border-white/80 group-hover:ring-2 group-hover:ring-teal-300/50 group-hover:scale-105"
                    />
                    <div className="text-right">
                      <h3 className="font-bold text-base text-heading group-hover:!text-white transition-colors duration-300">
                        {t.name}
                      </h3>
                      <p className="text-xs text-muted group-hover:!text-blue-100 transition-colors duration-300 mt-0.5">
                        {t.role}
                      </p>
                      <div className="flex items-center gap-1 text-rating mt-1.5 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)]">
                        {[...Array(t.rating)].map((_, i) => (
                          <FaStar key={i} className="w-3 h-3" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Quote Content - 100% Crisp White on Hover with High Contrast */}
                  <p className="text-sm leading-relaxed text-body group-hover:!text-white transition-colors duration-300 relative z-10 font-medium">
                    "{t.comment}"
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Indicator Pills */}
          <div className="testimonials-swiper-pagination flex items-center justify-center gap-2 mt-10"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
