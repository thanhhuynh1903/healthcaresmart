import { create } from "zustand";
import axios from "axios";
import useCookieStore from "./zustandCookie";
// chua ap dung auto fetch when failed
const MASTER_URL = "";
const { getCookie } = useCookieStore();

const axiosInstance = axios.create({
  baseURL: MASTER_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add the interceptor to include the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookie("e_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const useApiStore = create((set) => ({
  data: null, // Stores the response data
  isLoading: false, // Tracks loading state
  error: null, // Tracks error messages

  // Generalized state handlers
  setLoading: () => set({ isLoading: true, error: null }),
  setError: (error = null) => set({ error, isLoading: false }),
  setData: (data = null) => set({ data, isLoading: false }),

  // API methods
  fetchData: async (path : string) => {
    set((state : any) => state.setLoading());
    try {
      const response = await axiosInstance.get(path);
      set((state : any) => state.setData(response.data));
    } catch (error : any) {
      set((state :any) => state.setError(error.message));
    }
  },

  postData: async (path : string, payload :string) => {
    set((state : any) => state.setLoading());
    try {
      const response = await axiosInstance.post(path, payload);
      set((state : any) => state.setData(response.data));
    } catch (error : any) {
      set((state : any) => state.setError(error.message));
    }
  },

  postFileData: async (path: string , selectedFile: File, dataObject: any) => {
    set((state: any) => state.setLoading());
    const formData: any = new FormData();
    Object.entries(dataObject).forEach(([key, value]) => {
      formData.append(key, value);
    });
    if (selectedFile) {
      formData.append("image", selectedFile);
    }

    try {
      const response = await axiosInstance.post(path, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      set((state : any) => state.setData(response.data));
    } catch (error: any) {
      set((state: any) => state.setError(error.message));
    }
  },

  updateData: async (path : string, payload : string) => {
    set((state : any) => state.setLoading());
    try {
      const response = await axiosInstance.put(path, payload);
      set((state : any) => state.setData(response.data));
    } catch (error: any) {
      set((state: any) => state.setError(error.message));
    }
  },

  patchData: async (path : string, payload: string) => {
    set((state : any) => state.setLoading());
    try {
      const response = await axiosInstance.patch(path, payload);
      set((state : any) => state.setData(response.data));
    } catch (error : any) {
      set((state : any) => state.setError(error.message));
    }
  },

  deleteData: async (path : string) => {
    set((state : any) => state.setLoading());
    try {
      const response = await axiosInstance.delete(path);
      set({ data: null, isLoading: false });
      return response.data;
    } catch (error :  any) {
      set((state : any) => state.setError(error.message));
    }
  },
}));

export default useApiStore;
