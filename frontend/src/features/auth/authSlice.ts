import { type RootState } from "../../store/store";
import api from "../../api/AxiosConfig";
import { toast } from "react-toastify";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface InitialState {
  status: "idle" | "loading" | "failed";
  accessToken: string;
  refreshToken: string;
  user: any;
  error?: string;
}
const initialState: InitialState = {
  error: "",
  status: "idle",
  accessToken: "",
  refreshToken: "",
  user: undefined,
};

export const login = createAsyncThunk<any, any, { state: RootState }>("auth/login", async (admin: any) => {
  try {
    const response = await api.post("/auth/login", admin);
    return response.data;
  } catch (error: any) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.status = "idle";
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.user = action.payload.user;
      // Store user's tokens in local storage
      localStorage.setItem("accessToken", action.payload.accessToken);
      localStorage.setItem("refreshToken", action.payload.refreshToken);
    });
    builder.addCase(login.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message ?? "Somethin went wrong";
      toast.error("Failed to submit message. Please try again.");
    });
  },
});

export const selectUsers = (state: RootState) => state.auth;

export default authSlice.reducer;
