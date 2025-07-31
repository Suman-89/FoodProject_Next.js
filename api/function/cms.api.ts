import { toast } from "react-toastify";
import AxiosInstance from "../axios/axios";
import { endpoints } from "../endpoints/endpoints";

// Create product

export const Create = async (userPayLoad) => {
  const res = await AxiosInstance.post(
    endpoints.cms.productCreate,
    userPayLoad
  );
  return res.data;
};

// List of products
export const GetLandingPageList = async () => {
  try {
    const response = await AxiosInstance.get(endpoints.cms.productList);

    console.log("API Response:", response);

    return {
      success: true,
      message: "Landing pages fetched successfully",
      status: response.status,
      data: response?.data || [],
    };
  } catch (error: any) {
    console.error("API call failed:", error.response?.data || error.message);

    return {
      success: false,
      message: error.response?.data?.message || "Failed to fetch landing pages",
      status: error.response?.status || 500,
      data: [],
    };
  }
};

// delete
export const deleteProduct = async (id: string) => {
  try {
    const response = await AxiosInstance.delete(
      `${endpoints.cms.deleteItem}/${id}`
    );
    console.log("Product deleted:", response.data.message);
    toast.success(response.data.message);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error deleting product:",
      error.response?.data || error.message
    );
    toast.error("Failed to delete product");
    throw error;
  }
};
//show single item
export const getSignleProduct = async (id: string) => {
  try {
    const response = await AxiosInstance.get(
      `${endpoints.cms.productList}/${id}`
    );
    return response.data;
  } catch (error: any) {
    throw error;
  }
};
//Update
// export const updateProduct = async (payload,id) =>{
//    try {
//     const response = await AxiosInstance.put(`${endpoints.cms.proupdate}/${id}`, payload);
//     return response.data;
//   } catch (error) {
//     console.error("Error update password:", error);
//     throw error;
//   }
// };

export const updateProduct = async (
  payload: any,
  id: string
): Promise<UpdateResponse> => {
  try {
    console.log("Updating product:", { id, payload });

    const response = await AxiosInstance.put(
      `${endpoints.cms.proupdate}/${id}`,
      payload
    );

    console.log("Product updated successfully:", response.data);

    return {
      success: true,
      message: "Product updated successfully",
      data: response.data,
    };
  } catch (error: any) {
    console.error("Error updating product:", error);
    return {
      success: false,
      error: error.response?.data?.message || error.message,
      message: "Failed to update product",
    };
  }
};
