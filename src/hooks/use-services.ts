import { useListServices, useGetService } from "@workspace/api-client-react";

export function useServices() {
  return useListServices();
}

export function useService(slug: string) {
  return useGetService(slug, {
    query: {
      enabled: !!slug,
    }
  });
}
