import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '../components/common/Layout';
import { PageLoader } from '../components/common/PageLoader';
import { ROUTES } from '../constants/navigation';

const HomePage = lazy(() => import('../pages/Home').then((m) => ({ default: m.HomePage })));
const DoctorsPage = lazy(() => import('../pages/Doctors').then((m) => ({ default: m.DoctorsPage })));
const ServicesPage = lazy(() => import('../pages/Services').then((m) => ({ default: m.ServicesPage })));
const AppointmentsPage = lazy(() => import('../pages/Appointments').then((m) => ({ default: m.AppointmentsPage })));
const ContactPage = lazy(() => import('../pages/Contact').then((m) => ({ default: m.ContactPage })));
const AboutPage = lazy(() => import('../pages/About').then((m) => ({ default: m.AboutPage })));
const NotFoundPage = lazy(() => import('../pages/NotFound').then((m) => ({ default: m.NotFoundPage })));

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.SERVICES.slice(1)}
          element={
            <Suspense fallback={<PageLoader />}>
              <ServicesPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.DOCTORS.slice(1)}
          element={
            <Suspense fallback={<PageLoader />}>
              <DoctorsPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS.slice(1)}
          element={
            <Suspense fallback={<PageLoader />}>
              <AppointmentsPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ABOUT.slice(1)}
          element={
            <Suspense fallback={<PageLoader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.CONTACT.slice(1)}
          element={
            <Suspense fallback={<PageLoader />}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFoundPage />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
