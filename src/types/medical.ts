import { Allergies, ChronicDiseases, Medications, ServiceFeatures } from "./sub";
import { Specialty } from "./user";

export type AppointmentStatus =
  | 'PENDING'
  | 'CONFIRMED'
  | 'CANCELLED'
  | 'COMPLETED';

export type Appointment = {
  id: number;
//   patient: Patient | null;
  medicalService: MedicalServiceEntity | null;
//   doctor: Doctor;
  specialization: string | null;
  appointmentDate: string; // ISO date (YYYY-MM-DD)
  appointmentTime: string; // ISO time (HH:mm:ss)
  notes: string | null;
  status: AppointmentStatus;
};

export type Diagnosis = {
  id: number;
//   patient: Patient;
//   doctor: Doctor | null;
  diagnosisName: string | null;
  date: string | null; // ISO date
  location: string | null;
};

export type LabResult = {
  id: number;
  medicalRecord: MedicalRecord;
  testName: string | null;
  fileUrl: string | null;
  fileSizeMb: number | null;
  date: string | null; // ISO date
};

export type MedicalRecord = {
  id: number;
//   patient: Patient;
  allergies: Allergies[];
  chronicDiseases: ChronicDiseases[];
  medications: Medications[];
  createdAt: string; // ISO date-time
};

export type Prescription = {
  id: number;
  medicalRecord: MedicalRecord;
//   doctor: Doctor | null;
  date: string | null; // ISO date
  fileUrl: string | null;
  createdAt: string; // ISO date-time
};

export type MedicalServiceEntity = {
  id: number;
  name: string | null;
  description: string | null;
  price: number | null;
  startFrom: number | null;
  consulating: number | null;
  specialization: Specialty | null;
  features: ServiceFeatures[];
  mostRequested: boolean;
//   admin: Admin | null;
};