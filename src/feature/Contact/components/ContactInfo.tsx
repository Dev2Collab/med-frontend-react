import { FaLocationDot, FaPhone, FaClock } from 'react-icons/fa6';
import { InteractiveMap } from '../../../components/common/InteractiveMap';
import { CLINIC_INFO } from '../../../constants/navigation';

export function ContactInfo() {
  return (
    <div className="space-y-6 text-right">
      {/* Top 2 Cards in Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Address Card */}
        <div className="p-6 rounded-2xl bg-white border border-border-default shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand flex items-center justify-center text-lg">
            <FaLocationDot />
          </div>
          <div>
            <h4 className="font-bold text-base text-heading mb-1">
              العنوان
            </h4>
            <p className="text-xs text-body leading-relaxed">
              {CLINIC_INFO.address}
            </p>
          </div>
        </div>

        {/* Phone Numbers Card */}
        <div className="p-6 rounded-2xl bg-white border border-border-default shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand flex items-center justify-center text-lg">
            <FaPhone />
          </div>
          <div>
            <h4 className="font-bold text-base text-heading mb-1">
              أرقام التواصل
            </h4>
            <div className="space-y-1.5 text-xs text-body">
              <div className="flex items-center justify-between">
                <span className="text-muted">الهاتف الأرضي:</span>
                <span className="font-mono font-bold text-heading" dir="ltr">{CLINIC_INFO.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted">الخط الساخن:</span>
                <span className="font-mono font-bold text-red-600" dir="ltr">{CLINIC_INFO.emergencyPhone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Working Hours Card */}
      <div className="p-6 rounded-2xl bg-white border border-border-default shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-brand-subtle text-brand flex items-center justify-center text-lg">
              <FaClock />
            </div>
            <h4 className="font-bold text-base text-heading">
              ساعات العمل
            </h4>
          </div>

          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            مفتوح الآن
          </span>
        </div>

        <div className="space-y-2 text-xs text-body pt-1 border-t border-border-default">
          <div className="flex justify-between items-center py-1">
            <span className="font-bold text-heading">السبت - الخميس</span>
            <span dir="ltr">9:00 ص - 10:00 م</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="font-bold text-heading">الجمعة</span>
            <span dir="ltr">2:00 م - 10:00 م</span>
          </div>
          <div className="flex justify-between items-center py-1.5 bg-brand-subtle/70 px-3 rounded-lg text-brand font-bold">
            <span>طوارئ واستشارات عاجلة</span>
            <span>24 ساعة</span>
          </div>
        </div>
      </div>

      {/* Interactive Map Live Card */}
      <div className="rounded-2xl overflow-hidden border border-border-default shadow-md bg-white">
        <InteractiveMap height="240px" zoom={15} />
      </div>
    </div>
  );
}

export default ContactInfo;
