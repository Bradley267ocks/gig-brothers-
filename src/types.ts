import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  image: string;
}

export interface ContactInfo {
  officePhone: string;
  mobile1: string;
  mobile2: string;
  email: string;
  address: string;
  googleMapsLink: string;
}
