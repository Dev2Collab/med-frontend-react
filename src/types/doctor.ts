export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  department: string;
  experience: string;
  rating: number;
  reviewsCount: number;
  image: string;
  bio: string;
  availableDays: string[];
}
