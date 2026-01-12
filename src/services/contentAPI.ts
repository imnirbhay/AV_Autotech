import { apiClient } from './api';

// Define types for API responses
export interface Service {
  _id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  type: string;
}

// Partner API returns an array of image URLs (strings)
export type Partner = string;

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ContentData {
  hero: {
    greeting: string;
    title: string;
    highlightedTitle: string;
    subtitle: string;
    description: string;
    experience: {
      years: string;
      label: string;
    };
  };
  services: Service[];
  whyChooseUs: {
    title: string;
    description: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
  projects: Project[];
  testimonials: Testimonial[];
  footer: {
    sections: string[];
    description: string;
  };
}

// API endpoints
export const contentAPI = {
  // Get all services
  getServices: () => apiClient.get('/ServicesAndProjects/GetAllServicesOrProjects', {
    params: { type: 'service' }
  }),

  // Get all projects
  getProjects: () => apiClient.get('/ServicesAndProjects/GetAllServicesOrProjects', {
    params: { type: 'project' }
  }),

  // Get specific sections (these would need backend endpoints)
  getHero: () => apiClient.get('/content/hero'),
  getTestimonials: () => apiClient.get('/content/testimonials'),
  getWhyChooseUs: () => apiClient.get('/content/why-choose-us'),
  getFooter: () => apiClient.get('/content/footer'),
  getHomePageVideo: () => apiClient.get('/HomePageVideo/GetHomePageVideo'),
  getPartners: () => apiClient.get('/Partners/GetAllPartners'),
};

export default contentAPI;
