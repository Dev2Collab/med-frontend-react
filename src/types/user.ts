import { Appointment, Diagnosis, MedicalRecord } from "./medical";
import { Certification } from "./sub";

export interface User {
  fullName: string;
  phoneNumber: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

export type Role = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export type BloodType =
  | 'A_PLUS'
  | 'A_MINUS'
  | 'B_PLUS'
  | 'B_MINUS'
  | 'AB_PLUS'
  | 'AB_MINUS'
  | 'O_PLUS'
  | 'O_MINUS';

export type Specialty =
  | 'GENERAL'
  | 'DENTISTRY'
  | 'DERMATOLOGY'
  | 'OPHTHALMOLOGY'
  | 'CARDIOLOGY'
  | 'COSMETIC_DERMATOLOGY'
  | 'PEDIATRICS'
  | 'FAMILY_MEDICINE';

/** Base class — maps to ProjectUser */

export type Patient =  {
  emergencyContactName: string;
  emergencyContactPhone: string;
  bloodType: BloodType | null;
  diagnosis: Diagnosis | null;
  medicalRecord: MedicalRecord | null;
};

export type Doctor =  {
  appointments: Appointment[];
  certifications: Certification[];
  specialty: Specialty | null;
  specialization: string | null;
  work: string | null;
  about: string | null;
  createdAt: string;
};

// export type Admin =  {
//   jobTitle: string | null;
//   department: string | null;
//   permissions: string | null;
//   place: string | null;
//   createdAt: string;
// };

