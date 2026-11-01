import { motion } from 'framer-motion';
import { ServicesHero } from './components/ServicesHero';
import { ServicePackageCard } from './components/ServicePackageCard';
import { SpecializedDepartments } from './components/SpecializedDepartments';
import { ServicesTrustBanner } from './components/ServicesTrustBanner';
import { ServicesFAQ } from './components/ServicesFAQ';
import { useServicesFilter } from './hooks/useServicesFilter';
import { usePageTitle } from '../../hooks/usePageTitle';

export function ServicesPage() {
  usePageTitle('خدماتنا الطبية الفاخرة');
  const { categories, selectedCategory, setSelectedCategory, filteredPackages } = useServicesFilter();

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Hero Header with category filters */}
      <ServicesHero
        categories={[...categories]}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Featured Pricing Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
              >
                <ServicePackageCard pkg={pkg} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Departments Grid */}
      <SpecializedDepartments />

      {/* Frequently Asked Questions & Preparation */}
      <ServicesFAQ />

      {/* Trust CTA Banner */}
      <ServicesTrustBanner />
    </div>
  );
}

export default ServicesPage;
