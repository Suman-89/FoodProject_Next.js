export interface IregisterProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  message: string;
  status: string;
}

export interface IloginProps {
  _id: string;
  name: string;
  email: string;
  password: string;
  token: string;
  message: string;
  status: string;
}

export interface IverifyProps {
  otp: string;
}

export interface registerProps extends IregisterProps {
    user: IregisterProps;
}

export interface loginProps extends IloginProps {
    user: IloginProps;
}

export interface verifyProps extends IverifyProps {
  user: IverifyProps;
}