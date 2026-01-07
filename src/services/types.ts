/**
 * Type Definitions for API Services
 */

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon?: string;
  price?: number;
  features?: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  clientImage?: string;
  content: string;
  rating?: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  image?: string;
  link?: string;
  category?: string;
  featured?: boolean;
}

export interface Feature {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

export interface ContactInfo {
  id?: string;
  email: string;
  phone: string;
  address: string;
  businessHours?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface PageContent {
  hero: HeroContent;
  services: Service[];
  testimonials: Testimonial[];
  projects: Project[];
  features: Feature[];
  contact: ContactInfo;
}
