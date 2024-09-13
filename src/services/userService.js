import axios from "axios";
import { backEndBaseUrl } from "../store/static-store";

// Create an axios instance with the base URL
const apiClient = axios.create({
  baseURL: backEndBaseUrl,
});

// Function to set the Authorization header
const setAuthHeader = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const registerUser = async (formData) => {
  const { username, email, password } = formData;
  const apiEndpoint = "/api/auth/signup";
  const requestBody = { username, email, password };
  console.log(requestBody)
  const response = await apiClient.post(apiEndpoint, requestBody);
  console.log(response)
  return response.data;
};

export const loginUser = async (formData) => {
  const { username, password } = formData;
  const apiEndpoint = "/api/auth/signin";
  const requestBody = { username, password };
  console.log(requestBody)
  const response = await apiClient.post(apiEndpoint, requestBody);
  return response.data;
};

// Use setAuthHeader for consistency with the other services
export const getUserDetails = async (userId, token) => {
  const response = await apiClient.get(
    `/api/buddhist-users/${userId}`,
    setAuthHeader(token)  // Use the same header setting method
  );
  return response.data;
};
