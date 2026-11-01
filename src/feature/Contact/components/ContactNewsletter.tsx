import React, { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { Button } from '../../../components/ui/Button';

export function ContactNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="bg-gradient-to-br from-brand-dark via-primary-800 to-brand rounded-3xl p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 text-right">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-black text-white">
              اشترك في نشرتنا الصحية
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed max-w-xl">
              احصل على نصائح طبية وعروض حصرية تصلك مباشرة إلى بريدك الإلكتروني دورياً.
            </p>
          </div>

          {subscribed ? (
            <div className="bg-white/20 backdrop-blur-xs px-6 py-3 rounded-xl font-bold text-sm text-teal-100 flex items-center gap-2">
              <FaCircleCheck className="text-teal-300 text-base" />
              <span>تم الاشتراك بنجاح، شكراً لانضمامك!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <input
                type="email"
                required
                dir="ltr"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-72 px-4 py-3 rounded-xl bg-white text-heading placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-teal-300 text-sm"
              />
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full sm:w-auto !bg-accent hover:!bg-teal-700 !text-white font-bold rounded-xl px-7 py-3 whitespace-nowrap shadow-sm"
              >
                اشترك الآن
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default ContactNewsletter;
