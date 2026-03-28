import { useListLocations, useGetLocation } from "@workspace/api-client-react";

export function useLocations() {
  return useListLocations();
}

export function useLocation(slug: string) {
  return useGetLocation(slug, {
    query: {
      enabled: !!slug,
    }
  });
}
