import { toast } from "react-toastify";
import AxiosInstance from "../axios/axios";
import { endpoints } from "../endpoints/endpoints";
import { Axios } from "axios";
import { array } from "yup";
import { MutationFunction } from "@tanstack/react-query";
import { loginProps, registerProps, verifyProps } from "@/typescript/auth.interface";

interface UpdateResponse {
  success: boolean;
  data?: any;
  error?: string;
  message?: string;
}

//Registration
export const Reg: MutationFunction<registerProps,unknown> = async (userPayLoad) => {
  const res = await AxiosInstance.post(endpoints.auth.signup, userPayLoad);
  return res.data;
};

//Verify
export const Otp:MutationFunction<verifyProps, unknown> = async (userPayLoad) => {
  const res = await AxiosInstance.post(endpoints.auth.otp, userPayLoad);
  return res.data;
};

//Login
export const Login:MutationFunction<loginProps, unknown> = async (userPayLoad) => {
  const res = await AxiosInstance.post(endpoints.auth.signin, userPayLoad);
  return res.data;
};

