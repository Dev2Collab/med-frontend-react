import { FaMagnifyingGlass, FaHeartPulse, FaBaby, FaTooth, FaUsers } from 'react-icons/fa6';

export interface DoctorFilterProps {
  departments: string[];
  selectedDepartment: string;
  onSelectDepartment: (dept: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export function DoctorFilter({
  departments,
  selectedDepartment,
  onSelectDepartment,
  searchTerm,
  onSearchChange,
}: DoctorFilterProps) {
  const getDeptIcon = (dept: string) => {
    switch (dept) {
      case 'القلب':
        return <FaHeartPulse className="w-3.5 h-3.5" />;
      case 'الأطفال':
        return <FaBaby className="w-3.5 h-3.5" />;
      case 'الأسنان':
        return <FaTooth className="w-3.5 h-3.5" />;
      case 'طب الأسرة':
        return <FaUsers className="w-3.5 h-3.5" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto mb-12">
      {/* Search Input Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="ابحث عن طبيب أو تخصص..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-4 pr-12 py-3.5 rounded-full border border-border-default bg-white text-heading placeholder:text-muted focus:border-brand focus:outline-none shadow-sm text-sm text-right transition-colors"
        />
        <FaMagnifyingGlass className="w-4 h-4 text-muted absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* Department Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {departments.map((dept) => {
          const isSelected = selectedDepartment === dept;
          return (
            <button
              key={dept}
              type="button"
              onClick={() => onSelectDepartment(dept)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                isSelected
                  ? 'bg-brand-dark text-white shadow-md scale-105'
                  : 'bg-white text-heading border border-border-default hover:border-brand hover:text-brand'
              }`}
            >
              {getDeptIcon(dept)}
              <span>{dept}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default DoctorFilter;
