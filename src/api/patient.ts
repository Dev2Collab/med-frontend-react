import { BloodType } from '../types/user';
import client from './client';


export const getPatient = () =>
  client.get('/patient');

export const getMedicalRecord = () =>
  client.get('/patient/medical-record');

export const updateEmergencyContact=(form:any)=>
  client.put('/patient/update-emergency-contact',form)

export const updateBloodType=(bloodType:BloodType)=>
  client.put('/patient/update-blood-type',{bloodType})