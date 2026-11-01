import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import { MainLayout } from '../components/common/Layout';
import { PageLoader } from '../components/common/PageLoader';
import { ROUTES } from '../constants/navigation';

const HomePage = lazy(() => import('../feature/Home').then((module) => ({ default: module.HomePage })));
const DoctorsPage = lazy(() => import('../feature/Doctors').then((module) => ({ default: module.DoctorsPage })));
const ServicesPage = lazy(() => import('../feature/Services').then((module) => ({ default: module.ServicesPage })));
const AppointmentsPage = lazy(() => import('../feature/Appointments').then((module) => ({ default: module.AppointmentsPage })));
const ContactPage = lazy(() => import('../feature/Contact').then((module) => ({ default: module.ContactPage })));
const AboutPage = lazy(() => import('../feature/About').then((module) => ({ default: module.AboutPage })));
const NotFoundPage = lazy(() => import('../pages/NotFound').then((module) => ({ default: module.NotFoundPage })));

export function AppRoutes() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default AppRoutes;
