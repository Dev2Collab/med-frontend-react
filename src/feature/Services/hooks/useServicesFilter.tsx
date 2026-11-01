import { useState, useMemo } from 'react';
import { FaStethoscope, FaTooth, FaSpa, FaEye } from 'react-icons/fa6';
import { ServicePackage } from '../components/ServicePackageCard';

export const SERVICE_CATEGORIES = ['الكل', 'طب عام', 'أسنان', 'جلدية', 'عيون'] as const;

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'general-checkup',
    badge: 'الخيار الأول',
    title: 'كشف واستشارة عامة',
    category: 'طب عام',
    description: 'تشخيص دقيق وحلول طبية متكاملة تحت إشراف نخبة من كبار الاستشاريين في بيئة مريحة وفاخرة.',
    features: ['فحص إكلينيكي شامل', 'استشارة مع استشاري دقيقة', 'خطة علاجية مبدئية وتوجيه'],
    price: '350',
    priceLabel: 'سعر الكشف',
    icon: <FaStethoscope className="w-5 h-5" />,
  },
  {
    id: 'teeth-whitening',
    title: 'تجميل وتبييض الأسنان',
    category: 'أسنان',
    description: 'احصل على ابتسامة هوليوود الساحرة باستخدام أحدث تقنيات الليزر والقشور الخزفية العالمية.',
    features: ['تبييض بالليزر المتقدم', 'إزالة التصبغات والترسبات', 'تصميم الابتسامة الرقمي'],
    price: '950',
    priceLabel: 'تبدأ الجلسات من',
    icon: <FaTooth className="w-5 h-5" />,
  },
  {
    id: 'derma-laser',
    badge: 'باقة حصرية',
    title: 'الجلدية والليزر التجميلي',
    category: 'جلدية',
    description: 'استعيدي نضارة وحيوية بشرتك مع برامج العناية المتطورة وأحدث أجهزة الليزر بدون ألم.',
    features: ['جلسات فراكشنال ليزر ونضارة', 'حقن البوتوكس والفيلر', 'علاج التصبغات والندوب'],
    price: '650',
    priceLabel: 'الباقة تبدأ من',
    icon: <FaSpa className="w-5 h-5" />,
  },
  {
    id: 'eye-lasik',
    title: 'فحص وتصحيح الإبصار',
    category: 'عيون',
    description: 'فحوصات قاع العين وتصحيح الإبصار بالفيمتو ليزك لضمان رؤية نقية وحياة أوضح.',
    features: ['تصوير طبوغرافي للقرنية', 'قياس ضغط العين والشبكية', 'استشارة الليزك المتخصصة'],
    price: '500',
    priceLabel: 'سعر الفحص الكامل',
    icon: <FaEye className="w-5 h-5" />,
  },
];

export function useServicesFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>('الكل');

  const filteredPackages = useMemo(() => {
    if (selectedCategory === 'الكل') return SERVICE_PACKAGES;
    return SERVICE_PACKAGES.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return {
    categories: SERVICE_CATEGORIES,
    selectedCategory,
    setSelectedCategory,
    filteredPackages,
    totalPackages: SERVICE_PACKAGES.length,
  };
}

export default useServicesFilter;
