import { useQuery, UseQueryResult } from '@tanstack/react-query';
import contentAPI, { ContentData, Service, Project, Partner } from './contentAPI';

// Query keys for React Query
export const contentQueryKeys = {
  all: ['content'] as const,
  hero: ['content', 'hero'] as const,
  services: ['content', 'services'] as const,
  projects: ['content', 'projects'] as const,
  testimonials: ['content', 'testimonials'] as const,
  whyChooseUs: ['content', 'why-choose-us'] as const,
  footer: ['content', 'footer'] as const,
  homePageVideo: ['content', 'home-page-video'] as const,
  partners: ['content', 'partners'] as const,
};

// Custom hooks for fetching content
export const useServices = (): UseQueryResult<Service[], unknown> => {
  return useQuery({
    queryKey: contentQueryKeys.services,
    queryFn: async () => {
      const response = await contentAPI.getServices();
      // API returns { message: string, data: Service[] }
      return response?.data || [];
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useProjects = (): UseQueryResult<Project[], unknown> => {
  return useQuery({
    queryKey: contentQueryKeys.projects,
    queryFn: async () => {
      const response = await contentAPI.getProjects();
      // API returns { message: string, data: Project[] }
      return response?.data || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};

export const useHero = () => {
  return useQuery({
    queryKey: contentQueryKeys.hero,
    queryFn: () => contentAPI.getHero(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useTestimonials = () => {
  return useQuery({
    queryKey: contentQueryKeys.testimonials,
    queryFn: () => contentAPI.getTestimonials(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useWhyChooseUs = () => {
  return useQuery({
    queryKey: contentQueryKeys.whyChooseUs,
    queryFn: () => contentAPI.getWhyChooseUs(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useFooter = () => {
  return useQuery({
    queryKey: contentQueryKeys.footer,
    queryFn: () => contentAPI.getFooter(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useHomePageVideo = () => {
  return useQuery({
    queryKey: contentQueryKeys.homePageVideo,
    queryFn: () => contentAPI.getHomePageVideo(),
    staleTime: 1000 * 60 * 5,
  });
};

export const usePartners = (): UseQueryResult<string[], unknown> => {
  return useQuery({
    queryKey: contentQueryKeys.partners,
    queryFn: async () => {
      const response = await contentAPI.getPartners();
      return Array.isArray(response) ? response : [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
