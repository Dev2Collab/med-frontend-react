import { HeroSection } from './components/HeroSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ServicesOverview } from './components/ServicesOverview';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingCTA } from './components/BookingCTA';
import { usePageTitle } from '../../hooks/usePageTitle';

/**
 * HomePage Aggregator Component
 * Strictly orchestrates sections representing Al-Shifa Clinic Home Page
 */
export function HomePage() {
  usePageTitle('الرئيسية');
  return (
    <div className="home-page-container">
      <HeroSection />
      <WhyChooseUsSection />
      <ServicesOverview />
      <TestimonialsSection />
      <BookingCTA />
    </div>
  );
}

export default HomePage;
