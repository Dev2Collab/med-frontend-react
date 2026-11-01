import {
  FaUser,
  FaPhone,
  FaStethoscope,
  FaCalendarDay,
  FaCircleInfo,
  FaArrowLeftLong,
  FaCircleCheck,
} from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { CLINIC_INFO } from '../../../constants/navigation';
import { useBookingForm } from '../hooks/useBookingForm';

export interface BookingFormProps {
  className?: string;
}

export function BookingForm({ className = '' }: BookingFormProps) {
  const {
    formData,
    errors,
    submitted,
    filteredDoctors,
    timeSlots,
    updateField,
    handleDepartmentChange,
    handleDoctorChange,
    handleSlotSelect,
    handleSubmit,
    resetForm,
  } = useBookingForm();

  if (submitted) {
    return (
      <div className="bg-white p-10 md:p-14 rounded-3xl border border-border-default shadow-xl text-center space-y-5 max-w-2xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-brand text-white text-2xl font-bold mx-auto flex items-center justify-center shadow-md">
          <FaCircleCheck />
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-heading">
          تم استلام طلب حجز موعدك بنجاح!
        </h3>
        <p className="text-sm text-body max-w-lg mx-auto leading-relaxed">
          شكراً لثقتكم بـ {CLINIC_INFO.name}. سيقوم منسق المواعيد بالاتصال بكم على الرقم ({formData.phone}) خلال وقت قصير لتأكيد تفاصيل الموعد النهائي وإرشادكم بالتعليمات التحضيرية.
        </p>
        <div className="pt-2">
          <Button
            variant="primary"
            size="md"
            className="!bg-brand !text-white rounded-xl px-8 py-3 font-bold"
            onClick={resetForm}
          >
            حجز موعد إضافي
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white p-8 md:p-12 rounded-3xl border border-border-default shadow-xl space-y-8 text-right max-w-4xl mx-auto ${className}`}
    >
      {/* Step 1: Personal Info */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand font-black text-lg border-b border-border-default pb-3">
          <FaUser className="w-4 h-4 text-accent" />
          <span>البيانات الشخصية للمريض</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full-name" className="block text-xs font-bold text-heading mb-1.5">
              الاسم الكامل <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="full-name"
                type="text"
                required
                placeholder="أدخل الاسم الرباعي"
                value={formData.fullName}
                onChange={(e) => updateField('fullName', e.target.value)}
                className={`w-full pl-3 pr-10 py-3 rounded-xl border bg-surface text-heading text-sm focus:outline-none transition-colors ${
                  errors.fullName
                    ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                    : 'border-border-default focus:border-brand'
                }`}
              />
              <FaUser className="w-4 h-4 text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.fullName && (
              <p className="text-red-600 text-xs font-semibold mt-1.5">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone-number" className="block text-xs font-bold text-heading mb-1.5">
              رقم المحمول المصري <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="phone-number"
                type="tel"
                required
                placeholder="01XXXXXXXXX"
                dir="ltr"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className={`w-full pl-3 pr-10 py-3 rounded-xl border bg-surface text-heading text-sm focus:outline-none transition-colors text-right ${
                  errors.phone
                    ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                    : 'border-border-default focus:border-brand'
                }`}
              />
              <FaPhone className="w-4 h-4 text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            {errors.phone && (
              <p className="text-red-600 text-xs font-semibold mt-1.5" dir="rtl">{errors.phone}</p>
            )}
          </div>
        </div>
      </div>

      {/* Step 2: Medical Service */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand font-black text-lg border-b border-border-default pb-3">
          <FaStethoscope className="w-4 h-4 text-accent" />
          <span>تحديد الخدمة الطبية</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="department-select" className="block text-xs font-bold text-heading mb-1.5">
              القسم / التخصص <span className="text-red-500">*</span>
            </label>
            <select
              id="department-select"
              value={formData.department}
              onChange={(e) => handleDepartmentChange(e.target.value)}
              className="w-full px-3 py-3 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors cursor-pointer"
            >
              <option value="القلب">أمراض وجراحة القلب</option>
              <option value="الجلدية">الجلدية والتجميل</option>
              <option value="الأطفال">طب الأطفال وحديثي الولادة</option>
              <option value="طب الأسرة">طب الأسرة والرعاية الشاملة</option>
              <option value="الأسنان">طب وجراحة الأسنان</option>
            </select>
          </div>

          <div>
            <label htmlFor="doctor-select" className="block text-xs font-bold text-heading mb-1.5">
              الطبيب المختص <span className="text-red-500">*</span>
            </label>
            <select
              id="doctor-select"
              value={formData.doctorId}
              onChange={(e) => handleDoctorChange(e.target.value)}
              className="w-full px-3 py-3 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors cursor-pointer"
            >
              {filteredDoctors.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} - {doc.specialty}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Step 3: Date & Time Slots */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-brand font-black text-lg border-b border-border-default pb-3">
          <FaCalendarDay className="w-4 h-4 text-accent" />
          <span>الموعد المقترح</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div>
            <label htmlFor="appointment-date" className="block text-xs font-bold text-heading mb-1.5">
              تاريخ الزيارة <span className="text-red-500">*</span>
            </label>
            <input
              id="appointment-date"
              type="date"
              required
              value={formData.appointmentDate}
              onChange={(e) => updateField('appointmentDate', e.target.value)}
              className={`w-full px-3 py-3 rounded-xl border bg-surface text-heading text-sm focus:outline-none transition-colors ${
                errors.appointmentDate
                  ? 'border-red-400 focus:border-red-500 bg-red-50/20'
                  : 'border-border-default focus:border-brand'
              }`}
            />
            {errors.appointmentDate && (
              <p className="text-red-600 text-xs font-semibold mt-1.5">{errors.appointmentDate}</p>
            )}
          </div>

          <div>
            <span className="block text-xs font-bold text-heading mb-1.5">
              الفترات المتاحة
            </span>
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = formData.timeSlot === slot;
                return (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => handleSlotSelect(slot)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                      isSelected
                        ? 'bg-brand-dark text-white border-brand-dark shadow-xs'
                        : 'bg-white text-heading border-border-default hover:border-brand'
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notice Info */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-brand-subtle text-brand text-xs">
          <FaCircleInfo className="w-4 h-4 shrink-0" />
          <span>المواعيد تخضع للتأكيد النهائي من قبل اتصال قسم المواعيد بكم خلال ساعات العمل.</span>
        </div>
      </div>

      {/* Step 4: Notes */}
      <div className="space-y-2">
        <label htmlFor="appointment-notes" className="block text-xs font-bold text-heading">
          ملاحظات طبية إضافية (اختياري)
        </label>
        <textarea
          id="appointment-notes"
          rows={3}
          placeholder="يرجى كتابة أي ملاحظات أو استفسارات طبية ترغب في مشاركتها مع الطبيب..."
          value={formData.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          className="w-full p-3.5 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors resize-none leading-relaxed"
        />
      </div>

      {/* Submit Section */}
      <div className="pt-2 space-y-3">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="!bg-brand hover:!bg-brand-hover !text-white font-black rounded-xl py-4 px-10 shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
        >
          <span>تأكيد طلب الحجز</span>
          <FaArrowLeftLong className="w-4 h-4" />
        </Button>

        <p className="text-[11px] text-muted leading-relaxed">
          بتقديم هذا الطلب، فإنك توافق على سياسة الخصوصية والشروط العامة للمركز لحفظ واستخدام بياناتك لأغراض جدولة المواعيد الطبية وتسهيل رعايتك.
        </p>
      </div>
    </form>
  );
}

export default BookingForm;
