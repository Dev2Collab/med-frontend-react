import { useState, useMemo } from 'react';
import { DOCTORS } from '../../../services/doctorsData';
import { Doctor } from '../../../types';

export const DOCTOR_DEPARTMENTS = ['الكل', 'القلب', 'الجلدية', 'الأطفال', 'الأسنان', 'طب الأسرة'] as const;

export function useDoctorsFilter(initialDoctors: Doctor[] = DOCTORS) {
  const [selectedDept, setSelectedDept] = useState<string>('الكل');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredDoctors = useMemo(() => {
    return initialDoctors.filter((doc) => {
      const matchDept = selectedDept === 'الكل' || doc.department === selectedDept;
      const matchSearch =
        doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.department.toLowerCase().includes(searchTerm.toLowerCase());
      return matchDept && matchSearch;
    });
  }, [initialDoctors, selectedDept, searchTerm]);

  return {
    departments: DOCTOR_DEPARTMENTS,
    selectedDept,
    setSelectedDept,
    searchTerm,
    setSearchTerm,
    filteredDoctors,
    totalDoctorsCount: initialDoctors.length,
    resultsCount: filteredDoctors.length,
  };
}

export default useDoctorsFilter;
