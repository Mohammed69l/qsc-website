import { useListBrands, useGetBrand } from "@workspace/api-client-react";

export function useBrands() {
  return useListBrands();
}

export function useBrand(slug: string) {
  return useGetBrand(slug, {
    query: {
      enabled: !!slug,
    }
  });
}
