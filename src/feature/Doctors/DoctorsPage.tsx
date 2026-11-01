import { useState } from 'react';
import { motion } from 'framer-motion';
import { DoctorCard } from './components/DoctorCard';
import { DoctorFilter } from './components/DoctorFilter';
import { DoctorJoinBanner } from './components/DoctorJoinBanner';
import { DoctorProfileModal } from './components/DoctorProfileModal';
import { useDoctorsFilter } from './hooks/useDoctorsFilter';
import { usePageTitle } from '../../hooks/usePageTitle';
import type { Doctor } from '../../types';

export function DoctorsPage() {
  usePageTitle('نخبة الأطباء والمتخصصين');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const {
    departments,
    selectedDept,
    setSelectedDept,
    searchTerm,
    setSearchTerm,
    filteredDoctors,
  } = useDoctorsFilter();

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Luxury Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-subtle/50 via-white to-slate-50/50 pt-20 pb-16 border-b border-border-default text-center">
        {/* Soft Ambient decorative glows */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          {/* Heading matching design reference */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-[1.35] tracking-tight mb-4"
          >
            نخبة الأطباء <span className="text-[#1670CC]">والمتخصصين</span>
          </motion.h1>

          {/* Subtitle matching design reference */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto"
          >
            جودة الرعاية تبدأ من اختيار الكفاءات. نضع بين أيديكم فريقاً من أمهر الاستشاريين في بيئة طبية فاخرة.
          </motion.p>
        </div>
      </section>

      {/* Filter and Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <DoctorFilter
            departments={[...departments]}
            selectedDepartment={selectedDept}
            onSelectDepartment={setSelectedDept}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          {filteredDoctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doc, idx) => (
                <motion.div
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                >
                  <DoctorCard doctor={doc} onViewProfile={setSelectedDoctor} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-border-default shadow-xs space-y-3">
              <p className="text-heading font-bold text-lg">لم يتم العثور على أطباء مطابقين للبحث</p>
              <p className="text-muted text-sm">يرجى تجربة كلمات بحث أخرى أو اختيار قسم مختلف.</p>
            </div>
          )}
        </div>
      </section>

      {/* Join CTA Banner */}
      <DoctorJoinBanner />

      {/* Doctor Detailed Profile Modal */}
      <DoctorProfileModal
        doctor={selectedDoctor}
        isOpen={Boolean(selectedDoctor)}
        onClose={() => setSelectedDoctor(null)}
      />
    </div>
  );
}

export default DoctorsPage;
