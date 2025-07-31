import { useMutation, UseMutationResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { Create, deleteProduct, GetLandingPageList, getSignleProduct, Login, Otp, Reg, Remove, updateProduct } from "@/api/function/auth.api";
import { useGlobalHooks } from "./globalHooks";
import { CREATE, SIGNIN, SIGNUP, PRODUCTS, REMOVE, VERIFY, UPDATE } from "../query_keys/authQuery.keys";
import { Cookies, useCookies } from "react-cookie";
import { toast } from "react-toastify";

// Register
export const useUserSignUpMutation = (): UseMutationResult<unknown> => {
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: Reg,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SIGNUP] });
    },
  });
};

//Verify
export const useUserVerifyMutation = ():UseMutationResult<unknown> => {
  const { queryClient } = useGlobalHooks();

  return useMutation({
    mutationFn: Otp,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [VERIFY] });
    },
  });
};

//Sign in
export const useUserSignInMutation = ():UseMutationResult<unknown> => {
  const { queryClient } = useGlobalHooks();

  const [_, setCookie] = useCookies(["token","id"]);
  // localStorage.setItem("user_id",id);

  return useMutation({
    mutationFn: Login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SIGNIN] });
    },
  });
};
//Update Password
export const updatePasswordMutation = () =>{
  const {queryClient} = useGlobalHooks();
}







//update
// export const useUpdateItem = (id) => {
//   const { queryClient } = useGlobalHooks();

//   return useMutation({
//     mutationFn: updateProduct(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [UPDATE] });
//     },
//   });
// };
// mutation : send data to backend
// query: fetch data from backend


