/**
 * Custom Hooks for API Data
 * Use these hooks in components to fetch and manage API data
 * 
 * Examples:
 * const { data, loading, error } = useServices();
 * const { data, loading, error } = useProjects();
 */

import { useState, useEffect } from 'react';
import {
  HeroContent,
  Service,
  Testimonial,
  Project,
  Feature,
  ContactInfo,
  PageContent,
} from './types';
import apiService from './index';

/**
 * Generic hook for loading data from API
 */
function useApiData<T>(
  fetchFunction: () => Promise<any>,
  initialData: T | null = null
) {
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction();
        if (response.success) {
          setData(response.data);
          setError(null);
        } else {
          setError(response.error || 'Failed to load data');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
}

/**
 * Hook for Hero Section
 */
export function useHeroContent() {
  return useApiData<HeroContent>(
    () => apiService.hero.getHeroContent()
  );
}

/**
 * Hook for Services Section
 */
export function useServices() {
  return useApiData<Service[]>(
    () => apiService.services.getAllServices(),
    []
  );
}

/**
 * Hook for Single Service
 */
export function useService(id: string) {
  return useApiData<Service>(
    () => apiService.services.getServiceById(id)
  );
}

/**
 * Hook for Testimonials Section
 */
export function useTestimonials() {
  return useApiData<Testimonial[]>(
    () => apiService.testimonials.getAllTestimonials(),
    []
  );
}

/**
 * Hook for Projects Section
 */
export function useProjects() {
  return useApiData<Project[]>(
    () => apiService.projects.getAllProjects(),
    []
  );
}

/**
 * Hook for Featured Projects
 */
export function useFeaturedProjects() {
  return useApiData<Project[]>(
    () => apiService.projects.getFeaturedProjects(),
    []
  );
}

/**
 * Hook for Single Project
 */
export function useProject(id: string) {
  return useApiData<Project>(
    () => apiService.projects.getProjectById(id)
  );
}

/**
 * Hook for Features Section
 */
export function useFeatures() {
  return useApiData<Feature[]>(
    () => apiService.features.getAllFeatures(),
    []
  );
}

/**
 * Hook for Contact Info
 */
export function useContactInfo() {
  return useApiData<ContactInfo>(
    () => apiService.contact.getContactInfo()
  );
}

/**
 * Hook for Page Content (all sections)
 */
export function usePageContent() {
  return useApiData<PageContent>(
    () => apiService.pageContent.getAllPageContent()
  );
}
