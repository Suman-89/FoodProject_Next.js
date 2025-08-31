export interface IregisterProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  message: string;
  status: string;
}

// export interface IloginProps {
//   _id: string;
//   name: string;
//   email: string;
//   password: string;
//   token: string;
//   message: string;
//   status: string;
// }

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  status: boolean;
  message: string;
  user: {
    id: string;
    name?: string;
    email?: string;
  };
}

export interface IverifyProps {
  otp: string;
}
// export interface IupdatePasswordProps {
//   isLoading: boolean;
//   password: string;
//   _id: string;
//   message:string;
// }
// Request payload
export interface IUpdatePasswordRequest {
  user_id: string;   // ✅ consistent with your component
  password: string;
}

// Response from backend
export interface IUpdatePasswordResponse {
  message: string;
  status: string;    // e.g., "success" | "error"
}


export interface registerProps extends IregisterProps {
  user: IregisterProps;
}

// export interface loginProps extends IloginProps {
//   user: IloginProps;
// }

export interface verifyProps extends IverifyProps {
  user: IverifyProps;
}

// export interface updatePasswordProps extends IupdatePasswordProps {
//   user: IupdatePasswordProps;
// }
