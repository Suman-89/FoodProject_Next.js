import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { Login, Otp, PasswordUpdate, Reg } from "@/api/function/auth.api";
import { useGlobalHooks } from "./globalHooks";
import { SIGNIN, SIGNUP, VERIFY, PASSWORD } from "../query_keys/authQuery.keys";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { loginProps } from "@/typescript/auth.interface";

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

export const useUserSignInMutation = (): UseMutationResult<
  Response,       // ✅ response from server
  Error,          // ✅ error type (can be customized)
  loginProps      // ✅ variables passed to mutate
> => {
  const { queryClient } = useGlobalHooks();

  const [_, setCookie] = useCookies(["token", "id"]);

  return useMutation<response, Error, loginProps>({
    mutationFn: Login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [SIGNIN] });
    },
  });
};

//Update Password
export const updatePasswordMutation = () =>{
  const {queryClient} = useGlobalHooks();
  
    return useMutation({
      mutationFn: PasswordUpdate,
  
      onSuccess: (res) => {
        console.log("Update success:", res);
        const { message } = res || {};
  
        toast.success(`${message || "Password updated successfully"}`);
        queryClient.invalidateQueries({ queryKey: [PASSWORD] });
      },
  
      onError: (error: any) => {
        toast.error(`${error?.response?.data?.msg || error?.message || "Update failed"}`);
        console.error("Update error:", error);
        queryClient.invalidateQueries({ queryKey: [PASSWORD] });
      },
    });
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


