import React, { useState } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const INITIAL_CONTACT_STATE: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export function useContactForm() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_CONTACT_STATE);
  const [sent, setSent] = useState<boolean>(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const resetForm = () => {
    setSent(false);
    setFormData(INITIAL_CONTACT_STATE);
  };

  return {
    formData,
    sent,
    updateField,
    handleSubmit,
    resetForm,
  };
}

export default useContactForm;
