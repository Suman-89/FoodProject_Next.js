import { Cookies, useCookies } from "react-cookie";
import { useGlobalHooks } from "./globalHooks";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { Create, deleteProduct, GetLandingPageList, getSignleProduct, updateProduct } from "@/api/function/cms.api";
import { CREATE, PRODUCTS, REMOVE, UPDATE } from "../query_keys/cmsQuery.keys";



// Create
export const useProductCreateMutation = () => {
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: Create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CREATE] });
    },
  });
};

// List
export const listQuery = () => {
  return useQuery({
    queryKey: [PRODUCTS],
    queryFn: () => GetLandingPageList(),
  });
};

export const useDeleteProduct = () => {
  const {queryClient} = useGlobalHooks();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [REMOVE] });
    },
    onError: (error) => {
      console.error("Error in mutation:", error);
    },
  });
};

//single item
export const fetchSingleItem = (id:string) => {
  return useQuery({
    queryKey: [PRODUCTS,id],
    queryFn: () => getSignleProduct(id),
  });
};

export const useUpdateItem = () => {
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: ({ updatedData, slug }: { updatedData: any; slug: string }) =>
      updateProduct(updatedData, slug),

    onSuccess: (res) => {
      console.log("Update success:", res);
      const { message } = res || {};

      toast.success(`${message || "Product updated successfully"}`);
      queryClient.invalidateQueries({ queryKey: [UPDATE] });
    },

    onError: (error: any) => {
      toast.error(`${error?.response?.data?.msg || error?.message || "Update failed"}`);
      console.error("Update error:", error);
      queryClient.invalidateQueries({ queryKey: [UPDATE] });
    },
  });
};
