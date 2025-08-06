export interface IcreateProps {
  name: string;
  price: string;
  description: string;
  category: string;
}

export interface IlistProps {}

export interface IupdateProductProps {
  name: string;
  price: string;
  description: string;
  category: string;
}

export interface createProps extends IcreateProps {
  user: IcreateProps;
}

export interface listProps extends IlistProps {
  user: IlistProps;
}

export interface updateProductProps extends IupdateProductProps {
  user: IupdateProductProps;
}
