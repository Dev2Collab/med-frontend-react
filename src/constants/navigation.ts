import { ClinicInfo, NavLinkItemType } from '../types';

export const ROUTES = {
  HOME: '/',
  APPOINTMENTS: '/appointments',
  ABOUT: '/about',
  SERVICES: '/services',
  DOCTORS: '/doctors',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = typeof ROUTES[RouteKey];

export const NAV_LINKS: NavLinkItemType[] = [
  { label: 'الرئيسية', path: ROUTES.HOME },
  { label: 'حجز موعد', path: ROUTES.APPOINTMENTS },
  { label: 'عن العيادة', path: ROUTES.ABOUT },
  { label: 'الخدمات', path: ROUTES.SERVICES },
  { label: 'الأطباء', path: ROUTES.DOCTORS },
  { label: 'اتصل بنا', path: ROUTES.CONTACT },
];

export const CLINIC_INFO: ClinicInfo = {
  name: 'عيادة الشفاء',
  nameEn: 'Al-Shifa Clinic',
  tagline: 'رعاية طبية متكاملة باحترافية وثقة',
  emergencyPhone: '16789',
  phone: '+20 2 2589 1234',
  email: 'info@alshifaclinic.com',
  address: 'القاهرة، التجمع الخامس، شارع التسعين الشمالي، برج النخبة الطبي',
  workingHours: 'السبت - الخميس: 9:00 ص - 10:00 م | الجمعة: 2:00 م - 10:00 م | الطوارئ: 24 ساعة',
  whatsapp: '+201012345678',
};
