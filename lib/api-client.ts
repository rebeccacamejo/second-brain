import axios, { AxiosError, AxiosInstance } from "axios";
import { SITE_URL } from "./constants";

/**
 * Axios instance configured for API requests
 */
export const apiClient: AxiosInstance = axios.create({
  baseURL: `${SITE_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request interceptor - Add auth tokens, logging, etc.
 */
apiClient.interceptors.request.use(
  (config) => {
    // Add authorization token if available
    const token =
      typeof window !== "undefined" ? localStorage.getItem("auth_token") : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Response interceptor - Handle errors globally
 */
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError) => {
    // Handle common errors
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized - clear token and redirect to login
          if (typeof window !== "undefined") {
            localStorage.removeItem("auth_token");
            // window.location.href = "/login";
          }
          break;
        case 403:
          console.error("Forbidden - You don't have permission");
          break;
        case 404:
          console.error("Not found");
          break;
        case 500:
          console.error("Server error - Please try again later");
          break;
        default:
          console.error(`Error: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error("Network error - Please check your connection");
    }

    return Promise.reject(error);
  }
);

export default apiClient;
