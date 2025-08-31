import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { Login, Otp, PasswordUpdate, Reg } from "@/api/function/auth.api";
import { useGlobalHooks } from "./globalHooks";
import { SIGNIN, SIGNUP, VERIFY, PASSWORD } from "../query_keys/authQuery.keys";
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import { ILoginResponse, IUpdatePasswordRequest, IUpdatePasswordResponse, LoginFormValues } from "@/typescript/auth.interface";

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

// export const useUserSignInMutation = (): UseMutationResult<
//   Response,       // ✅ response from server
//   Error,          // ✅ error type (can be customized)
//   loginProps      // ✅ variables passed to mutate
// > => {
//   const { queryClient } = useGlobalHooks();

//   const [_, setCookie] = useCookies(["token", "id"]);

//   return useMutation<response, Error, loginProps>({
//     mutationFn: Login,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [SIGNIN] });
//     },
//   });
// };
export const useUserSignInMutation = (): UseMutationResult<
  ILoginResponse,   // ✅ API response type
  Error,            // ✅ error type
  LoginFormValues   // ✅ variables passed to mutate()
> => {
  const { queryClient } = useGlobalHooks();
  const [, setCookie] = useCookies(["token", "id"]);

  return useMutation<ILoginResponse, Error, LoginFormValues>({
    mutationFn: Login,
    onSuccess: (data) => {
      // data is strongly typed as ILoginResponse
      const { token, user } = data;

      // store cookies if needed here (or in Login.tsx)
      setCookie("id", user.id, { path: "/" });
      setCookie("token", token, {
        path: "/",
        sameSite: "lax",
        secure: true,
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });

      queryClient.invalidateQueries({ queryKey: [SIGNIN] });
    },
  });
};
//Update Password
// export const updatePasswordMutation = ():UseMutationResult<updatePasswordProps> =>{
//   const {queryClient} = useGlobalHooks();
  
//     return useMutation({
//       mutationFn: PasswordUpdate,
  
//       onSuccess: (res) => {
//         console.log("Update success:", res);
//         const { message } = res || {};
  
//         toast.success(`${message || "Password updated successfully"}`);
//         queryClient.invalidateQueries({ queryKey: [PASSWORD] });
//       },
  
//       onError: (error: any) => {
//         toast.error(`${error?.response?.data?.msg || error?.message || "Update failed"}`);
//         console.error("Update error:", error);
//         queryClient.invalidateQueries({ queryKey: [PASSWORD] });
//       },
//     });
// }


export const useUpdatePasswordMutation = (): UseMutationResult<
  IUpdatePasswordResponse,   // ✅ response
  Error,                     // ✅ error
  IUpdatePasswordRequest     // ✅ variables
> => {
  const { queryClient } = useGlobalHooks();

  return useMutation<IUpdatePasswordResponse, Error, IUpdatePasswordRequest>({
    mutationFn: PasswordUpdate,
    onSuccess: (res) => {
      toast.success(res.message || "Password updated successfully");
      queryClient.invalidateQueries({ queryKey: [PASSWORD] });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.msg || error?.message || "Update failed"
      );
      queryClient.invalidateQueries({ queryKey: [PASSWORD] });
    },
  });
};





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


