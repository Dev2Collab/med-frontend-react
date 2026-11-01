import { FaCircleCheck } from 'react-icons/fa6';
import { CLINIC_INFO } from '../../../constants/navigation';

export function BookingSummary() {
  return (
    <div className="bg-white p-8 rounded-3xl border border-[var(--border-gold)] shadow-xl space-y-6 text-right">
      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
        <img
          src="/logo/logo.png"
          alt={CLINIC_INFO.name}
          className="w-12 h-12 object-contain"
        />
        <div>
          <h4 className="font-black text-lg text-[var(--primary-color)]">
            مستشفى رويال التخصصي
          </h4>
          <span className="text-xs text-[var(--primary-text)] font-semibold">
            خدمة كبار الشخصيات والرعاية المتميزة
          </span>
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-700">
        <h5 className="font-bold text-[var(--primary-color)] text-base">
          لماذا تختار الحجز في مستشفى رويال؟
        </h5>
        
        <div className="flex items-start gap-3">
          <FaCircleCheck className="text-emerald-600 shrink-0 mt-1 text-base" />
          <p className="leading-relaxed">
            <strong>أولوية الدخول:</strong> مواعيد محددة بدقة لتفادي فترات الانتظار الطويلة في صالات الاستقبال.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaCircleCheck className="text-emerald-600 shrink-0 mt-1 text-base" />
          <p className="leading-relaxed">
            <strong>ملف طبي إلكتروني موحد:</strong> حفظ نتائج التحاليل والأشعة السابقة لسهولة المتابعة مع كافة الأطباء.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaCircleCheck className="text-emerald-600 shrink-0 mt-1 text-base" />
          <p className="leading-relaxed">
            <strong>تعقيم وتجهيزات أوروبية:</strong> غرف كشف وعيادات مجهزة بأعلى معايير مكافحة العدوى والسلامة.
          </p>
        </div>
      </div>

      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
        <span className="text-xs font-bold text-emerald-800 block mb-1">
          للحالات الطارئة والحرجة
        </span>
        <p className="text-xs text-emerald-700 leading-relaxed mb-2">
          لا داعي لحجز موعد مسبق، يرجى التوجه مباشرة إلى قسم الطوارئ أو الاتصال بالخط الساخن:
        </p>
        <span className="text-2xl font-black text-red-600 font-mono block">
          {CLINIC_INFO.emergencyPhone}
        </span>
      </div>
    </div>
  );
}

export default BookingSummary;
