export const endpoints = {
  auth: {
    signin: `/login/user`,
    signup: `/create/user`,
    otp: `/verify-otp`,
    userdashboard: `/user/dashboard`,
    updatepassword: `/update/password`,
  },
  cms: {
    productCreate: `/user/create/product`,
    productList: `/get/product`,
    deleteItem: (id) => `/delete/product/${id}`,
    proupdate: "/update/product",
    editData: (id) => `/get/product/${id}`,
  },
};
