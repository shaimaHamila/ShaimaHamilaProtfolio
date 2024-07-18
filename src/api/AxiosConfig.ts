import axios from "axios";

const api = axios.create({
  baseURL: "/api/v1",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/login";
      await api.post("/auth/logout");
    }
    if (error.response.status === 500) {
      localStorage.removeItem("user");
      window.location.href = "/login";
      await api.post("/auth/logout");
    }
    return Promise.reject(error);
  },
);

export default api;
