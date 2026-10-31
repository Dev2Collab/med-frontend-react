import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import {
  FaUserDoctor,
  FaMicroscope,
  FaHeartPulse,
  FaDna,
  FaStethoscope,
  FaKitMedical,
  FaArrowLeftLong,
  FaChevronRight,
  FaChevronLeft,
} from 'react-icons/fa6';
import { ROUTES } from '../../../constants/navigation';

// Swiper base styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const HOME_SERVICES: ServiceItem[] = [
  {
    id: 'consultations',
    title: 'الاستشارات الطبية التخصصية',
    description: 'احصل على تشخيص دقيق وخطة علاجية مخصصة لحالتك من قبل نخبة من الاستشاريين في كافة التخصصات الطبية.',
    image: '/images/doc1.png',
    icon: <FaUserDoctor className="w-4 h-4 text-brand-soft" />,
  },
  {
    id: 'procedures',
    title: 'الفحوصات والتحاليل المخبرية',
    description: 'أحدث أجهزة التحاليل المخبرية والأشعة التشخيصية لضمان دقة وسرعة ظهور النتائج والفحوصات الطبية.',
    image: '/images/Medical lab test.png',
    icon: <FaMicroscope className="w-4 h-4 text-brand-soft" />,
  },
  {
    id: 'checkups',
    title: 'الفحص الدوري الشامل',
    description: 'باقات فحص دوري متكاملة للأفراد والعائلات للكشف المبكر والوقاية وضمان راحة البال المستمرة.',
    image: '/images/Periodic checkup.png',
    icon: <FaHeartPulse className="w-4 h-4 text-brand-soft" />,
  },
  {
    id: 'treatment-programs',
    title: 'برامج العلاج والتأهيل',
    description: 'خطط علاجية وتأهيلية محكمة تضمن التعافي السريع بإشراف طبي ومتابعة مستمرة خطوة بخطوة.',
    image: '/images/Rehabilitation therapy.png',
    icon: <FaDna className="w-4 h-4 text-brand-soft" />,
  },
  {
    id: 'family-medicine',
    title: 'طب الأسرة والوقاية',
    description: 'رعاية صحية أولية شاملة لجميع أفراد الأسرة بمختلف الأعمار للوقاية وإدارة الحالات الصحية.',
    image: '/images/Doctor consultation.png',
    icon: <FaStethoscope className="w-4 h-4 text-brand-soft" />,
  },
  {
    id: 'urgent-care',
    title: 'الرعاية الطبية السريعة',
    description: 'جاهزية عالية للتعامل مع الحالات الطبية الطارئة وغير المجدولة بأعلى معايير السلامة والجودة.',
    image: '/images/Modern clinic interior.png',
    icon: <FaKitMedical className="w-4 h-4 text-brand-soft" />,
  },
];

export function ServicesOverview() {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="py-20 bg-brand-subtle/40 border-t border-b border-border-default overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header with Manual Navigation Controls */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6"
        >
          {/* Title and subtitle */}
          <div className="text-right border-r-4 border-brand pr-4 space-y-2">
            <h2 className="text-3xl md:text-4xl font-black text-heading leading-[1.35]">
              خدماتنا <span className="text-brand">الطبية المتكاملة</span>
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              نغطي كافة احتياجاتك الصحية تحت سقف واحد برعاية متقدمة وأحدث التجهيزات العالمية
            </p>
          </div>

          {/* Interactive Controls: Prev/Next Buttons + View All Link */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <Link
              to={ROUTES.SERVICES}
              className="text-sm font-bold text-brand hover:text-brand-hover flex items-center gap-2 group transition-colors ml-2"
            >
              <span>عرض جميع الخدمات</span>
              <FaArrowLeftLong className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            </Link>

            {/* Manual Slide Navigation Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
                aria-label="الخدمة السابقة"
                className="w-10 h-10 rounded-xl bg-white border border-border-default shadow-xs flex items-center justify-center text-heading hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
              >
                <FaChevronRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
                aria-label="الخدمة التالية"
                className="w-10 h-10 rounded-xl bg-white border border-border-default shadow-xs flex items-center justify-center text-heading hover:bg-brand hover:text-white hover:border-brand transition-all active:scale-95 cursor-pointer"
              >
                <FaChevronLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Interactive & Automated Carousel (Swiper) */}
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
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              el: '.services-swiper-pagination',
            }}
            breakpoints={{
              640: {
                slidesPerView: 2.2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3.2,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-4 pt-1 !overflow-visible"
          >
            {HOME_SERVICES.map((service) => (
              <SwiperSlide key={service.id} className="h-auto">
                <div
                  onClick={() => navigate(ROUTES.SERVICES)}
                  className="bg-white h-full rounded-2xl overflow-hidden border border-border-default shadow-xs hover:border-brand hover:shadow-xl hover:shadow-blue-600/10 hover:-translate-y-2 transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between group select-none"
                >
                  {/* Card Image Banner */}
                  <div className="relative h-48 bg-brand-dark overflow-hidden shrink-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-black/40 to-transparent"></div>

                    {/* Bottom title pill inside image */}
                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                      <span className="text-white font-bold text-base flex items-center gap-2 group-hover:text-teal-200 transition-colors duration-300">
                        <span className="p-1.5 rounded-lg bg-white/20 backdrop-blur-xs flex items-center justify-center group-hover:bg-brand transition-colors duration-300">
                          {service.icon}
                        </span>
                        <span>{service.title}</span>
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 text-right flex flex-col justify-between flex-grow space-y-4">
                    <p className="text-xs text-body leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="pt-3 border-t border-border-default flex items-center justify-start text-xs font-bold text-brand group-hover:text-accent transition-colors gap-2">
                      <span>التفاصيل</span>
                      <FaArrowLeftLong className="w-3 h-3 transition-transform duration-300 group-hover:-translate-x-2" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Pagination Indicator Pills */}
          <div className="services-swiper-pagination flex items-center justify-center gap-2 mt-8"></div>
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesOverview;
