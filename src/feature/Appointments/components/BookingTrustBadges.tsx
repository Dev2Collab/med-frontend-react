import { FaCertificate, FaLock, FaHeadset } from 'react-icons/fa6';

export function BookingTrustBadges() {
  const BADGES = [
    {
      title: 'شهادات عالمية',
      description: 'معايير جودة طبية تتوافق مع أحدث البروتوكولات الصحية العالمية.',
      icon: <FaCertificate className="w-5 h-5 text-accent" />,
    },
    {
      title: 'خصوصية تامة',
      description: 'بياناتكم الطبية وسجلاتكم مشفرة ومحفوظة بأعلى درجات الأمان والسرية.',
      icon: <FaLock className="w-5 h-5 text-accent" />,
    },
    {
      title: 'دعم متواصل',
      description: 'فريق التنسيق الطبي وخدمة العملاء متاح لمساعدتكم والإجابة على استفساراتكم.',
      icon: <FaHeadset className="w-5 h-5 text-accent" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-10 text-center">
      {BADGES.map((b, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl bg-white border border-border-default shadow-xs space-y-3 flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-xl bg-brand-subtle flex items-center justify-center text-xl shadow-xs">
            {b.icon}
          </div>
          <h4 className="font-bold text-base text-heading">
            {b.title}
          </h4>
          <p className="text-xs text-body leading-relaxed">
            {b.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BookingTrustBadges;
