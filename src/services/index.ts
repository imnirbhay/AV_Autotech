/**
 * API Service Layer
 * All API calls go through here
 */

import apiClient, { handleApiError } from './apiClient';
import type {
  HeroContent,
  Service,
  Testimonial,
  Project,
  Feature,
  ContactInfo,
  PageContent,
  ApiResponse,
  ContactFormData
} from './types';

export const heroService = {
  getHeroContent: async (): Promise<ApiResponse<HeroContent>> => {
    try {
      const response = await apiClient.get<ApiResponse<HeroContent>>('/hero');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  updateHeroContent: async (data: HeroContent): Promise<ApiResponse<HeroContent>> => {
    try {
      const response = await apiClient.put<ApiResponse<HeroContent>>('/hero', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const servicesService = {
  getAllServices: async (): Promise<ApiResponse<Service[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Service[]>>('/services');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  getServiceById: async (id: string): Promise<ApiResponse<Service>> => {
    try {
      const response = await apiClient.get<ApiResponse<Service>>(`/services/${id}`);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  createService: async (data: Service): Promise<ApiResponse<Service>> => {
    try {
      const response = await apiClient.post<ApiResponse<Service>>('/services', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  updateService: async (id: string, data: Service): Promise<ApiResponse<Service>> => {
    try {
      const response = await apiClient.put<ApiResponse<Service>>(`/services/${id}`, data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  deleteService: async (id: string): Promise<ApiResponse<null>> => {
    try {
      const response = await apiClient.delete<ApiResponse<null>>(`/services/${id}`);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const testimonialsService = {
  getAllTestimonials: async (): Promise<ApiResponse<Testimonial[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Testimonial[]>>('/testimonials');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  getTestimonialById: async (id: string): Promise<ApiResponse<Testimonial>> => {
    try {
      const response = await apiClient.get<ApiResponse<Testimonial>>(`/testimonials/${id}`);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  createTestimonial: async (data: Testimonial): Promise<ApiResponse<Testimonial>> => {
    try {
      const response = await apiClient.post<ApiResponse<Testimonial>>('/testimonials', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const projectsService = {
  getAllProjects: async (): Promise<ApiResponse<Project[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Project[]>>('/projects');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  getFeaturedProjects: async (): Promise<ApiResponse<Project[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Project[]>>('/projects?featured=true');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  getProjectById: async (id: string): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.get<ApiResponse<Project>>(`/projects/${id}`);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  createProject: async (data: Project): Promise<ApiResponse<Project>> => {
    try {
      const response = await apiClient.post<ApiResponse<Project>>('/projects', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const featuresService = {
  getAllFeatures: async (): Promise<ApiResponse<Feature[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Feature[]>>('/features');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  getFeatureById: async (id: string): Promise<ApiResponse<Feature>> => {
    try {
      const response = await apiClient.get<ApiResponse<Feature>>(`/features/${id}`);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const contactService = {
  getContactInfo: async (): Promise<ApiResponse<ContactInfo>> => {
    try {
      const response = await apiClient.get<ApiResponse<ContactInfo>>('/contact');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  submitContactForm: async (data: ContactFormData): Promise<ApiResponse<{ success: boolean }>> => {
    try {
      const response = await apiClient.post<ApiResponse<{ success: boolean }>>('/contact/submit', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },

  updateContactInfo: async (data: ContactInfo): Promise<ApiResponse<ContactInfo>> => {
    try {
      const response = await apiClient.put<ApiResponse<ContactInfo>>('/contact', data);
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

export const pageContentService = {
  getAllPageContent: async (): Promise<ApiResponse<PageContent>> => {
    try {
      const response = await apiClient.get<ApiResponse<PageContent>>('/content');
      return response.data;
    } catch (error) {
      return handleApiError(error) as any;
    }
  },
};

// Export all services as a single object for convenience
export const apiService = {
  hero: heroService,
  services: servicesService,
  testimonials: testimonialsService,
  projects: projectsService,
  features: featuresService,
  contact: contactService,
  pageContent: pageContentService,
};

export default apiService;
