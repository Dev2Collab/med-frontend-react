import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DOCTORS } from '../../../services/doctorsData';

export interface BookingFormData {
  fullName: string;
  phone: string;
  department: string;
  doctorId: string;
  appointmentDate: string;
  timeSlot: string;
  notes: string;
}

export interface BookingFormErrors {
  fullName?: string;
  phone?: string;
  appointmentDate?: string;
}

export const TIME_SLOTS = ['09:00 ص', '11:30 ص', '04:30 م', '07:00 م'] as const;

// Egyptian Mobile Number Regex: 010, 011, 012, 015 followed by 8 digits
export const EGYPT_PHONE_REGEX = /^01[0125][0-9]{8}$/;

export const INITIAL_BOOKING_STATE: BookingFormData = {
  fullName: '',
  phone: '',
  department: 'القلب',
  doctorId: '1',
  appointmentDate: '',
  timeSlot: '09:00 ص',
  notes: '',
};

export function useBookingForm() {
  const [searchParams] = useSearchParams();

  // Initialize department and doctor from URL query parameters if present
  const getInitialState = (): BookingFormData => {
    let dept = 'القلب';
    let docId = '1';

    const paramDept = searchParams.get('department');
    const paramDocId = searchParams.get('doctorId');

    if (paramDept) {
      dept = paramDept;
      const matched = DOCTORS.find((d) => d.department === paramDept);
      if (matched) docId = String(matched.id);
    }

    if (paramDocId) {
      const doc = DOCTORS.find((d) => String(d.id) === paramDocId);
      if (doc) {
        docId = String(doc.id);
        dept = doc.department;
      }
    }

    return {
      ...INITIAL_BOOKING_STATE,
      department: dept,
      doctorId: docId,
    };
  };

  const [formData, setFormData] = useState<BookingFormData>(getInitialState);
  const [errors, setErrors] = useState<BookingFormErrors>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Sync if query params change
  useEffect(() => {
    const paramDept = searchParams.get('department');
    const paramDocId = searchParams.get('doctorId');

    if (paramDept || paramDocId) {
      setFormData((prev) => {
        let dept = prev.department;
        let docId = prev.doctorId;

        if (paramDept) {
          dept = paramDept;
          const matched = DOCTORS.find((d) => d.department === paramDept);
          if (matched) docId = String(matched.id);
        }

        if (paramDocId) {
          const doc = DOCTORS.find((d) => String(d.id) === paramDocId);
          if (doc) {
            docId = String(doc.id);
            dept = doc.department;
          }
        }

        return { ...prev, department: dept, doctorId: docId };
      });
    }
  }, [searchParams]);

  const filteredDoctors = DOCTORS.filter((d) => d.department === formData.department);

  const handleDepartmentChange = (department: string) => {
    const firstDoc = DOCTORS.find((d) => d.department === department);
    setFormData((prev) => ({
      ...prev,
      department,
      doctorId: firstDoc ? String(firstDoc.id) : '1',
    }));
  };

  const handleDoctorChange = (doctorId: string) => {
    setFormData((prev) => ({ ...prev, doctorId }));
  };

  const handleSlotSelect = (timeSlot: string) => {
    setFormData((prev) => ({ ...prev, timeSlot }));
  };

  const updateField = (field: keyof BookingFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear field-specific error on change
    if (errors[field as keyof BookingFormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: BookingFormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 5) {
      newErrors.fullName = 'يرجى كتابة الاسم الثلاثي أو الرباعي بوضوح (5 أحرف على الأقل).';
    }

    const cleanPhone = formData.phone.trim().replace(/[\s-]/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'رقم المحمول مطلوب للتواصل وتأكيد الحجز.';
    } else if (!EGYPT_PHONE_REGEX.test(cleanPhone)) {
      newErrors.phone = 'يرجى إدخال رقم محمول مصري صحيح يبدأ بـ 01 (11 رقماً).';
    }

    if (!formData.appointmentDate) {
      newErrors.appointmentDate = 'يرجى تحديد تاريخ الزيارة المناسب.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrors({});
    setFormData(INITIAL_BOOKING_STATE);
  };

  return {
    formData,
    errors,
    submitted,
    filteredDoctors,
    timeSlots: TIME_SLOTS,
    updateField,
    handleDepartmentChange,
    handleDoctorChange,
    handleSlotSelect,
    handleSubmit,
    resetForm,
  };
}

export default useBookingForm;
