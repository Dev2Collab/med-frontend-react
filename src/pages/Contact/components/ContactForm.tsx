import { FaUser, FaEnvelope, FaRegCommentDots, FaArrowLeftLong, FaWhatsapp, FaCircleCheck } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';
import { CLINIC_INFO } from '../../../constants/navigation';
import { useContactForm } from '../hooks/useContactForm';

export function ContactForm() {
  const { formData, sent, updateField, handleSubmit, resetForm } = useContactForm();

  return (
    <div className="space-y-6 text-right">
      {/* Contact Form Card */}
      <div className="bg-white p-8 md:p-10 rounded-3xl border border-border-default shadow-lg space-y-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-heading mb-1.5">
            أرسل لنا رسالة
          </h3>
          <p className="text-body text-sm leading-relaxed">
            سنقوم بالرد عليكم في أقرب وقت ممكن عبر بريدك الإلكتروني.
          </p>
        </div>

        {sent ? (
          <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand text-white text-xl font-bold mx-auto flex items-center justify-center shadow-sm">
              <FaCircleCheck />
            </div>
            <h4 className="text-xl font-black text-heading">
              شكراً لتواصلك معنا!
            </h4>
            <p className="text-sm text-body leading-relaxed max-w-md mx-auto">
              تم استلام رسالتك بنجاح وسيتواصل معك فريق خدمة العملاء والاستشارات الطبية في أقرب وقت.
            </p>
            <Button
              variant="primary"
              size="sm"
              className="!bg-brand !text-white rounded-xl font-bold px-6 py-2.5"
              onClick={resetForm}
            >
              إرسال رسالة أخرى
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-heading mb-1.5">
                  الاسم الكامل <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="أدخل اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className="w-full pl-3 pr-10 py-3 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors"
                  />
                  <FaUser className="w-4 h-4 text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-heading mb-1.5">
                  البريد الإلكتروني <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="name@example.com"
                    dir="ltr"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full pl-3 pr-10 py-3 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors text-right"
                  />
                  <FaEnvelope className="w-4 h-4 text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold text-heading mb-1.5">
                الموضوع <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  id="contact-subject"
                  type="text"
                  required
                  placeholder="موضوع الرسالة أو الاستفسار"
                  value={formData.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  className="w-full pl-3 pr-10 py-3 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors"
                />
                <FaRegCommentDots className="w-4 h-4 text-muted absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-heading mb-1.5">
                الرسالة <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                placeholder="اكتب تفاصيل استفسارك هنا..."
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full p-3.5 rounded-xl border border-border-default bg-surface text-heading text-sm focus:border-brand focus:outline-none transition-colors resize-none leading-relaxed"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="!bg-brand hover:!bg-brand-hover !text-white font-bold rounded-xl py-3.5 px-8 shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>إرسال الرسالة</span>
              <FaArrowLeftLong className="w-3.5 h-3.5" />
            </Button>
          </form>
        )}
      </div>

      {/* WhatsApp Quick Chat Banner */}
      <div className="p-6 rounded-2xl bg-white border border-border-default shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-right space-y-1">
          <h4 className="font-bold text-base text-heading">
            تفضل المحادثة الفورية؟
          </h4>
          <p className="text-xs text-body">
            تحدث معنا مباشرة عبر الواتساب للرد السريع على استفساراتك.
          </p>
        </div>

        <a
          href={`https://wa.me/${(CLINIC_INFO.whatsapp || '+201012345678').replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-accent hover:bg-teal-700 text-white font-bold text-sm shadow-sm transition-all shrink-0 hover:scale-[1.02]"
        >
          <FaWhatsapp className="w-4 h-4" />
          <span>تواصل واتساب</span>
        </a>
      </div>
    </div>
  );
}

export default ContactForm;
