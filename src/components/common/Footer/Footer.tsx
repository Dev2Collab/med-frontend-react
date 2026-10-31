import { Link } from 'react-router-dom';
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from 'react-icons/fa6';
import { CLINIC_INFO, ROUTES } from '../../../constants/navigation';
import { InteractiveMap } from '../InteractiveMap';

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 text-right">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md shrink-0">
                <img
                  src="/logo/logo.png"
                  alt={CLINIC_INFO.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="font-black text-2xl text-white tracking-tight leading-none">
                  {CLINIC_INFO.name}
                </span>
                <span className="text-[11px] text-blue-200/80 font-bold mt-1 font-mono">
                  {CLINIC_INFO.nameEn}
                </span>
              </div>
            </div>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              نلتزم بتقديم رعاية صحية متميزة تهتم بأدق التفاصيل، وتجعل تجربة الكشف الطبية والرعاية من الأطباء المتخصصين في كافة التخصصات المتاحة.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                aria-label="تويتر"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand text-white transition-colors flex items-center justify-center text-sm"
              >
                <FaXTwitter />
              </a>
              <a
                href="#social"
                aria-label="فيسبوك"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand text-white transition-colors flex items-center justify-center text-sm"
              >
                <FaFacebookF />
              </a>
              <a
                href="#social"
                aria-label="إنستغرام"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-brand text-white transition-colors flex items-center justify-center text-sm"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Col 2: Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-soft border-b border-white/10 pb-2">
              معلومات التواصل
            </h4>
            <div className="space-y-3.5 text-sm text-blue-100/90">
              <div className="flex items-start gap-2.5">
                <FaLocationDot className="w-4 h-4 text-accent mt-1 shrink-0" />
                <span className="leading-relaxed">
                  {CLINIC_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaPhone className="w-3.5 h-3.5 text-accent shrink-0" />
                <span dir="ltr" className="font-mono">{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FaEnvelope className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Col 3: Working Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-soft border-b border-white/10 pb-2">
              ساعات العمل
            </h4>
            <div className="space-y-2.5 text-sm text-blue-100/90">
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span>السبت - الخميس</span>
                <span className="text-white font-medium" dir="ltr">9:00 AM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-white/10">
                <span>الجمعة</span>
                <span className="text-white font-medium" dir="ltr">4:00 PM - 9:00 PM</span>
              </div>
              <div className="flex justify-between items-center py-1.5 bg-white/5 px-3 rounded-lg border border-teal-400/30 text-teal-100 font-bold">
                <span>الطوارئ</span>
                <span>24 ساعة</span>
              </div>
            </div>
          </div>

          {/* Col 4: Interactive Map Live Preview */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-brand-soft border-b border-white/10 pb-2">
              موقع العيادة
            </h4>
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-xl bg-slate-900/30">
              <InteractiveMap height="168px" zoom={15} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 text-xs text-blue-200/70 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-right">
          <p>© 2024 {CLINIC_INFO.name}. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-4">
            <Link to={ROUTES.HOME} className="hover:text-white transition-colors">
              سياسة الخصوصية
            </Link>
            <span>•</span>
            <Link to={ROUTES.HOME} className="hover:text-white transition-colors">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
