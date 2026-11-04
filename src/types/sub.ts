import { MedicalRecord, MedicalServiceEntity } from "./medical";

export type Allergies = {
  id: number;
  medicalRecord: MedicalRecord;
  allergy: string | null;
};

export type Certification = {
  id: number;
//   doctor: Doctor;
  name: string | null;
  place: string | null;
  organization: string | null;
  photo: string | null;
};

export type ChronicDiseases = {
  id: number;
  medicalRecord: MedicalRecord;
  disease: string | null;
};

export type Medications = {
  id: number;
  medicalRecord: MedicalRecord;
  medications: string | null;
};

export type ServiceFeatures = {
  id: number;
  medicalService: MedicalServiceEntity;
  feature: string | null;
};